import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to fetch posts", details: error.message },
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    return NextResponse.json(data || [], {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { error: "Missing required fields: title, content, and author are required" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const newPost = {
      title: body.title.trim(),
      content: body.content.trim(),
      image: body.image?.trim() || null,
      author: body.author.trim(),
    }

    const { data, error } = await supabase.from("blog_posts").insert([newPost]).select().single()

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json(
        { error: "Failed to create post", details: error.message },
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    return NextResponse.json(data, {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.id) {
      return NextResponse.json(
        { error: "Post ID is required" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Validate required fields
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { error: "Missing required fields: title, content, and author are required" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const updatedPost = {
      title: body.title.trim(),
      content: body.content.trim(),
      image: body.image?.trim() || null,
      author: body.author.trim(),
    }

    const { data, error } = await supabase.from("blog_posts").update(updatedPost).eq("id", body.id).select().single()

    if (error) {
      console.error("Supabase update error:", error)
      return NextResponse.json(
        { error: "Failed to update post", details: error.message },
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    if (!data) {
      return NextResponse.json(
        { error: "Post not found" },
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    return NextResponse.json(data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get("id")

    if (!id) {
      return NextResponse.json(
        { error: "Post ID is required" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const { error } = await supabase.from("blog_posts").delete().eq("id", id)

    if (error) {
      console.error("Supabase delete error:", error)
      return NextResponse.json(
        { error: "Failed to delete post", details: error.message },
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    return NextResponse.json(
      { message: "Post deleted successfully" },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
