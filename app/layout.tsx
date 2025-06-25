import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import CustomCursor from "@/components/custom-cursor" // Import the CustomCursor component

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Turning Point Retail Solutions | Transforming Retail in Southeast Asia",
  description:
    "Expert retail consulting services in Cambodia and Southeast Asia. 23+ years of experience with leading brands like Escada, M&S, Kenzo, and Hush Puppies.",
  keywords: "retail consulting, Cambodia, Southeast Asia, franchise development, store operations, retail training",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden`}>
        {" "}
        {/* Added overflow-x-hidden */}
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CustomCursor /> {/* Render the CustomCursor component here */}
      </body>
    </html>
  )
}
