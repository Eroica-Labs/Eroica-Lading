"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Vote,
  Users,
  Coins,
  FolderKanban,
  Eye,
  Bell,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { staggerContainer, staggerCard, viewportOnce } from "@/lib/animations";

// Feature icon mapping
const featureIcons = {
  voting: Vote,
  communities: Users,
  economy: Coins,
  projects: FolderKanban,
  transparency: Eye,
  notifications: Bell,
};

// Brand Book aligned feature colors with enhanced glow effect
const featureColors = {
  voting: {
    bg: "bg-heroic-100",
    text: "text-heroic-600",
    glow: "group-hover:shadow-[0_0_20px_rgba(197,160,89,0.25)]",
  },
  communities: {
    bg: "bg-civic-100",
    text: "text-civic-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(0,51,102,0.2)]",
  },
  economy: {
    bg: "bg-heroic-100",
    text: "text-heroic-700",
    glow: "group-hover:shadow-[0_0_20px_rgba(197,160,89,0.25)]",
  },
  projects: {
    bg: "bg-civic-100",
    text: "text-civic-600",
    glow: "group-hover:shadow-[0_0_20px_rgba(0,51,102,0.2)]",
  },
  transparency: {
    bg: "bg-heroic-50",
    text: "text-heroic-600",
    glow: "group-hover:shadow-[0_0_20px_rgba(197,160,89,0.2)]",
  },
  notifications: {
    bg: "bg-civic-50",
    text: "text-civic-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(0,51,102,0.15)]",
  },
};

export default function Features() {
  const t = useTranslations("features");

  const features = [
    "voting",
    "communities",
    "economy",
    "projects",
    "transparency",
    "notifications",
  ] as const;

  return (
    <Section id="features" background="warm">
      <Container size="lg">
        {/* Header with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
        <SectionHeader>
          <Badge variant="civic" className="mb-4">
            {t("badge")}
          </Badge>
          <SectionTitle>{t("title")}</SectionTitle>
          <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
        </SectionHeader>
        </motion.div>

        {/* Features grid with stagger effect */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {features.map((feature, index) => {
            const Icon = featureIcons[feature];
            const colors = featureColors[feature];

            return (
              <motion.div
                key={feature}
                variants={staggerCard}
                custom={index}
                className="group perspective"
              >
                {/* Card with premium effects */}
                <div className="h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100/80 shadow-subtle card-glow transition-all duration-300 ease-premium hover:shadow-large hover:-translate-y-2 hover:scale-[1.02] preserve-3d">
                  {/* Icon with glow effect */}
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} ${colors.glow} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-7 h-7 transition-transform duration-300 group-hover:rotate-3" />
                  </div>

                  {/* Title with subtle animation */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-200 group-hover:text-civic-600">
                    {t(`items.${feature}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {t(`items.${feature}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
