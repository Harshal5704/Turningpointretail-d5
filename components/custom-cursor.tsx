"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer") ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => setIsHovering(false)

    const handleMouseOut = () => setIsVisible(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)
    document.addEventListener("mouseleave", handleMouseOut)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
      document.removeEventListener("mouseleave", handleMouseOut)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isClicking ? "scale-75" : isHovering ? "scale-150" : "scale-100"
        }`}
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${
            isClicking ? 0.75 : isHovering ? 1.5 : 1
          })`,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border-2 transition-all duration-150 ${
            isHovering ? "border-yellow-400 bg-yellow-400/20" : "border-green-600 bg-green-600/10"
          }`}
        />
      </div>

      {/* Trailing dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      >
        <div
          className={`w-1 h-1 rounded-full transition-all duration-300 ${
            isHovering ? "bg-yellow-400" : "bg-green-600"
          }`}
        />
      </div>
    </>
  )
}
