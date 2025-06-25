import type { NextRequest } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

interface BlogPost {
  id: string
  title: string
  content: string
  image: string
  date: string
  author: string
}

const DATA_DIR = path.join(process.cwd(), "data")
const POSTS_FILE = path.join(DATA_DIR, "posts.json")

// Ensure data directory exists
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
}

// Read posts from file
async function readPosts(): Promise<BlogPost[]> {
  try {
    await ensureDataDir()
    if (!existsSync(POSTS_FILE)) {
      return []
    }
    const data = await readFile(POSTS_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading posts:", error)
    return []
  }
}

// Write posts to file
async function writePosts(posts: BlogPost[]): Promise<void> {
  try {
    await ensureDataDir()
    await writeFile(POSTS_FILE, JSON.stringify(posts, null, 2))
  } catch (error) {
    console.error("Error writing posts:", error)
    throw error
  }
}

export async function GET() {
  try {
    const posts = await readPosts()

    // Sort posts by date (newest first)
    const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return Response.json(sortedPosts, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Blog API GET error:", error)
    return Response.json(
      { error: "Failed to fetch posts" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const newPost: BlogPost = await request.json()

    // Validate required fields
    if (!newPost.title || !newPost.content || !newPost.author) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Ensure the post has an ID and date
    if (!newPost.id) {
      newPost.id = Date.now().toString()
    }
    if (!newPost.date) {
      newPost.date = new Date().toISOString()
    }

    const posts = await readPosts()
    posts.push(newPost)
    await writePosts(posts)

    return Response.json(newPost, {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Blog API POST error:", error)
    return Response.json(
      { error: "Failed to create post" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedPost: BlogPost = await request.json()

    if (!updatedPost.id) {
      return Response.json({ error: "Post ID is required" }, { status: 400 })
    }

    const posts = await readPosts()
    const postIndex = posts.findIndex((post) => post.id === updatedPost.id)

    if (postIndex === -1) {
      return Response.json({ error: "Post not found" }, { status: 404 })
    }

    posts[postIndex] = updatedPost
    await writePosts(posts)

    return Response.json(updatedPost, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Blog API PUT error:", error)
    return Response.json(
      { error: "Failed to update post" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get("id")

    if (!id) {
      return Response.json({ error: "Post ID is required" }, { status: 400 })
    }

    const posts = await readPosts()
    const filteredPosts = posts.filter((post) => post.id !== id)

    if (posts.length === filteredPosts.length) {
      return Response.json({ error: "Post not found" }, { status: 404 })
    }

    await writePosts(filteredPosts)

    return Response.json(
      { message: "Post deleted successfully" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  } catch (error) {
    console.error("Blog API DELETE error:", error)
    return Response.json(
      { error: "Failed to delete post" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}
