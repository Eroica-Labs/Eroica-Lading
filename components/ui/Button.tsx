"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Brand Book aligned button variants with premium effects
const variants = {
  // Primary: Deep Civic Blue with glow effect on hover
  primary: [
    "bg-civic-500 text-white",
    "hover:bg-civic-600 active:bg-civic-700",
    "shadow-soft hover:shadow-heroic",
    // Premium glow effect
    "hover:shadow-[0_0_25px_rgba(0,51,102,0.25)]",
  ].join(" "),
  
  // Secondary: Clean with subtle border animation
  secondary: [
    "bg-white text-civic-500",
    "border border-gray-200",
    "hover:bg-gray-50 active:bg-gray-100",
    "shadow-subtle hover:shadow-soft",
    "hover:border-civic-200",
  ].join(" "),
  
  // Heroic: Gold accent with warm glow
  heroic: [
    "bg-heroic-500 text-white",
    "hover:bg-heroic-600 active:bg-heroic-700",
    "shadow-soft hover:shadow-medium",
    // Warm gold glow
    "hover:shadow-[0_0_30px_rgba(197,160,89,0.35)]",
  ].join(" "),
  
  // Teal (legacy support)
  teal: [
    "bg-teal-500 text-white",
    "hover:bg-teal-600 active:bg-teal-700",
    "shadow-soft hover:shadow-medium",
  ].join(" "),
  
  // Ghost: Subtle with fade effect
  ghost: [
    "bg-transparent text-civic-500",
    "hover:bg-gray-100/80 active:bg-gray-200/80",
    "backdrop-blur-sm",
  ].join(" "),
  
  // Link: Inline text with animated underline
  link: [
    "bg-transparent text-heroic-600",
    "hover:text-heroic-700",
    "underline-offset-4",
    // Animated underline
    "relative after:absolute after:bottom-0 after:left-0 after:h-[1px]",
    "after:w-0 after:bg-heroic-600 after:transition-all after:duration-300",
    "hover:after:w-full",
    "p-0",
  ].join(" "),
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
  icon: "h-10 w-10",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  shimmer?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      shimmer = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium",
          // Premium transition with custom easing
          "transition-all duration-300 ease-premium",
          // Scale effect on interaction
          "hover:scale-[1.02] active:scale-[0.98]",
          // Focus ring
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-civic-500 focus-visible:ring-offset-2",
          // Disabled state
          "disabled:pointer-events-none disabled:opacity-50",
          // Shimmer effect class (optional)
          shimmer && "shimmer-btn",
          // Variant and size
          variants[variant],
          sizes[size],
          // Loading state
          isLoading && "cursor-wait",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Loading spinner with fade */}
        {isLoading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {/* Content wrapper for potential animations */}
        <span className="relative z-10 flex items-center gap-2">
        {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
