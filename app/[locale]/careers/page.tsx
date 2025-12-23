"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Rocket,
  Users,
  Globe,
  Coffee,
  Laptop,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, staggerCard, viewportOnce } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { locales } from "@/i18n/config";

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Benefit icons
const benefitIcons: Record<string, React.ReactNode> = {
  remote: <Laptop className="w-6 h-6" />,
  equity: <Rocket className="w-6 h-6" />,
  team: <Users className="w-6 h-6" />,
  impact: <Heart className="w-6 h-6" />,
  growth: <Sparkles className="w-6 h-6" />,
  culture: <Coffee className="w-6 h-6" />,
};

export default function CareersPage() {
  const t = useTranslations("careers");

  // Get benefits and positions
  const benefitKeys = ["remote", "equity", "team", "impact", "growth", "culture"];
  
  let positions: Array<{
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
  }> = [];
  
  try {
    positions = t.raw("positions") as typeof positions;
  } catch {
    positions = [];
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-civic-50 to-warm-white">
          <Container size="lg">
            <SectionHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Badge variant="heroic" className="mb-4">
                  <Briefcase className="w-4 h-4 mr-1" />
                  {t("badge")}
                </Badge>
                <SectionTitle>{t("title")}</SectionTitle>
                <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
              </motion.div>
            </SectionHeader>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section className="py-16 bg-warm-white">
          <Container size="lg">
            <motion.h2
              className="text-2xl font-bold text-civic-500 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              {t("benefits.title")}
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {benefitKeys.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={staggerCard}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-subtle hover:shadow-soft transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-heroic-100 text-heroic-600 flex items-center justify-center mb-4">
                    {benefitIcons[benefit]}
                  </div>
                  <h3 className="font-semibold text-civic-500 mb-2">
                    {t(`benefits.items.${benefit}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`benefits.items.${benefit}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Open Positions Section */}
        <Section className="py-16 bg-white">
          <Container size="lg">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <h2 className="text-2xl font-bold text-civic-500 mb-3">
                {t("openings.title")}
              </h2>
              <p className="text-gray-600">{t("openings.subtitle")}</p>
            </motion.div>

            {positions.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                className="space-y-4"
              >
                {positions.map((position, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-heroic-50 transition-colors group cursor-pointer border border-gray-100"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-civic-500 group-hover:text-heroic-600 transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          {position.description}
                        </p>
                      </div>
                      <Button variant="secondary" size="sm" className="shrink-0">
                        {t("openings.apply")}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-16 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
              >
                <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-civic-500 mb-2">
                  {t("openings.noPositions.title")}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  {t("openings.noPositions.description")}
                </p>
                <Button variant="primary">
                  {t("openings.noPositions.cta")}
                </Button>
              </motion.div>
            )}
          </Container>
        </Section>

        {/* Culture Section */}
        <Section className="py-16 bg-civic-500 text-white">
          <Container size="md">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <h2 className="text-2xl font-bold mb-4">{t("culture.title")}</h2>
              <p className="text-civic-100 leading-relaxed mb-8">
                {t("culture.description")}
              </p>
              <div className="inline-flex items-center gap-2 text-heroic-400">
                <Heart className="w-5 h-5" />
                <span className="font-medium">{t("culture.tagline")}</span>
              </div>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

