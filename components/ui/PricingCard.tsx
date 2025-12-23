"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  period: "monthly" | "annual";
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  onSelect?: () => void;
}

export function PricingCard({
  name,
  description,
  price,
  period,
  features,
  isPopular = false,
  ctaText,
  onSelect,
}: PricingCardProps) {
  // Calculate annual price (2 months free)
  const displayPrice = period === "annual" ? Math.round((price * 10) / 12) : price;
  const isFree = price === 0;

  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 md:p-8",
        "border transition-all duration-300",
        isPopular
          ? "bg-navy-900 text-white border-navy-900 shadow-large scale-105 z-10"
          : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-medium"
      )}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold text-navy-900">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3
          className={cn(
            "text-xl font-bold",
            isPopular ? "text-white" : "text-gray-900"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "mt-1 text-sm",
            isPopular ? "text-gray-300" : "text-gray-600"
          )}
        >
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "text-4xl md:text-5xl font-bold tracking-tight",
              isPopular ? "text-white" : "text-gray-900"
            )}
          >
            {isFree ? "Free" : `$${displayPrice}`}
          </span>
          {!isFree && (
            <span
              className={cn(
                "text-sm",
                isPopular ? "text-gray-300" : "text-gray-500"
              )}
            >
              /month
            </span>
          )}
        </div>
        {period === "annual" && !isFree && (
          <p
            className={cn(
              "mt-1 text-xs",
              isPopular ? "text-teal-300" : "text-teal-600"
            )}
          >
            Billed annually (Save 2 months)
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              className={cn(
                "h-5 w-5 flex-shrink-0 mt-0.5",
                isPopular ? "text-teal-400" : "text-teal-500"
              )}
            />
            <span
              className={cn(
                "text-sm",
                isPopular ? "text-gray-200" : "text-gray-600"
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={isPopular ? "teal" : isFree ? "primary" : "secondary"}
        size="lg"
        className="w-full"
        onClick={onSelect}
      >
        {ctaText}
      </Button>
    </div>
  );
}
