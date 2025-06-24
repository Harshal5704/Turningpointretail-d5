export async function GET() {
  try {
    // For now, return an empty array since we don't have a database set up
    const posts = []

    return Response.json(posts, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Blog API error:", error)

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
