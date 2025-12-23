"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Apple, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  const t = useTranslations("cta");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
    // Would show success toast here
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background - Brand Book: Deep Civic Blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-civic-500 via-civic-600 to-civic-700" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-heroic-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-civic-400/20 rounded-full blur-3xl" />

      <Container size="sm" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Headline - Brand Book: Playfair Display */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-display-md text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
            {t("subtitle")}
          </p>

          {/* Email form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("email.placeholder")}
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-heroic-500 focus:border-transparent"
              required
            />
            <Button
              type="submit"
              variant="heroic"
              size="lg"
              isLoading={isSubmitting}
              className="group"
            >
              {t("email.button")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-xs text-gray-400 mb-12">
            {t("legal")}
          </p>

          {/* App store buttons */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-4">{t("download.title")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* App Store button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl text-civic-500 hover:bg-gray-100 transition-colors"
              >
                <Apple className="w-7 h-7" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </a>

              {/* Google Play button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl text-civic-500 hover:bg-gray-100 transition-colors"
              >
                <Play className="w-7 h-7" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
