"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Eye,
  MousePointer,
  TrendingUp,
  RefreshCw,
  MapPin,
  Clock,
  Download,
  Activity,
} from "lucide-react"
import Link from "next/link"

interface AnalyticsData {
  city: string
  country: string
  deviceCategory: string
  minutesAgo: string
  activeUsers: number
  eventCount: number
  keyEvents: number
  screenPageViews: number
}

interface DashboardMetrics {
  totalActiveUsers: number
  totalPageViews: number
  totalEvents: number
  totalKeyEvents: number
  topCountries: Array<{ country: string; users: number }>
  topCities: Array<{ city: string; users: number }>
  deviceBreakdown: Array<{ device: string; users: number; percentage: number }>
  recentActivity: Array<AnalyticsData>
  rawData: AnalyticsData[]
}

export default function AnalyticsDashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [refreshInterval, setRefreshInterval] = useState(30) // seconds
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchAnalyticsData = useCallback(async (showLoading = true) => {
    if (showLoading) setLoading(true)
    setIsRefreshing(true)
    setError(null)

    try {
      const response = await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // Empty body since credentials are hardcoded
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      // Process the raw data into dashboard metrics
      const processedMetrics = processAnalyticsData(data.rows || [])
      setMetrics(processedMetrics)
      setLastUpdated(new Date())
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch analytics data")
    } finally {
      if (showLoading) setLoading(false)
      setIsRefreshing(false)
    }
  }, [])

  // Auto-refresh effect
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      fetchAnalyticsData(false) // Don't show loading spinner for auto-refresh
    }, refreshInterval * 1000)

    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval, fetchAnalyticsData])

  // Initial data fetch
  useEffect(() => {
    fetchAnalyticsData()
  }, [fetchAnalyticsData])

  const processAnalyticsData = (rows: any[]): DashboardMetrics => {
    const countryMap = new Map<string, number>()
    const cityMap = new Map<string, number>()
    const deviceMap = new Map<string, number>()

    let totalActiveUsers = 0
    let totalPageViews = 0
    let totalEvents = 0
    let totalKeyEvents = 0

    const rawData: AnalyticsData[] = rows.map((row) => {
      const data: AnalyticsData = {
        city: row.dimensionValues[0]?.value || "Unknown",
        country: row.dimensionValues[1]?.value || "Unknown",
        deviceCategory: row.dimensionValues[2]?.value || "Unknown",
        minutesAgo: row.dimensionValues[3]?.value || "0",
        activeUsers: Number.parseInt(row.metricValues[0]?.value || "0"),
        eventCount: Number.parseInt(row.metricValues[1]?.value || "0"),
        keyEvents: Number.parseInt(row.metricValues[2]?.value || "0"),
        screenPageViews: Number.parseInt(row.metricValues[3]?.value || "0"),
      }

      // Aggregate totals
      totalActiveUsers += data.activeUsers
      totalPageViews += data.screenPageViews
      totalEvents += data.eventCount
      totalKeyEvents += data.keyEvents

      // Aggregate by country
      countryMap.set(data.country, (countryMap.get(data.country) || 0) + data.activeUsers)

      // Aggregate by city
      cityMap.set(data.city, (cityMap.get(data.city) || 0) + data.activeUsers)

      // Aggregate by device
      deviceMap.set(data.deviceCategory, (deviceMap.get(data.deviceCategory) || 0) + data.activeUsers)

      return data
    })

    // Calculate device percentages
    const deviceBreakdown = Array.from(deviceMap.entries())
      .map(([device, users]) => ({
        device,
        users,
        percentage: totalActiveUsers > 0 ? Math.round((users / totalActiveUsers) * 100) : 0,
      }))
      .sort((a, b) => b.users - a.users)

    return {
      totalActiveUsers,
      totalPageViews,
      totalEvents,
      totalKeyEvents,
      topCountries: Array.from(countryMap.entries())
        .map(([country, users]) => ({ country, users }))
        .sort((a, b) => b.users - a.users)
        .slice(0, 10),
      topCities: Array.from(cityMap.entries())
        .map(([city, users]) => ({ city, users }))
        .sort((a, b) => b.users - a.users)
        .slice(0, 10),
      deviceBreakdown,
      recentActivity: rawData
        .sort((a, b) => Number.parseInt(a.minutesAgo) - Number.parseInt(b.minutesAgo))
        .slice(0, 20),
      rawData,
    }
  }

  const exportToCSV = () => {
    if (!metrics) return

    const csvData = [
      ["City", "Country", "Device", "Minutes Ago", "Active Users", "Event Count", "Key Events", "Page Views"],
      ...metrics.rawData.map((row) => [
        row.city,
        row.country,
        row.deviceCategory,
        row.minutesAgo,
        row.activeUsers.toString(),
        row.eventCount.toString(),
        row.keyEvents.toString(),
        row.screenPageViews.toString(),
      ]),
    ]

    const csvContent = csvData.map((row) => row.join(",")).join("\n")
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `analytics-data-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const exportToJSON = () => {
    if (!metrics) return

    const jsonData = {
      exportDate: new Date().toISOString(),
      summary: {
        totalActiveUsers: metrics.totalActiveUsers,
        totalPageViews: metrics.totalPageViews,
        totalEvents: metrics.totalEvents,
        totalKeyEvents: metrics.totalKeyEvents,
      },
      topCountries: metrics.topCountries,
      topCities: metrics.topCities,
      deviceBreakdown: metrics.deviceBreakdown,
      rawData: metrics.rawData,
    }

    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `analytics-data-${new Date().toISOString().split("T")[0]}.json`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case "mobile":
        return <Smartphone className="w-4 h-4" />
      case "desktop":
        return <Monitor className="w-4 h-4" />
      case "tablet":
        return <Tablet className="w-4 h-4" />
      default:
        return <Monitor className="w-4 h-4" />
    }
  }

  const formatTimeAgo = (minutesAgo: string) => {
    const minutes = Number.parseInt(minutesAgo)
    if (minutes === 0) return "Just now"
    if (minutes === 1) return "1 minute ago"
    if (minutes < 60) return `${minutes} minutes ago`
    const hours = Math.floor(minutes / 60)
    if (hours === 1) return "1 hour ago"
    return `${hours} hours ago`
  }

  const getStatusColor = () => {
    if (error) return "text-red-500"
    if (isRefreshing) return "text-yellow-500"
    return "text-green-500"
  }

  const getStatusText = () => {
    if (error) return "Error"
    if (isRefreshing) return "Updating..."
    return "Live"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Turning Point <span className="text-green-600">Retail</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <Activity className={`w-4 h-4 ${getStatusColor()}`} />
                <span className={`text-sm font-medium ${getStatusColor()}`}>{getStatusText()}</span>
              </div>
              <Badge variant="secondary">Analytics Dashboard</Badge>
              <Link href="/admin" className="text-gray-700 hover:text-green-600 font-medium">
                Back to Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Real-time website analytics and visitor insights</p>
            {lastUpdated && <p className="text-sm text-gray-500 mt-2">Last updated: {lastUpdated.toLocaleString()}</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
            {/* Auto-refresh Controls */}
            <Card className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Switch id="auto-refresh" checked={autoRefresh} onCheckedChange={setAutoRefresh} />
                  <Label htmlFor="auto-refresh" className="text-sm">
                    Auto-refresh
                  </Label>
                </div>
                <Select value={refreshInterval.toString()} onValueChange={(value) => setRefreshInterval(Number(value))}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10s</SelectItem>
                    <SelectItem value="30">30s</SelectItem>
                    <SelectItem value="60">1m</SelectItem>
                    <SelectItem value="300">5m</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            {/* Manual Refresh and Export */}
            <div className="flex gap-2">
              <Button onClick={() => fetchAnalyticsData()} disabled={loading} variant="outline">
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
              </Button>
              <Button onClick={exportToCSV} disabled={!metrics} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                CSV
              </Button>
              <Button onClick={exportToJSON} disabled={!metrics} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                JSON
              </Button>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {metrics && (
          <>
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.totalActiveUsers}</div>
                  <p className="text-xs text-muted-foreground">Currently online</p>
                </CardContent>
                {isRefreshing && <div className="absolute top-0 right-0 w-1 h-full bg-green-500 animate-pulse" />}
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.totalPageViews}</div>
                  <p className="text-xs text-muted-foreground">Total page views</p>
                </CardContent>
                {isRefreshing && <div className="absolute top-0 right-0 w-1 h-full bg-green-500 animate-pulse" />}
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Events</CardTitle>
                  <MousePointer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.totalEvents}</div>
                  <p className="text-xs text-muted-foreground">User interactions</p>
                </CardContent>
                {isRefreshing && <div className="absolute top-0 right-0 w-1 h-full bg-green-500 animate-pulse" />}
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Key Events</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.totalKeyEvents}</div>
                  <p className="text-xs text-muted-foreground">Important actions</p>
                </CardContent>
                {isRefreshing && <div className="absolute top-0 right-0 w-1 h-full bg-green-500 animate-pulse" />}
              </Card>
            </div>

            {/* Detailed Analytics */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="geography">Geography</TabsTrigger>
                <TabsTrigger value="devices">Devices</TabsTrigger>
                <TabsTrigger value="realtime">Real-time</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Countries</CardTitle>
                      <CardDescription>Users by country</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {metrics.topCountries.slice(0, 5).map((country, index) => (
                          <div key={country.country} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500 w-6">#{index + 1}</span>
                              <Globe className="w-4 h-4 text-gray-500" />
                              <span className="font-medium">{country.country}</span>
                            </div>
                            <Badge variant="secondary">{country.users}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Device Categories</CardTitle>
                      <CardDescription>Users by device type</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {metrics.deviceBreakdown.map((device, index) => (
                          <div key={device.device} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {getDeviceIcon(device.device)}
                              <span className="font-medium capitalize">{device.device}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">{device.percentage}%</span>
                              <Badge variant="secondary">{device.users}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="geography" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Countries</CardTitle>
                      <CardDescription>All countries with active users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 max-h-96 overflow-y-auto">
                        {metrics.topCountries.map((country, index) => (
                          <div
                            key={country.country}
                            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500 w-8">#{index + 1}</span>
                              <Globe className="w-4 h-4 text-gray-500" />
                              <span>{country.country}</span>
                            </div>
                            <Badge variant="outline">{country.users} users</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Cities</CardTitle>
                      <CardDescription>Top cities with active users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 max-h-96 overflow-y-auto">
                        {metrics.topCities.map((city, index) => (
                          <div
                            key={city.city}
                            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500 w-8">#{index + 1}</span>
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <span>{city.city}</span>
                            </div>
                            <Badge variant="outline">{city.users} users</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="devices" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Device Breakdown</CardTitle>
                    <CardDescription>Detailed view of user devices with percentages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {metrics.deviceBreakdown.map((device) => (
                        <Card key={device.device} className="relative overflow-hidden">
                          <CardContent className="p-6 text-center">
                            <div className="flex justify-center mb-2">{getDeviceIcon(device.device)}</div>
                            <h3 className="font-semibold capitalize mb-1">{device.device}</h3>
                            <p className="text-2xl font-bold text-green-600">{device.users}</p>
                            <p className="text-sm text-gray-500">{device.percentage}% of users</p>
                          </CardContent>
                          <div
                            className="absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300"
                            style={{ width: `${device.percentage}%` }}
                          />
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="realtime" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Real-time Activity</CardTitle>
                    <CardDescription>Recent user activity on your website</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {metrics.recentActivity.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {getDeviceIcon(activity.deviceCategory)}
                            <div>
                              <p className="font-medium">
                                {activity.city}, {activity.country}
                              </p>
                              <p className="text-sm text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {formatTimeAgo(activity.minutesAgo)}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">
                              <span className="font-medium">{activity.activeUsers}</span> users
                            </p>
                            <p className="text-sm text-gray-500">{activity.screenPageViews} views</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}

        {!metrics && !loading && (
          <Card>
            <CardContent className="p-12 text-center">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Analytics Data</h3>
              <p className="text-gray-600 mb-4">Fetching real-time analytics from Google Analytics...</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
