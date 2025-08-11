import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    // Return mock data for now to avoid Supabase connection issues
    const mockPosts = [
      {
        id: "1",
        title: "Welcome to Turning Point Retail",
        content:
          "We are excited to share our latest insights and news with you. Stay tuned for more updates on retail consulting trends and industry developments.",
        author: "Turning Point Team",
        created_at: new Date().toISOString(),
        image: null,
      },
    ]

    return NextResponse.json(mockPosts)
  } catch (error) {
    console.error("Error in blog API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ error: "Method not implemented" }, { status: 501 })
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({ error: "Method not implemented" }, { status: 501 })
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ error: "Method not implemented" }, { status: 501 })
}
