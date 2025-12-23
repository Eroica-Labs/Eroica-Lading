"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    "what",
    "coins",
    "privacy",
    "migrate",
    "platforms",
    "cancel",
  ] as const;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="warm">
      <Container size="sm">
        <SectionHeader>
          <Badge variant="teal" className="mb-4">
            {t("badge")}
          </Badge>
          <SectionTitle>{t("title")}</SectionTitle>
          <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
        </SectionHeader>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {t(`items.${item}.question`)}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {t(`items.${item}.answer`)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
