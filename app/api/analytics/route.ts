import { NextResponse } from "next/server"

// Hardcoded Google Analytics API configuration
const ACCESS_TOKEN =
  "ya29.a0AS3H6NxFmHfWaBySXC2AtDZSYIikKXReKKPMywpFGhuYd9TQBAo5lQIl1AAzOkX5wvx1_fY02HodjcSTB_bFO4utyDq0c_PUVmURitBneLRLghkT5KRSktvmgxUQJpam4c7MLAbjmJoDykR0WcxQ56eJof283yAs3RF8ZFovaCgYKAW4SARYSFQHGX2MiEaupmmQxvZSsZrxcJnPlpw0175"
const PROJECT_ID = "turningpoint-1750859947357"
const PROPERTY_ID = "494568469"

export async function POST() {
  try {
    console.log("Making request to Google Analytics API...")

    const response = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runRealtimeReport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "x-goog-user-project": PROJECT_ID,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dimensions: [{ name: "city" }, { name: "country" }, { name: "deviceCategory" }, { name: "minutesAgo" }],
          metrics: [
            { name: "activeUsers" },
            { name: "eventCount" },
            { name: "keyEvents" },
            { name: "screenPageViews" },
          ],
        }),
      },
    )

    console.log("Response status:", response.status)
    console.log("Response headers:", Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Analytics API Error Response:", errorText)

      // Return mock data if API fails
      return NextResponse.json({
        rows: [
          {
            dimensionValues: [{ value: "New York" }, { value: "United States" }, { value: "desktop" }, { value: "0" }],
            metricValues: [{ value: "5" }, { value: "25" }, { value: "2" }, { value: "15" }],
          },
          {
            dimensionValues: [{ value: "London" }, { value: "United Kingdom" }, { value: "mobile" }, { value: "1" }],
            metricValues: [{ value: "3" }, { value: "18" }, { value: "1" }, { value: "12" }],
          },
          {
            dimensionValues: [{ value: "Toronto" }, { value: "Canada" }, { value: "tablet" }, { value: "2" }],
            metricValues: [{ value: "2" }, { value: "10" }, { value: "0" }, { value: "8" }],
          },
          {
            dimensionValues: [{ value: "Sydney" }, { value: "Australia" }, { value: "desktop" }, { value: "3" }],
            metricValues: [{ value: "4" }, { value: "22" }, { value: "3" }, { value: "18" }],
          },
          {
            dimensionValues: [{ value: "Berlin" }, { value: "Germany" }, { value: "mobile" }, { value: "5" }],
            metricValues: [{ value: "1" }, { value: "8" }, { value: "0" }, { value: "5" }],
          },
        ],
        error: `API Error: ${response.status} - Using mock data for demonstration`,
      })
    }

    const responseText = await response.text()
    console.log("Raw response:", responseText.substring(0, 500))

    // Check if response is HTML (error page)
    if (responseText.trim().startsWith("<!DOCTYPE") || responseText.trim().startsWith("<html")) {
      console.error("Received HTML response instead of JSON")

      // Return mock data if we get HTML response
      return NextResponse.json({
        rows: [
          {
            dimensionValues: [{ value: "New York" }, { value: "United States" }, { value: "desktop" }, { value: "0" }],
            metricValues: [{ value: "8" }, { value: "35" }, { value: "4" }, { value: "22" }],
          },
          {
            dimensionValues: [
              { value: "Los Angeles" },
              { value: "United States" },
              { value: "mobile" },
              { value: "1" },
            ],
            metricValues: [{ value: "6" }, { value: "28" }, { value: "2" }, { value: "18" }],
          },
          {
            dimensionValues: [{ value: "London" }, { value: "United Kingdom" }, { value: "desktop" }, { value: "2" }],
            metricValues: [{ value: "4" }, { value: "20" }, { value: "1" }, { value: "15" }],
          },
          {
            dimensionValues: [{ value: "Toronto" }, { value: "Canada" }, { value: "tablet" }, { value: "3" }],
            metricValues: [{ value: "3" }, { value: "15" }, { value: "1" }, { value: "12" }],
          },
          {
            dimensionValues: [{ value: "Paris" }, { value: "France" }, { value: "mobile" }, { value: "4" }],
            metricValues: [{ value: "2" }, { value: "12" }, { value: "0" }, { value: "8" }],
          },
          {
            dimensionValues: [{ value: "Tokyo" }, { value: "Japan" }, { value: "desktop" }, { value: "1" }],
            metricValues: [{ value: "5" }, { value: "25" }, { value: "3" }, { value: "20" }],
          },
        ],
        error: "Authentication issue - Using mock data for demonstration",
      })
    }

    try {
      const analyticsData = JSON.parse(responseText)
      console.log("Successfully parsed analytics data")
      return NextResponse.json(analyticsData)
    } catch (parseError) {
      console.error("JSON parse error:", parseError)

      // Return mock data if JSON parsing fails
      return NextResponse.json({
        rows: [
          {
            dimensionValues: [{ value: "Chicago" }, { value: "United States" }, { value: "desktop" }, { value: "0" }],
            metricValues: [{ value: "12" }, { value: "45" }, { value: "6" }, { value: "30" }],
          },
          {
            dimensionValues: [{ value: "Miami" }, { value: "United States" }, { value: "mobile" }, { value: "1" }],
            metricValues: [{ value: "8" }, { value: "32" }, { value: "3" }, { value: "24" }],
          },
          {
            dimensionValues: [{ value: "Vancouver" }, { value: "Canada" }, { value: "tablet" }, { value: "2" }],
            metricValues: [{ value: "4" }, { value: "18" }, { value: "1" }, { value: "14" }],
          },
        ],
        error: "JSON parsing failed - Using mock data for demonstration",
      })
    }
  } catch (error) {
    console.error("Analytics API request failed:", error)

    // Return comprehensive mock data for demonstration
    return NextResponse.json(
      {
        rows: [
          {
            dimensionValues: [{ value: "New York" }, { value: "United States" }, { value: "desktop" }, { value: "0" }],
            metricValues: [{ value: "15" }, { value: "65" }, { value: "8" }, { value: "42" }],
          },
          {
            dimensionValues: [
              { value: "Los Angeles" },
              { value: "United States" },
              { value: "mobile" },
              { value: "1" },
            ],
            metricValues: [{ value: "12" }, { value: "48" }, { value: "5" }, { value: "35" }],
          },
          {
            dimensionValues: [{ value: "London" }, { value: "United Kingdom" }, { value: "desktop" }, { value: "2" }],
            metricValues: [{ value: "8" }, { value: "32" }, { value: "3" }, { value: "25" }],
          },
          {
            dimensionValues: [{ value: "Toronto" }, { value: "Canada" }, { value: "tablet" }, { value: "3" }],
            metricValues: [{ value: "6" }, { value: "24" }, { value: "2" }, { value: "18" }],
          },
          {
            dimensionValues: [{ value: "Paris" }, { value: "France" }, { value: "mobile" }, { value: "4" }],
            metricValues: [{ value: "4" }, { value: "18" }, { value: "1" }, { value: "12" }],
          },
          {
            dimensionValues: [{ value: "Berlin" }, { value: "Germany" }, { value: "desktop" }, { value: "5" }],
            metricValues: [{ value: "3" }, { value: "15" }, { value: "1" }, { value: "10" }],
          },
          {
            dimensionValues: [{ value: "Tokyo" }, { value: "Japan" }, { value: "mobile" }, { value: "1" }],
            metricValues: [{ value: "7" }, { value: "28" }, { value: "4" }, { value: "22" }],
          },
          {
            dimensionValues: [{ value: "Sydney" }, { value: "Australia" }, { value: "desktop" }, { value: "2" }],
            metricValues: [{ value: "5" }, { value: "20" }, { value: "2" }, { value: "15" }],
          },
        ],
        error: "Network error - Using mock data for demonstration",
      },
      { status: 200 },
    )
  }
}

export async function GET() {
  // Redirect GET requests to POST
  return POST()
}
