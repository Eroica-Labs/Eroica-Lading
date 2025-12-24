"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FileText, Scale, Users, CreditCard, AlertTriangle, Gavel, Shield, HelpCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

// Sections that have items arrays in their translations
const sectionsWithItems = ["conduct"];

// Helper component to render section items if they exist
function SectionItems({ section, t }: { section: string; t: ReturnType<typeof useTranslations> }) {
  // Only try to access items for sections that have them
  if (!sectionsWithItems.includes(section)) {
    return null;
  }
  
  const items = t.raw(`sections.${section}.items`) as string[];
  
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-heroic-500 mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  const t = useTranslations("terms");

  // Section icons mapping
  const sectionIcons: Record<string, React.ReactNode> = {
    acceptance: <FileText className="w-6 h-6" />,
    services: <Users className="w-6 h-6" />,
    accounts: <Shield className="w-6 h-6" />,
    coins: <CreditCard className="w-6 h-6" />,
    conduct: <Scale className="w-6 h-6" />,
    content: <FileText className="w-6 h-6" />,
    intellectual: <Gavel className="w-6 h-6" />,
    liability: <AlertTriangle className="w-6 h-6" />,
    termination: <AlertTriangle className="w-6 h-6" />,
    disputes: <Gavel className="w-6 h-6" />,
    changes: <FileText className="w-6 h-6" />,
    contact: <HelpCircle className="w-6 h-6" />,
  };

  const sections = [
    "acceptance",
    "services",
    "accounts",
    "coins",
    "conduct",
    "content",
    "intellectual",
    "liability",
    "termination",
    "disputes",
    "changes",
    "contact",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-heroic-50 via-heroic-50/30 to-white">
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <Container size="default">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-heroic-100 text-heroic-600 mb-6">
              <Scale className="w-8 h-8" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-display-md text-civic-500 mb-4">
              {t("title")}
            </h1>
            <p className="text-gray-600 text-lg">
              {t("lastUpdated", { date: "December 23, 2024" })}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="prose prose-lg max-w-none mb-12"
            {...fadeInUp}
          >
            <p className="text-gray-700 leading-relaxed">
              {t("introduction")}
            </p>
          </motion.div>

          {/* Sections */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.section
                key={section}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-subtle"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-heroic-50 text-heroic-600 flex items-center justify-center">
                    {sectionIcons[section] || <FileText className="w-6 h-6" />}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-civic-500">
                      {index + 1}. {t(`sections.${section}.title`)}
                    </h2>
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed pl-16">
                  <p>{t(`sections.${section}.content`)}</p>
                  {/* Additional list items if present */}
                  <SectionItems section={section} t={t} />
                </div>
              </motion.section>
            ))}
          </motion.div>

          {/* Swiss Law Notice */}
          <motion.div
            className="mt-12 p-6 bg-heroic-50 rounded-2xl border border-heroic-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-heroic-100 text-heroic-600 flex items-center justify-center">
                <Gavel className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-heroic-700 mb-2">
                  {t("swissLaw.title")}
                </h3>
                <p className="text-heroic-800 text-sm">
                  {t("swissLaw.content")}
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

