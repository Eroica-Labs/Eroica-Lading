"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Users, Building2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function Audiences() {
  const t = useTranslations("audiences");

  const audiences = [
    {
      key: "leaders",
      icon: Users,
      gradient: "from-teal-500 to-teal-600",
      bgPattern: "bg-teal-50",
    },
    {
      key: "organizations",
      icon: Building2,
      gradient: "from-navy-800 to-navy-900",
      bgPattern: "bg-navy-50",
    },
  ];

  return (
    <Section background="warm">
      <Container size="lg">
        <div className="text-center mb-12">
          <Badge variant="teal" className="mb-4">
            {t("badge")}
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={audience.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-3xl p-8 md:p-10 ${audience.bgPattern}`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                  <Icon className="w-full h-full" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${audience.gradient} text-white mb-6`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {t(`${audience.key}.title`)}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                    {t(`${audience.key}.description`)}
                  </p>

                  <Button variant={index === 0 ? "teal" : "primary"} className="group">
                    {t(`${audience.key}.cta`)}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
