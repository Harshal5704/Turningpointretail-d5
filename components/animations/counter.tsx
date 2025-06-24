"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function Counter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  // Ensure end is a valid number
  const targetNumber = typeof end === "number" && !isNaN(end) ? end : 0

  useEffect(() => {
    if (!isInView || targetNumber === 0) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * targetNumber)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(targetNumber) // Ensure we end at the exact number
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [targetNumber, duration, isInView])

  // Safe number formatting
  const formatNumber = (num: number) => {
    try {
      return num.toLocaleString()
    } catch (error) {
      return num.toString()
    }
  }

  return (
    <span ref={ref} className="tabular-nums">
      {prefix || ""}
      {formatNumber(count)}
      {suffix || ""}
    </span>
  )
}
