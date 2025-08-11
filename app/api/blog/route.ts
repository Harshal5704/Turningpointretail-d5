import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import type { BlogPost } from "@/lib/supabase"

export async function GET() {
  try {
    const { data: posts, error } = await supabaseAdmin
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
    }

    // If no posts exist, return the welcome post
    if (!posts || posts.length === 0) {
      const welcomePost: BlogPost = {
        id: "1",
        title: "Welcome to Turning Point Retail",
        content:
          "We are excited to share our latest insights and news with you. Stay tuned for more updates on retail consulting trends and industry developments.",
        author: "Turning Point Team",
        created_at: new Date().toISOString(),
        image: null,
      }
      return NextResponse.json([welcomePost])
    }

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error in blog API GET:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, author, image } = body

    // Validate required fields
    if (!title || !content || !author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const postData = {
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
      image: image?.trim() || null,
    }

    const { data: newPost, error } = await supabaseAdmin
      .from('blog_posts')
      .insert([postData])
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
    }

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error("Error in blog API POST:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, title, content, author, image } = body

    // Validate required fields
    if (!id || !title || !content || !author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const updateData = {
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
      image: image?.trim() || null,
      updated_at: new Date().toISOString(),
    }

    const { data: updatedPost, error } = await supabaseAdmin
      .from('blog_posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: "Post not found" }, { status: 404 })
      }
      return NextResponse.json({ error: "Failed to update post" }, { status: 500 })
    }

    return NextResponse.json(updatedPost)
  } catch (error) {
    console.error("Error in blog API PUT:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Missing post ID" }, { status: 400 })
    }

    const { error } = await supabaseAdmin
      .from('blog_posts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to delete post" }, { status: 500 })
    }

    return NextResponse.json({ message: "Post deleted successfully" })
  } catch (error) {
    console.error("Error in blog API DELETE:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
