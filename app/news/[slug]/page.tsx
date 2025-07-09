"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, AlertCircle } from "lucide-react"
import type { BlogPost } from "@/lib/supabase"

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug as string)
    }
  }, [params.slug])

  const fetchPost = async (slug: string) => {
    try {
      setLoading(true)
      setError("")

      const response = await fetch(`/api/blog/${slug}`)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setPost(data)
    } catch (error) {
      console.error("Error fetching post:", error)
      setError(`Failed to load post: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-700 mx-auto mb-4"></div>
          <p className="text-green-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-800 mb-2">Article Not Found</h2>
          <p className="text-red-600 mb-4">{error || "The requested article could not be found."}</p>
          <Link href="/news" className="btn-primary">
            Back to News
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <Link
            href="/news"
            className="inline-flex items-center text-green-700 hover:text-green-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>

          <article className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {post.image && (
              <div className="aspect-video relative">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
            )}

            <div className="p-8">
              <div className="flex items-center text-sm text-green-600 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.created_at).toLocaleDateString()}
                <User className="w-4 h-4 ml-6 mr-2" />
                {post.author}
              </div>

              <h1 className="text-4xl font-bold text-green-800 mb-6">{post.title}</h1>

              <div className="prose prose-lg max-w-none text-green-600">
                {post.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
