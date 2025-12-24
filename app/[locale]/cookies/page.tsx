"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Cookie, Settings, BarChart3, Shield, Clock, HelpCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

// Sections that have items arrays in their translations
const sectionsWithItems = ["essential", "analytics", "control"];

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

// Helper component to render cookie table
function CookieTable({ t }: { t: ReturnType<typeof useTranslations> }) {
  try {
    const cookies = t.raw("table.cookies") as Array<{name: string; purpose: string; duration: string; type: string}>;
    if (!Array.isArray(cookies)) return null;
    
    return (
      <>
        {cookies.map((cookie, i) => (
          <div key={i} className="grid grid-cols-4 gap-4 px-6 py-4 text-sm">
            <div className="font-mono text-civic-600">{cookie.name}</div>
            <div className="text-gray-600">{cookie.purpose}</div>
            <div className="text-gray-500">{cookie.duration}</div>
            <div>
              <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                cookie.type === 'Essential' || cookie.type === 'Esencial'
                  ? 'bg-civic-100 text-civic-700'
                  : 'bg-heroic-100 text-heroic-700'
              }`}>
                {cookie.type}
              </span>
            </div>
          </div>
        ))}
      </>
    );
  } catch {
    return null;
  }
}

export default function CookiesPage() {
  const t = useTranslations("cookies");

  // Section icons mapping
  const sectionIcons: Record<string, React.ReactNode> = {
    what: <Cookie className="w-6 h-6" />,
    types: <Settings className="w-6 h-6" />,
    essential: <Shield className="w-6 h-6" />,
    analytics: <BarChart3 className="w-6 h-6" />,
    preferences: <Settings className="w-6 h-6" />,
    duration: <Clock className="w-6 h-6" />,
    control: <Settings className="w-6 h-6" />,
    thirdParty: <Shield className="w-6 h-6" />,
    changes: <Clock className="w-6 h-6" />,
    contact: <HelpCircle className="w-6 h-6" />,
  };

  const sections = [
    "what",
    "types",
    "essential",
    "analytics",
    "preferences",
    "duration",
    "control",
    "thirdParty",
    "changes",
    "contact",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Gradient only for header area */}
      <div className="fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-heroic-50 to-transparent pointer-events-none z-0" />
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 relative z-10 bg-gradient-to-b from-heroic-50 via-white to-white">
        <Container size="default">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-heroic-100 text-heroic-600 mb-6">
              <Cookie className="w-8 h-8" />
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
                    {sectionIcons[section] || <Cookie className="w-6 h-6" />}
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

          {/* Cookie Table */}
          <motion.div
            className="mt-12 overflow-hidden rounded-2xl border border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
          >
            <div className="bg-civic-500 text-white px-6 py-4">
              <h3 className="font-semibold">{t("table.title")}</h3>
            </div>
            <div className="bg-white divide-y divide-gray-100">
              <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                <div>{t("table.headers.name")}</div>
                <div>{t("table.headers.purpose")}</div>
                <div>{t("table.headers.duration")}</div>
                <div>{t("table.headers.type")}</div>
              </div>
              <CookieTable t={t} />
            </div>
          </motion.div>

          {/* Swiss Law Notice */}
          <motion.div
            className="mt-12 p-6 bg-civic-50 rounded-2xl border border-civic-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-civic-100 text-civic-600 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-civic-600 mb-2">
                  {t("swissLaw.title")}
                </h3>
                <p className="text-civic-700 text-sm">
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

