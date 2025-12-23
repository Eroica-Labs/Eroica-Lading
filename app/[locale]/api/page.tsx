"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  FileJson,
  Key,
  Book,
  Zap,
  Shield,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerCard, viewportOnce } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { locales } from "@/i18n/config";

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// API feature icons
const featureIcons: Record<string, React.ReactNode> = {
  restful: <FileJson className="w-6 h-6" />,
  authentication: <Key className="w-6 h-6" />,
  realtime: <Zap className="w-6 h-6" />,
  security: <Shield className="w-6 h-6" />,
};

export default function ApiPage() {
  const t = useTranslations("api");
  const [copied, setCopied] = useState(false);

  const codeExample = `curl -X GET "https://api.eroica.app/v1/communities" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // API features
  const features = ["restful", "authentication", "realtime", "security"];

  // API endpoints
  const endpoints = [
    { method: "GET", path: "/v1/communities", description: "List all communities" },
    { method: "POST", path: "/v1/communities", description: "Create a new community" },
    { method: "GET", path: "/v1/proposals", description: "List proposals" },
    { method: "POST", path: "/v1/votes", description: "Cast a vote" },
    { method: "GET", path: "/v1/users/:id", description: "Get user profile" },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <Container size="lg">
            <SectionHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Badge className="mb-4 bg-heroic-500/20 text-heroic-400 border-heroic-500/30">
                  <Code className="w-4 h-4 mr-1" />
                  {t("badge")}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                  {t("title")}
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  {t("subtitle")}
                </p>
              </motion.div>
            </SectionHeader>

            {/* Code example */}
            <motion.div
              className="mt-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-950 rounded-xl overflow-hidden border border-gray-700">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Terminal</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-green-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Features Section */}
        <Section className="py-16 bg-warm-white">
          <Container size="lg">
            <motion.h2
              className="text-2xl font-bold text-civic-500 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              {t("features.title")}
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={staggerCard}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-subtle text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-civic-100 text-civic-600 flex items-center justify-center mx-auto mb-4">
                    {featureIcons[feature]}
                  </div>
                  <h3 className="font-semibold text-civic-500 mb-2">
                    {t(`features.items.${feature}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`features.items.${feature}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Endpoints Preview */}
        <Section className="py-16 bg-white">
          <Container size="lg">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <h2 className="text-2xl font-bold text-civic-500 mb-3">
                {t("endpoints.title")}
              </h2>
              <p className="text-gray-600">{t("endpoints.subtitle")}</p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <div className="divide-y divide-gray-200">
                {endpoints.map((endpoint, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 hover:bg-gray-100 transition-colors"
                  >
                    <span
                      className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                        endpoint.method === "GET"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="font-mono text-sm text-gray-800">{endpoint.path}</code>
                    <span className="text-sm text-gray-500 ml-auto">
                      {endpoint.description}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
            >
              <Button variant="primary" size="lg">
                <Book className="w-5 h-5" />
                {t("endpoints.viewDocs")}
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
          </Container>
        </Section>

        {/* SDKs Section */}
        <Section className="py-16 bg-gray-900 text-white">
          <Container size="lg">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <h2 className="text-2xl font-bold mb-3">{t("sdks.title")}</h2>
              <p className="text-gray-400">{t("sdks.subtitle")}</p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              {["JavaScript", "Python", "Ruby", "PHP", "Go", "Swift"].map((sdk) => (
                <div
                  key={sdk}
                  className="px-6 py-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-300 hover:border-heroic-500 hover:text-heroic-400 transition-colors cursor-pointer"
                >
                  {sdk}
                </div>
              ))}
            </motion.div>

            <motion.p
              className="text-center text-gray-500 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
            >
              {t("sdks.comingSoon")}
            </motion.p>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="py-16 bg-warm-white">
          <Container size="md">
            <motion.div
              className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-soft text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <Key className="w-12 h-12 text-heroic-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-civic-500 mb-3">
                {t("cta.title")}
              </h2>
              <p className="text-gray-600 mb-6">{t("cta.description")}</p>
              <Button variant="heroic" size="lg">
                {t("cta.button")}
              </Button>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

