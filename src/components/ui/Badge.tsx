import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "error" | "info"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-transparent bg-accent text-white hover:bg-accent/80",
    secondary: "border-transparent bg-surface-elevated text-primary-secondary hover:bg-surface-elevated/80",
    outline: "text-primary",
    success: "border-transparent bg-status-success/10 text-status-success",
    warning: "border-transparent bg-status-warning/10 text-status-warning",
    error: "border-transparent bg-status-error/10 text-status-error",
    info: "border-transparent bg-status-info/10 text-status-info",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border-subtle px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
