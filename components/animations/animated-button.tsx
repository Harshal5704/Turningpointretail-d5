"use client"

import { motion } from "framer-motion"
import type React from "react"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: "primary" | "secondary"
}

export function AnimatedButton({ children, className, onClick, href, variant = "primary" }: AnimatedButtonProps) {
  const baseClasses = variant === "primary" ? "btn-primary" : "btn-secondary"

  const ButtonComponent = motion.button
  const LinkComponent = motion.a

  const animationProps = {
    whileHover: {
      scale: 1.05,
      boxShadow: variant === "primary" ? "0 10px 25px rgba(29, 78, 216, 0.3)" : "0 10px 25px rgba(29, 78, 216, 0.1)",
    },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  }

  if (href) {
    return (
      <LinkComponent href={href} className={`${baseClasses} ${className} inline-block`} {...animationProps}>
        {children}
      </LinkComponent>
    )
  }

  return (
    <ButtonComponent onClick={onClick} className={`${baseClasses} ${className}`} {...animationProps}>
      {children}
    </ButtonComponent>
  )
}
