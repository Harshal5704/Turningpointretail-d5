export interface AnalyticsData {
  city: string
  country: string
  deviceCategory: string
  minutesAgo: string
  activeUsers: number
  eventCount: number
  keyEvents: number
  screenPageViews: number
}

export interface AnalyticsResponse {
  dimensionHeaders: Array<{ name: string }>
  metricHeaders: Array<{ name: string; type: string }>
  rows: Array<{
    dimensionValues: Array<{ value: string }>
    metricValues: Array<{ value: string }>
  }>
  totals: Array<{
    metricValues: Array<{ value: string }>
  }>
  maximums: Array<{
    metricValues: Array<{ value: string }>
  }>
  minimums: Array<{
    metricValues: Array<{ value: string }>
  }>
  rowCount: number
}

export async function fetchAnalyticsData(): Promise<{
  data: AnalyticsData[]
  totals: {
    activeUsers: number
    eventCount: number
    keyEvents: number
    screenPageViews: number
  }
  error?: string
}> {
  try {
    const response = await fetch("/api/analytics", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Error fetching analytics data:", error)
    return {
      data: [],
      totals: {
        activeUsers: 0,
        eventCount: 0,
        keyEvents: 0,
        screenPageViews: 0,
      },
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

export function processAnalyticsData(response: AnalyticsResponse): {
  data: AnalyticsData[]
  totals: {
    activeUsers: number
    eventCount: number
    keyEvents: number
    screenPageViews: number
  }
} {
  const data: AnalyticsData[] =
    response.rows?.map((row) => ({
      city: row.dimensionValues[0]?.value || "Unknown",
      country: row.dimensionValues[1]?.value || "Unknown",
      deviceCategory: row.dimensionValues[2]?.value || "Unknown",
      minutesAgo: row.dimensionValues[3]?.value || "0",
      activeUsers: Number.parseInt(row.metricValues[0]?.value || "0"),
      eventCount: Number.parseInt(row.metricValues[1]?.value || "0"),
      keyEvents: Number.parseInt(row.metricValues[2]?.value || "0"),
      screenPageViews: Number.parseInt(row.metricValues[3]?.value || "0"),
    })) || []

  const totals = {
    activeUsers: Number.parseInt(response.totals?.[0]?.metricValues[0]?.value || "0"),
    eventCount: Number.parseInt(response.totals?.[0]?.metricValues[1]?.value || "0"),
    keyEvents: Number.parseInt(response.totals?.[0]?.metricValues[2]?.value || "0"),
    screenPageViews: Number.parseInt(response.totals?.[0]?.metricValues[3]?.value || "0"),
  }

  return { data, totals }
}
