"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log("CustomCursor component mounted.") // Debug log for component mount
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) {
        setIsVisible(true)
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
        'a, button, input, textarea, select, [role="button"], [role="link"], [tabindex], .cursor-pointer'

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
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseOver)

    // Preload the image
    const img = new window.Image()
    img.src = "/images/turning-point-logomark.png"
    img.onload = () => console.log("Cursor: Logomark image preloaded successfully.")
    img.onerror = () => console.error("Cursor: Failed to preload logomark image.")

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [handleMouseMove, handleMouseLeave, handleMouseDown, handleMouseUp, handleMouseOver])

  const cursorSize = isHovering ? "w-12 h-12" : "w-8 h-8" // Scale up on hover
  const clickScale = isClicking ? "scale-75" : "scale-100" // Scale down on click

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] transition-all duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 ${cursorSize} ${clickScale}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Image
        src="/images/turning-point-logomark.png"
        alt="Turning Point Logomark Cursor"
        fill // Use fill to make image responsive within its container
        className="object-contain" // Ensure image fits within the div
        priority // Prioritize loading for cursor
      />
    </div>
  )
}
