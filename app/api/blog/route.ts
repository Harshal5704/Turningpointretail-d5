import { type NextRequest, NextResponse } from "next/server"

// In a real application, you would use a database
// For this demo, we'll use a simple in-memory store
let blogPosts: any[] = []

export async function GET() {
  return NextResponse.json(blogPosts)
}

export async function POST(request: NextRequest) {
  try {
    const post = await request.json()
    blogPosts.push(post)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedPost = await request.json()
    const index = blogPosts.findIndex((post) => post.id === updatedPost.id)
    if (index !== -1) {
      blogPosts[index] = updatedPost
      return NextResponse.json({ success: true })
    }
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    blogPosts = blogPosts.filter((post) => post.id !== id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 })
  }
}
