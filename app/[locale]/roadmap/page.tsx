"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
  Target,
  Zap,
  Globe,
  Shield,
  Users,
  Coins,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { locales } from "@/i18n/config";

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Status icons
const statusIcons = {
  completed: <CheckCircle2 className="w-5 h-5 text-green-500" />,
  inProgress: <Clock className="w-5 h-5 text-heroic-500 animate-pulse" />,
  planned: <Target className="w-5 h-5 text-civic-400" />,
};

// Feature icons mapping
const featureIcons: Record<string, React.ReactNode> = {
  voting: <CheckCircle2 className="w-5 h-5" />,
  communities: <Users className="w-5 h-5" />,
  coins: <Coins className="w-5 h-5" />,
  notifications: <Zap className="w-5 h-5" />,
  web: <Globe className="w-5 h-5" />,
  security: <Shield className="w-5 h-5" />,
  ai: <Sparkles className="w-5 h-5" />,
};

export default function RoadmapPage() {
  const t = useTranslations("roadmap");

  // Roadmap phases
  const phases = ["q4_2024", "q1_2025", "q2_2025", "q3_2025", "future"] as const;

  // Status badge styling
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "inProgress":
        return "bg-heroic-100 text-heroic-700 border-heroic-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  return (
    <>
      <Header />
      <main>
        <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-warm-white">
          <Container size="lg">
            {/* Header */}
            <SectionHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="heroic" className="mb-4">
                  <Rocket className="w-4 h-4 mr-1" />
                  {t("badge")}
                </Badge>
                <SectionTitle>{t("title")}</SectionTitle>
                <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
              </motion.div>
            </SectionHeader>

            {/* Timeline */}
            <div className="relative mt-16">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-heroic-400 via-civic-400 to-gray-200 transform md:-translate-x-1/2" />

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                className="space-y-12"
              >
                {phases.map((phase, index) => {
                  const isEven = index % 2 === 0;
                  const status = t(`phases.${phase}.status`);
                  
                  // Get features as array
                  let features: string[] = [];
                  try {
                    features = t.raw(`phases.${phase}.features`) as string[];
                  } catch {
                    features = [];
                  }

                  return (
                    <motion.div
                      key={phase}
                      variants={staggerItem}
                      className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-heroic-400 rounded-full transform -translate-x-1/2 z-10" />

                      {/* Content card */}
                      <div
                        className={`ml-16 md:ml-0 md:w-5/12 ${
                          isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                        }`}
                      >
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle hover:shadow-large transition-shadow duration-300">
                          {/* Phase header */}
                          <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : ""}`}>
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(status)}`}>
                              {statusIcons[status as keyof typeof statusIcons]}
                              {t(`status.${status}`)}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-civic-500 mb-2">
                            {t(`phases.${phase}.title`)}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {t(`phases.${phase}.description`)}
                          </p>

                          {/* Features list */}
                          {features.length > 0 && (
                            <ul className={`space-y-2 ${isEven ? "md:text-right" : ""}`}>
                              {features.map((feature, i) => (
                                <li
                                  key={i}
                                  className={`flex items-center gap-2 text-sm text-gray-700 ${
                                    isEven ? "md:flex-row-reverse" : ""
                                  }`}
                                >
                                  <span className="text-heroic-500">✓</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block md:w-5/12" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Call to action */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-civic-50 rounded-xl border border-civic-100">
                <Sparkles className="w-5 h-5 text-civic-500" />
                <span className="text-civic-700 font-medium">{t("cta")}</span>
              </div>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

