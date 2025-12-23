"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeader, SectionTitle } from "@/components/ui/Section";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials = ["one", "two", "three"] as const;

  return (
    <Section background="white">
      <Container size="lg">
        <SectionHeader>
          <Badge variant="teal" className="mb-4">
            {t("badge")}
          </Badge>
          <SectionTitle>{t("title")}</SectionTitle>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-teal-600" />
                </div>

                {/* Quote text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  "{t(`items.${testimonial}.quote`)}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-400 to-teal-500 flex items-center justify-center text-white font-semibold">
                    {t(`items.${testimonial}.author`).charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {t(`items.${testimonial}.author`)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t(`items.${testimonial}.role`)}, {t(`items.${testimonial}.org`)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
