"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";

// Plan configuration
const plans = [
  {
    id: "free",
    price: 0,
    isPopular: false,
  },
  {
    id: "starter",
    price: 9,
    isPopular: false,
  },
  {
    id: "pro",
    price: 29,
    isPopular: true,
  },
  {
    id: "enterprise",
    price: 99,
    isPopular: false,
  },
];

export default function Pricing() {
  const t = useTranslations("pricing");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  // Calculate price based on billing period (annual = 2 months free)
  const getPrice = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return 0;
    if (billingPeriod === "annual") {
      return Math.round((monthlyPrice * 10) / 12);
    }
    return monthlyPrice;
  };

  return (
    <Section id="pricing" background="white">
      <Container size="lg">
        <SectionHeader>
          <Badge variant="civic" className="mb-4">
            {t("badge")}
          </Badge>
          <SectionTitle>{t("title")}</SectionTitle>
          <SectionSubtitle>{t("subtitle")}</SectionSubtitle>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-medium transition-all",
                billingPeriod === "monthly"
                  ? "bg-white text-civic-500 shadow-soft"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {t("billing.monthly")}
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                billingPeriod === "annual"
                  ? "bg-white text-civic-500 shadow-soft"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {t("billing.annual")}
              <span className="text-xs bg-heroic-100 text-heroic-700 px-2 py-0.5 rounded-full">
                {t("billing.save")}
              </span>
            </button>
          </div>
        </SectionHeader>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const planKey = plan.id as "free" | "starter" | "pro" | "enterprise";
            const features = t.raw(`plans.${planKey}.features`) as string[];
            const displayPrice = getPrice(plan.price);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col",
                  plan.isPopular && "lg:-mt-4 lg:mb-4"
                )}
              >
                <div
                  className={cn(
                    "flex-1 rounded-2xl p-6 lg:p-8 border transition-all duration-300",
                    plan.isPopular
                      ? "bg-civic-500 text-white border-civic-500 shadow-heroic"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-medium"
                  )}
                >
                  {/* Popular badge - Heroic Gold */}
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-heroic-500 px-4 py-1 text-xs font-semibold text-white">
                        {t("popular")}
                      </span>
                    </div>
                  )}

                  {/* Plan name */}
                  <div className="mb-6">
                    <h3
                      className={cn(
                        "text-xl font-bold",
                        plan.isPopular ? "text-white" : "text-gray-900"
                      )}
                    >
                      {t(`plans.${planKey}.name`)}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-sm",
                        plan.isPopular ? "text-gray-300" : "text-gray-600"
                      )}
                    >
                      {t(`plans.${planKey}.description`)}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={cn(
                          "text-4xl font-bold tracking-tight",
                          plan.isPopular ? "text-white" : "text-gray-900"
                        )}
                      >
                        {plan.price === 0 ? "Free" : `$${displayPrice}`}
                      </span>
                      {plan.price > 0 && (
                        <span
                          className={cn(
                            "text-sm",
                            plan.isPopular ? "text-gray-300" : "text-gray-500"
                          )}
                        >
                          /mo
                        </span>
                      )}
                    </div>
                    {billingPeriod === "annual" && plan.price > 0 && (
                      <p
                        className={cn(
                          "mt-1 text-xs",
                          plan.isPopular ? "text-heroic-300" : "text-heroic-600"
                        )}
                      >
                        Billed annually
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="mb-8 space-y-3 flex-1">
                    {features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          className={cn(
                            "h-5 w-5 flex-shrink-0 mt-0.5",
                            plan.isPopular ? "text-heroic-400" : "text-heroic-500"
                          )}
                        />
                        <span
                          className={cn(
                            "text-sm",
                            plan.isPopular ? "text-gray-200" : "text-gray-600"
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={plan.isPopular ? "heroic" : plan.price === 0 ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.price === 0 ? t("cta.free") : t("cta.paid")}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
