import { cn } from "@/lib/utils"

interface LoadingProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "size-4 border-2",
  md: "size-8 border-3",
  lg: "size-12 border-4",
} as const

export function Loading({ className, size = "md" }: LoadingProps) {
  return (
    <div className={cn("flex items-center justify-center p-8", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-muted border-t-primary",
          sizeClasses[size],
        )}
      />
    </div>
  )
}
