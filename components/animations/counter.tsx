"use client"

import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface CounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function Counter({ value, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest) + suffix
      }
    })
  }, [springValue, prefix, suffix])

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  )
}
