"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HelpCircle, Mail, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

// FAQ Accordion Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-medium text-civic-500 group-hover:text-civic-600 transition-colors pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-gray-600 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function SupportPage() {
  const t = useTranslations("support");

  const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>;

  return (
    <div className="min-h-screen">
      {/* Gradient only for header area */}
      <div className="fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-civic-50 to-transparent pointer-events-none z-0" />
      <Header />
      <main className="pt-24 md:pt-32 relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-16 md:pb-24 bg-gradient-to-b from-civic-50 to-white">
          <Container size="default">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-civic-100 text-civic-600 mb-6">
                <HelpCircle className="w-8 h-8" />
              </div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-civic-100 text-civic-700 text-sm font-medium mb-4">
                {t("badge")}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-display-md text-civic-500 mb-6">
                {t("title")}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {t("subtitle")}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Cards */}
        <section className="py-12 md:py-16">
          <Container size="default">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="text-center mb-8"
            >
              <h2 className="font-display text-2xl md:text-3xl text-civic-500">
                {t("contact.title")}
              </h2>
              <p className="text-gray-600 mt-2">
                {t("contact.description")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Email Card */}
              <motion.a
                href={`mailto:${t("contact.email.value")}`}
                variants={staggerItem}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle hover:shadow-medium hover:border-heroic-200/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-heroic-100 text-heroic-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-civic-500 mb-1">
                  {t("contact.email.title")}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {t("contact.email.description")}
                </p>
                <span className="text-heroic-600 font-medium">
                  {t("contact.email.value")}
                </span>
              </motion.a>

              {/* Hours Card */}
              <motion.div
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle"
              >
                <div className="w-12 h-12 rounded-xl bg-civic-100 text-civic-600 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-civic-500 mb-1">
                  {t("contact.hours.title")}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {t("contact.hours.description")}
                </p>
                <span className="text-civic-600 font-medium">
                  {t("contact.hours.value")}
                </span>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <Container size="default">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="text-center mb-8"
            >
              <h2 className="font-display text-2xl md:text-3xl text-civic-500">
                {t("faq.title")}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-subtle"
            >
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

