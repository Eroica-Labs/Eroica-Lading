"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Users, Heart, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function JoinPage() {
  const t = useTranslations("join");

  const values = t.raw("values.items") as string[];

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-16 md:pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-heroic-50/50 to-white -z-10" />
          <Container size="md">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-heroic-100 text-heroic-600 mb-6">
                <Users className="w-8 h-8" />
              </div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-heroic-100 text-heroic-700 text-sm font-medium mb-4">
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

        {/* Intro Section */}
        <section className="py-12 md:py-16">
          <Container size="md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-subtle"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-civic-100 text-civic-600 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("intro")}
                </p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* What We Look For */}
        <section className="py-12 md:py-16 bg-gray-50">
          <Container size="md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="text-center mb-8"
            >
              <h2 className="font-display text-2xl md:text-3xl text-civic-500">
                {t("values.title")}
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="space-y-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-subtle"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heroic-100 text-heroic-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700">{value}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <Container size="sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="text-center bg-gradient-to-br from-civic-500 to-civic-600 rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 mb-6">
                <Mail className="w-7 h-7" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-white/90 leading-relaxed mb-8 max-w-md mx-auto">
                {t("contact.description")}
              </p>
              <Button
                variant="heroic"
                size="lg"
                className="group"
                onClick={() => window.location.href = `mailto:${t("contact.email")}`}
              >
                {t("contact.cta")}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="mt-4 text-white/70 text-sm">
                {t("contact.email")}
              </p>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

