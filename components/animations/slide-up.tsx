"use client"

import { motion } from "framer-motion"
import type React from "react"

interface SlideUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function SlideUp({ children, delay = 0, duration = 0.8, className }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
