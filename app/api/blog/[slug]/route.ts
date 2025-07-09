import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const supabase = createClient()

    // Try to find by slug first, then by id
    let { data: post, error } = await supabase.from("blog_posts").select("*").eq("slug", params.slug).single()

    // If not found by slug, try by id
    if (error && error.code === "PGRST116") {
      const { data: postById, error: idError } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", params.slug)
        .single()

      if (idError) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 })
      }

      post = postById
    } else if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
