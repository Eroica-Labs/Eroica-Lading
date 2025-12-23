"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Newspaper,
  Download,
  Mail,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Palette,
  Quote,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { locales } from "@/i18n/config";

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function PressPage() {
  const t = useTranslations("press");

  // Media kit items
  const mediaKitItems = [
    { key: "logos", icon: <Palette className="w-6 h-6" /> },
    { key: "photos", icon: <ImageIcon className="w-6 h-6" /> },
    { key: "factSheet", icon: <FileText className="w-6 h-6" /> },
  ];

  // Get press releases
  let releases: Array<{
    title: string;
    date: string;
    excerpt: string;
  }> = [];
  
  try {
    releases = t.raw("releases") as typeof releases;
  } catch {
    releases = [];
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-heroic-50 to-warm-white">
          <Container size="lg">
            <SectionHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Badge variant="heroic" className="mb-4">
                  <Newspaper className="w-4 h-4 mr-1" />
                  {t("badge")}
                </Badge>
                <SectionTitle>{t("title")}</SectionTitle>
                <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
              </motion.div>
            </SectionHeader>
          </Container>
        </Section>

        {/* Media Kit Section */}
        <Section className="py-16 bg-warm-white">
          <Container size="lg">
            <motion.h2
              className="text-2xl font-bold text-civic-500 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              {t("mediaKit.title")}
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-3 gap-6"
            >
              {mediaKitItems.map((item) => (
                <motion.div
                  key={item.key}
                  variants={staggerItem}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-subtle hover:shadow-soft transition-all hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-heroic-100 text-heroic-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-civic-500 mb-2">
                    {t(`mediaKit.items.${item.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(`mediaKit.items.${item.key}.description`)}
                  </p>
                  <button className="inline-flex items-center gap-1 text-sm font-medium text-heroic-600 hover:text-heroic-700 transition-colors">
                    <Download className="w-4 h-4" />
                    {t("mediaKit.download")}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Press Releases Section */}
        <Section className="py-16 bg-white">
          <Container size="lg">
            <motion.h2
              className="text-2xl font-bold text-civic-500 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              {t("releases.title")}
            </motion.h2>

            {releases.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                className="space-y-6"
              >
                {releases.map((release, index) => (
                  <motion.article
                    key={index}
                    variants={staggerItem}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-heroic-50 transition-colors group cursor-pointer border border-gray-100"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <time className="text-sm text-gray-500">{release.date}</time>
                        <h3 className="text-lg font-semibold text-civic-500 group-hover:text-heroic-600 transition-colors mt-1">
                          {release.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{release.excerpt}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-heroic-600 transition-colors shrink-0" />
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-12 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
              >
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">{t("releases.comingSoon")}</p>
              </motion.div>
            )}
          </Container>
        </Section>

        {/* Quote Section */}
        <Section className="py-16 bg-civic-500 text-white">
          <Container size="md">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <Quote className="w-12 h-12 text-heroic-400 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-display leading-relaxed mb-6">
                "{t("quote.text")}"
              </blockquote>
              <cite className="text-civic-200 not-italic">
                — {t("quote.author")}, {t("quote.role")}
              </cite>
            </motion.div>
          </Container>
        </Section>

        {/* Contact Section */}
        <Section className="py-16 bg-warm-white">
          <Container size="md">
            <motion.div
              className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-soft text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <Mail className="w-12 h-12 text-heroic-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-civic-500 mb-3">
                {t("contact.title")}
              </h2>
              <p className="text-gray-600 mb-6">{t("contact.description")}</p>
              <Button variant="heroic" size="lg">
                <Mail className="w-5 h-5" />
                {t("contact.cta")}
              </Button>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

