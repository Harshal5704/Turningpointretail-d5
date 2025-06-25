"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Eye, EyeOff, Plus, Trash2, Edit, Upload, X, AlertCircle, CheckCircle, BarChart3, FileText } from "lucide-react"
import AnalyticsDashboard from "@/components/analytics-dashboard"
import type { BlogPost } from "@/lib/supabase"

type AdminTab = "posts" | "analytics"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    author: "Walter Dantis",
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [uploadMethod, setUploadMethod] = useState<"file" | "url">("file")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [activeTab, setActiveTab] = useState<AdminTab>("posts")

  useEffect(() => {
    if (isAuthenticated && activeTab === "posts") {
      fetchPosts()
    }
  }, [isAuthenticated, activeTab])

  // Clear messages after 5 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("")
        setSuccess("")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, success])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (credentials.email === "turningpointretail@gmail.com" && credentials.password === "turningpointretail@2025") {
      setIsAuthenticated(true)
      setSuccess("Successfully logged in!")
    } else {
      setError("Invalid credentials. Please try again.")
    }
  }

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/blog")

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error("Error fetching posts:", error)
      setError(`Failed to fetch posts: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file")
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB")
        return
      }

      setImageFile(file)

      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageUrlChange = (url: string) => {
    setFormData({ ...formData, image: url })
    if (url) {
      setImagePreview(url)
    } else {
      setImagePreview("")
    }
  }

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      // Validate required fields
      if (!formData.title.trim() || !formData.content.trim() || !formData.author.trim()) {
        setError("Please fill in all required fields")
        setIsLoading(false)
        return
      }

      let imageUrl = formData.image

      // If user uploaded a file, convert to base64
      if (imageFile && uploadMethod === "file") {
        try {
          imageUrl = await convertToBase64(imageFile)
        } catch (error) {
          setError("Error processing image. Please try again.")
          setIsLoading(false)
          return
        }
      }

      const postData = {
        ...formData,
        image: imageUrl,
        title: formData.title.trim(),
        content: formData.content.trim(),
        author: formData.author.trim(),
      }

      // Add ID for updates
      if (editingPost) {
        postData.id = editingPost.id
      }

      const response = await fetch("/api/blog", {
        method: editingPost ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.error || `HTTP error! status: ${response.status}`)
      }

      setSuccess(editingPost ? "Post updated successfully!" : "Post created successfully!")
      fetchPosts()
      resetForm()
    } catch (error) {
      console.error("Error saving post:", error)
      setError(`Failed to save post: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({ title: "", content: "", image: "", author: "Walter Dantis" })
    setImageFile(null)
    setImagePreview("")
    setShowForm(false)
    setEditingPost(null)
    setUploadMethod("file")
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) {
      return
    }

    try {
      setIsLoading(true)
      const response = await fetch(`/api/blog?id=${id}`, { method: "DELETE" })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      setSuccess("Post deleted successfully!")
      fetchPosts()
    } catch (error) {
      console.error("Error deleting post:", error)
      setError(`Failed to delete post: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      image: post.image || "",
      author: post.author,
    })
    setImagePreview(post.image || "")
    setUploadMethod("url")
    setShowForm(true)
  }

  const handleNewPost = () => {
    resetForm()
    setShowForm(true)
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview("")
    setFormData({ ...formData, image: "" })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center text-green-800">Admin Login</h1>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-green-700 mb-2">Email</label>
              <input
                type="text"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full px-3 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 text-green-800"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-3 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 text-green-800"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-green-600" />
                  ) : (
                    <Eye className="w-5 h-5 text-green-600" />
                  )}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-32 pb-16">
        <div className="container-max max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-green-700">{success}</span>
            </div>
          )}

          {/* Header with Tabs */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-green-800">Admin Panel</h1>
              <p className="text-green-600 mt-1">Manage your website content and analytics</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-white rounded-lg p-1 shadow-sm border border-green-200">
              <button
                onClick={() => setActiveTab("posts")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "posts" ? "bg-green-100 text-green-800" : "text-green-600 hover:text-green-800"
                }`}
              >
                <FileText className="w-4 h-4 mr-2" />
                Blog Posts
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "analytics" ? "bg-green-100 text-green-800" : "text-green-600 hover:text-green-800"
                }`}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "analytics" ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <AnalyticsDashboard />
            </div>
          ) : (
            <>
              {/* New Post Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={handleNewPost}
                  className="btn-primary flex items-center whitespace-nowrap"
                  disabled={isLoading}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  New Post
                </button>
              </div>

              {showForm && (
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-green-800">
                    {editingPost ? "Edit Post" : "Create New Post"}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-2">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 text-green-800"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-2">
                        Content <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        rows={8}
                        className="w-full px-3 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 text-green-800"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    {/* Image Upload Section */}
                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-3">Post Image</label>

                      {/* Upload Method Toggle */}
                      <div className="flex gap-4 mb-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="uploadMethod"
                            value="file"
                            checked={uploadMethod === "file"}
                            onChange={(e) => setUploadMethod(e.target.value as "file" | "url")}
                            className="mr-2"
                            disabled={isLoading}
                          />
                          <span className="text-green-700">Upload from device</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="uploadMethod"
                            value="url"
                            checked={uploadMethod === "url"}
                            onChange={(e) => setUploadMethod(e.target.value as "file" | "url")}
                            className="mr-2"
                            disabled={isLoading}
                          />
                          <span className="text-green-700">Use image URL</span>
                        </label>
                      </div>

                      {uploadMethod === "file" ? (
                        <div>
                          <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageFileChange}
                              className="hidden"
                              id="image-upload"
                              disabled={isLoading}
                            />
                            <label
                              htmlFor="image-upload"
                              className={`cursor-pointer flex flex-col items-center ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                              <Upload className="w-12 h-12 text-green-500 mb-2" />
                              <span className="text-green-700 font-medium">Click to upload image</span>
                              <span className="text-green-600 text-sm mt-1">PNG, JPG, GIF up to 5MB</span>
                            </label>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <input
                            type="url"
                            value={formData.image}
                            onChange={(e) => handleImageUrlChange(e.target.value)}
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-3 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 text-green-800"
                            disabled={isLoading}
                          />
                        </div>
                      )}

                      {/* Image Preview */}
                      {imagePreview && (
                        <div className="mt-4 relative inline-block">
                          <img
                            src={imagePreview || "/placeholder.svg"}
                            alt="Preview"
                            className="w-48 h-32 object-cover rounded-lg border border-green-200"
                            onError={() => setImagePreview("")}
                          />
                          <button
                            type="button"
                            onClick={removeImage}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                            disabled={isLoading}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-2">
                        Author <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        className="w-full px-3 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 text-green-800"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            {editingPost ? "Updating..." : "Creating..."}
                          </span>
                        ) : editingPost ? (
                          "Update Post"
                        ) : (
                          "Create Post"
                        )}
                      </button>
                      <button type="button" onClick={resetForm} className="btn-secondary" disabled={isLoading}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Posts List Section */}
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-green-800">
                    Blog Posts ({posts.length})
                    {isLoading && <span className="text-sm font-normal text-green-600 ml-2">(Loading...)</span>}
                  </h2>
                </div>
                <div className="divide-y">
                  {posts.map((post) => (
                    <div key={post.id} className="p-6">
                      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg mb-2 text-green-800 break-words">{post.title}</h3>
                          <p className="text-green-600 mb-2 break-words">{post.content.substring(0, 100)}...</p>
                          <div className="text-sm text-green-600">
                            By {post.author} • {new Date(post.created_at).toLocaleDateString()}
                          </div>
                          {post.image && (
                            <div className="mt-3">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                className="w-32 h-20 object-cover rounded-md"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.style.display = "none"
                                }}
                              />
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleEdit(post)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                            title="Edit post"
                            disabled={isLoading}
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Delete post"
                            disabled={isLoading}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {posts.length === 0 && !isLoading && (
                    <div className="p-6 text-center text-green-600">No blog posts yet. Create your first post!</div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
