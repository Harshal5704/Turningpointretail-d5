"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    console.log("CustomCursor component mounted.")
  }, [])

  // Smooth cursor animation with requestAnimationFrame
  const animateCursor = useCallback(() => {
    setPosition((prevPosition) => {
      const dx = targetPosition.x - prevPosition.x
      const dy = targetPosition.y - prevPosition.y

      // Smooth interpolation with easing
      const ease = 0.15
      const newX = prevPosition.x + dx * ease
      const newY = prevPosition.y + dy * ease

      return { x: newX, y: newY }
    })

    animationFrameRef.current = requestAnimationFrame(animateCursor)
  }, [targetPosition])

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animateCursor)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animateCursor])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Update target position for smooth animation
      setTargetPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) {
        setIsVisible(true)
        // Set initial position to avoid jump
        setPosition({ x: e.clientX, y: e.clientY })
        console.log("Cursor: Mouse entered document, showing custom cursor.")
      }
    },
    [isVisible],
  )

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
    console.log("Cursor: Mouse left document, hiding custom cursor.")
  }, [])

  const handleMouseDown = useCallback(() => {
    setIsClicking(true)
    console.log("Cursor: Mouse down, applying click effect.")
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsClicking(false)
    console.log("Cursor: Mouse up, removing click effect.")
  }, [])

  const handleMouseOver = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Define a broader set of interactive elements
      const interactiveElements =
        'a, button, input, textarea, select, [role="button"], [role="link"], [tabindex], .cursor-pointer, .hover\\:shadow-lg'

      if (target.closest(interactiveElements)) {
        if (!isHovering) {
          setIsHovering(true)
          console.log("Cursor: Hovering over interactive element.")
        }
      } else {
        if (isHovering) {
          setIsHovering(false)
          console.log("Cursor: Not hovering over interactive element.")
        }
      }
    },
    [isHovering],
  )

  useEffect(() => {
    // Use passive listeners for better performance
    document.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    document.addEventListener("mousedown", handleMouseDown, { passive: true })
    document.addEventListener("mouseup", handleMouseUp, { passive: true })
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    // Preload the image with better error handling
    const img = new window.Image()
    img.src = "/images/turning-point-logomark.png"
    img.onload = () => {
      console.log("Cursor: Logomark image preloaded successfully.")
      setImageLoaded(true)
      setImageError(false)
    }
    img.onerror = () => {
      console.warn("Cursor: Logomark image failed to load, using fallback cursor.")
      setImageLoaded(false)
      setImageError(true)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseOver)

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [handleMouseMove, handleMouseLeave, handleMouseDown, handleMouseUp, handleMouseOver])

  const cursorSize = isHovering ? "w-12 h-12" : "w-8 h-8"
  const clickScale = isClicking ? "scale-75" : "scale-100"
  const hoverScale = isHovering ? "scale-110" : "scale-100"

  // Enhanced CSS-based fallback cursor with smoother animations
  if (imageError) {
    return (
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 ${cursorSize} ${clickScale} ${hoverScale}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transition: `opacity 0.2s ease-out, transform 0.1s ease-out`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-green-600 via-green-500 to-yellow-400 rounded-lg border border-white shadow-lg flex items-center justify-center backdrop-blur-sm transform rotate-12">
          <div className="text-white font-bold text-xs drop-shadow-sm transform -rotate-12">TP</div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 ${cursorSize} ${clickScale} ${hoverScale}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.2s ease-out, transform 0.1s ease-out`,
      }}
    >
      {imageLoaded ? (
        <Image
          src="/images/turning-point-logomark.png"
          alt="Turning Point Logomark Cursor"
          fill
          className="object-contain drop-shadow-sm"
          priority
          onError={() => {
            console.warn("Cursor: Image component failed to load, switching to fallback.")
            setImageError(true)
          }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-r from-green-600 via-green-500 to-yellow-400 rounded-lg border border-white shadow-lg flex items-center justify-center animate-pulse backdrop-blur-sm transform rotate-12">
          <div className="text-white font-bold text-xs drop-shadow-sm transform -rotate-12">TP</div>
        </div>
      )}
    </div>
  )
}
