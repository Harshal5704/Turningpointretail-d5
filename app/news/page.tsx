"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar, User, ArrowRight, AlertCircle } from "lucide-react"
import type { BlogPost } from "@/lib/supabase"

export default function NewsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError("")

      const response = await fetch("/api/blog")

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error("Error fetching posts:", error)
      setError(`Failed to load posts: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-700 mx-auto mb-4"></div>
          <p className="text-green-600">Loading latest news...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-800 mb-2">Error Loading News</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button onClick={fetchPosts} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      {/* Simplified Header Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="heading-primary mb-6 text-green-800">News & Events</h1>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-max">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">No news yet. Stay tuned!</h3>
              <p className="text-green-600 max-w-md mx-auto">
                We're working on bringing you the latest retail insights and company updates. Check back soon for
                exciting content!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={post.image || "/placeholder.svg?height=200&width=400&query=blog post"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-green-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.created_at).toLocaleDateString()}
                      <User className="w-4 h-4 ml-4 mr-2" />
                      {post.author}
                    </div>

                    <h3 className="text-xl font-bold text-green-800 mb-3 line-clamp-2">{post.title}</h3>

                    <p className="text-green-600 mb-4 line-clamp-3">{post.content.substring(0, 150)}...</p>

                    <button className="text-green-700 font-semibold flex items-center hover:text-green-800 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
