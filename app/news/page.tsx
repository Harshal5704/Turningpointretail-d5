"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  content: string
  image: string
  date: string
  author: string
}

export default function NewsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/blog")

      // Check if the response is ok before trying to parse JSON
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`)
        return
      }

      // Check if the response has content
      const text = await response.text()
      if (!text) {
        console.log("Empty response from API")
        return
      }

      // Try to parse JSON
      try {
        const data = JSON.parse(text)
        setPosts(data)
      } catch (parseError) {
        console.error("Failed to parse JSON:", parseError)
        console.error("Response text:", text)
      }
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-700"></div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="heading-primary mb-6 text-green-800">
              News & Events
            </h1>
            <p className="text-xl text-green-600 max-w-3xl mx-auto">
              Stay updated with the latest retail insights, industry trends, and company updates from Turning Point
              Retail Solutions.
            </p>
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
                      {new Date(post.date).toLocaleDateString()}
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
