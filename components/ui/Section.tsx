import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "white" | "warm" | "navy" | "civic" | "gradient";
}

// Brand Book aligned section backgrounds
const backgrounds = {
  white: "bg-white",
  warm: "bg-warm-white",
  navy: "bg-navy-900 text-white",
  civic: "bg-civic-500 text-white",
  gradient: "bg-gradient-to-b from-white to-warm-white",
};

export function Section({
  className,
  background = "white",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 lg:py-32",
        backgrounds[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-center max-w-3xl mx-auto mb-12 md:mb-16", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        // Brand Book: Playfair Display for headlines, Deep Civic Blue
        "font-display text-3xl md:text-4xl lg:text-display-md font-normal tracking-tight text-balance text-civic-500",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mt-4 text-lg md:text-xl text-gray-600 text-balance",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
