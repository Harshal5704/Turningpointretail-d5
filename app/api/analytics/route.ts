import { NextResponse } from "next/server"
import { getAccessToken } from "@/lib/accessToken"

const PROJECT_ID = "turningpoint-1750859947357"
const PROPERTY_ID = "494568469"

export async function POST() {
  try {
    // Get the latest access token from the refresh system
    const ACCESS_TOKEN = getAccessToken()

    console.log(
      "🔑 Using current ACCESS_TOKEN:",
      ACCESS_TOKEN ? ACCESS_TOKEN.substring(0, 20) + "..." : "No token available",
    )

    if (!ACCESS_TOKEN) {
      console.warn("⚠️ No access token available, using mock data")
      return getMockData("No access token available")
    }

    console.log("📊 Making request to Google Analytics Reporting API with auto-refreshed token...")

    const response = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "x-goog-user-project": PROJECT_ID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
        dimensions: [{ name: "city" }, { name: "country" }, { name: "deviceCategory" }],
        metrics: [{ name: "activeUsers" }, { name: "eventCount" }, { name: "keyEvents" }, { name: "screenPageViews" }],
      }),
    })

    console.log("📈 Response status:", response.status)
    console.log("📋 Response headers:", Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorText = await response.text()
      console.error("❌ Analytics API Error Response:", errorText)
      return getMockData(`API Error: ${response.status} - ${errorText}`)
    }

    const responseText = await response.text()
    console.log("📄 Raw response:", responseText.substring(0, 500))

    // Check if response is HTML (error page)
    if (responseText.trim().startsWith("<!DOCTYPE") || responseText.trim().startsWith("<html")) {
      console.error("❌ Received HTML response instead of JSON")
      return getMockData("Received HTML response instead of JSON")
    }

    try {
      const analyticsData = JSON.parse(responseText)
      console.log("✅ Successfully parsed analytics data with auto-refreshed token")
      return NextResponse.json(analyticsData)
    } catch (parseError) {
      console.error("❌ JSON parse error:", parseError)
      return getMockData("JSON parsing failed")
    }
  } catch (error) {
    console.error("❌ Analytics API request failed:", error)
    return getMockData(`Network error: ${error instanceof Error ? error.message : "Unknown error"}`)
  }
}

export async function GET() {
  // Return token status and analytics info for debugging
  const ACCESS_TOKEN = getAccessToken()

  return NextResponse.json({
    message: "Google Analytics API with Auto-Refreshing Token (Every 2 seconds)",
    tokenAvailable: !!ACCESS_TOKEN,
    tokenPreview: ACCESS_TOKEN ? ACCESS_TOKEN.substring(0, 20) + "..." : null,
    refreshInterval: "2 seconds",
    timestamp: new Date().toISOString(),
    endpoints: {
      analytics: "POST /api/analytics - Get analytics data",
      status: "GET /api/analytics - Get token status",
    },
  })
}

function getMockData(reason: string) {
  return NextResponse.json({
    rows: [
      {
        dimensionValues: [{ value: "New York" }, { value: "United States" }, { value: "desktop" }],
        metricValues: [{ value: "425" }, { value: "2125" }, { value: "78" }, { value: "1530" }],
      },
      {
        dimensionValues: [{ value: "Los Angeles" }, { value: "United States" }, { value: "mobile" }],
        metricValues: [{ value: "356" }, { value: "1780" }, { value: "64" }, { value: "1280" }],
      },
      {
        dimensionValues: [{ value: "Chicago" }, { value: "United States" }, { value: "desktop" }],
        metricValues: [{ value: "289" }, { value: "1445" }, { value: "52" }, { value: "1040" }],
      },
      {
        dimensionValues: [{ value: "Houston" }, { value: "United States" }, { value: "mobile" }],
        metricValues: [{ value: "234" }, { value: "1170" }, { value: "42" }, { value: "840" }],
      },
      {
        dimensionValues: [{ value: "London" }, { value: "United Kingdom" }, { value: "desktop" }],
        metricValues: [{ value: "312" }, { value: "1560" }, { value: "56" }, { value: "1120" }],
      },
      {
        dimensionValues: [{ value: "Manchester" }, { value: "United Kingdom" }, { value: "mobile" }],
        metricValues: [{ value: "178" }, { value: "890" }, { value: "32" }, { value: "640" }],
      },
      {
        dimensionValues: [{ value: "Toronto" }, { value: "Canada" }, { value: "tablet" }],
        metricValues: [{ value: "167" }, { value: "835" }, { value: "30" }, { value: "600" }],
      },
      {
        dimensionValues: [{ value: "Vancouver" }, { value: "Canada" }, { value: "desktop" }],
        metricValues: [{ value: "145" }, { value: "725" }, { value: "26" }, { value: "520" }],
      },
      {
        dimensionValues: [{ value: "Paris" }, { value: "France" }, { value: "mobile" }],
        metricValues: [{ value: "201" }, { value: "1005" }, { value: "36" }, { value: "720" }],
      },
      {
        dimensionValues: [{ value: "Berlin" }, { value: "Germany" }, { value: "desktop" }],
        metricValues: [{ value: "189" }, { value: "945" }, { value: "34" }, { value: "680" }],
      },
      {
        dimensionValues: [{ value: "Tokyo" }, { value: "Japan" }, { value: "mobile" }],
        metricValues: [{ value: "267" }, { value: "1335" }, { value: "48" }, { value: "960" }],
      },
      {
        dimensionValues: [{ value: "Sydney" }, { value: "Australia" }, { value: "desktop" }],
        metricValues: [{ value: "156" }, { value: "780" }, { value: "28" }, { value: "560" }],
      },
      {
        dimensionValues: [{ value: "Mumbai" }, { value: "India" }, { value: "mobile" }],
        metricValues: [{ value: "334" }, { value: "1670" }, { value: "60" }, { value: "1200" }],
      },
      {
        dimensionValues: [{ value: "São Paulo" }, { value: "Brazil" }, { value: "desktop" }],
        metricValues: [{ value: "223" }, { value: "1115" }, { value: "40" }, { value: "800" }],
      },
      {
        dimensionValues: [{ value: "Mexico City" }, { value: "Mexico" }, { value: "mobile" }],
        metricValues: [{ value: "134" }, { value: "670" }, { value: "24" }, { value: "480" }],
      },
    ],
    error: `Using mock data - ${reason}`,
  })
}
