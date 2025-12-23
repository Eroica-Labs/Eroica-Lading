"use client";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  glass?: boolean;
}

// Card with premium hover effects
export function Card({ 
  className, 
  hover = false, 
  glow = false,
  glass = false,
  children, 
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles
        "rounded-2xl p-6 relative",
        // Background
        glass ? "bg-white/70 backdrop-blur-xl" : "bg-white",
        // Border
        "border border-gray-100/80",
        // Shadow
        "shadow-subtle",
        // Glow border effect on hover
        glow && "card-glow",
        // Hover effects
        hover && [
          "transition-all duration-300 ease-premium",
          "hover:shadow-large",
          "hover:-translate-y-2",
          "hover:border-gray-200/60",
          // Subtle scale
          "hover:scale-[1.01]",
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Premium glass card variant
export function CardGlass({ 
  className, 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass-premium rounded-2xl p-6",
        "transition-all duration-300 ease-premium",
        "hover:shadow-large hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-gray-900",
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(
        "text-gray-600 text-sm mt-1 leading-relaxed",
        className
      )} 
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn(
        "mt-6 pt-4 border-t border-gray-100/80",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

// Card with icon - commonly used in features sections
interface CardWithIconProps extends CardProps {
  icon: React.ReactNode;
  iconClassName?: string;
}

export function CardWithIcon({
  icon,
  iconClassName,
  className,
  children,
  ...props
}: CardWithIconProps) {
  return (
    <Card hover glow className={cn("group", className)} {...props}>
      {/* Icon container with hover effect */}
      <div
        className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
          "transition-all duration-300",
          "group-hover:scale-110 group-hover:shadow-soft",
          iconClassName
        )}
      >
        {icon}
      </div>
      {children}
    </Card>
  );
}
