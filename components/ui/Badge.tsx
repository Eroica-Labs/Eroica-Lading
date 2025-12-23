import { cn } from "@/lib/utils";

// Brand Book aligned badge variants
const variants = {
  default: "bg-gray-100 text-gray-700",
  primary: "bg-civic-100 text-civic-600",
  civic: "bg-civic-100 text-civic-600",
  teal: "bg-teal-100 text-teal-800",
  gold: "bg-heroic-100 text-heroic-700",
  heroic: "bg-heroic-100 text-heroic-700",
  success: "bg-green-100 text-green-800",
  electric: "bg-electric/10 text-electric",
  crimson: "bg-crimson/10 text-crimson",
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1",
        "text-xs font-medium tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
