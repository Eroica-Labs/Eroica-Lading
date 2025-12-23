"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { UserPlus, Vote, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";

// Step icons
const stepIcons = [UserPlus, Vote, TrendingUp];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = ["one", "two", "three"] as const;

  return (
    <Section id="how-it-works" background="gradient">
      <Container size="lg">
        <SectionHeader>
          <Badge variant="heroic" className="mb-4">
            {t("badge")}
          </Badge>
          <SectionTitle>{t("title")}</SectionTitle>
          <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
        </SectionHeader>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-medium flex items-center justify-center relative z-10">
                      <Icon className="w-9 h-9 text-heroic-600" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-civic-500 text-white text-sm font-bold flex items-center justify-center z-20">
                      {t(`steps.${step}.number`)}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(`steps.${step}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {t(`steps.${step}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
