"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ChevronDown, ChevronUp } from "lucide-react"
import type { BlogPost } from "@/lib/supabase"

export default function NewsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError("")

      const response = await fetch("/api/blog")
      const contentType = response.headers.get("content-type")

      if (!contentType || !contentType.includes("application/json")) {
        const rawText = await response.text()
        console.error("Received non-JSON response:", rawText)
        throw new Error("Unexpected server response")
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while fetching posts")
      }

      setPosts(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching posts:", error)
      setError(error instanceof Error ? error.message : "Failed to load posts")
    } finally {
      setLoading(false)
    }
  }

  const toggleExpanded = (postId: string) => {
    const newExpanded = new Set(expandedPosts)
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId)
    } else {
      newExpanded.add(postId)
    }
    setExpandedPosts(newExpanded)
  }

  const formatContent = (content: string) => {
    return content.split("\n").map(
      (paragraph, index) =>
        paragraph.trim() && (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ),
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-green-600">Loading news...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-32 pb-16">
        <div className="container-max max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Latest News & Insights</h1>
            <p className="text-xl text-green-600">
              Stay updated with the latest trends and insights in retail consulting
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {posts.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-green-600 text-lg">No news articles available at the moment.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => {
                const isExpanded = expandedPosts.has(post.id)
                const shouldShowReadMore = post.content.length > 300

                return (
                  <Card key={post.id} className={`transition-all duration-300 ${isExpanded ? "lg:col-span-2" : ""}`}>
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row gap-4">
                        {post.image && (
                          <div className={`${isExpanded ? "lg:w-1/3" : "lg:w-48"} flex-shrink-0`}>
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-48 object-cover rounded-lg"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = "none"
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-green-800 mb-3">{post.title}</CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-green-600 mb-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.created_at).toLocaleDateString()}</span>
                            </div>
                            <Badge variant="secondary">News</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className={`${isExpanded ? "lg:flex lg:gap-6" : ""}`}>
                        <div className="flex-1">
                          {isExpanded ? (
                            <div className="text-green-700 leading-relaxed">{formatContent(post.content)}</div>
                          ) : (
                            <p className="text-green-700 leading-relaxed">
                              {shouldShowReadMore ? `${post.content.substring(0, 300)}...` : post.content}
                            </p>
                          )}

                          {shouldShowReadMore && (
                            <Button
                              onClick={() => toggleExpanded(post.id)}
                              variant="outline"
                              className="mt-4 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                            >
                              {isExpanded ? (
                                <>
                                  <ChevronUp className="w-4 h-4 mr-2" />
                                  Show Less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4 mr-2" />
                                  Read More
                                </>
                              )}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
