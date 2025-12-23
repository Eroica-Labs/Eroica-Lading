"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Github,
  Twitter,
  Heart,
  Star,
  ExternalLink,
  Sparkles,
  Globe,
  Calendar,
} from "lucide-react";
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

// Platform icons
const platformIcons: Record<string, React.ReactNode> = {
  discord: <MessageSquare className="w-6 h-6" />,
  github: <Github className="w-6 h-6" />,
  twitter: <Twitter className="w-6 h-6" />,
  forum: <Users className="w-6 h-6" />,
};

export default function CommunityPage() {
  const t = useTranslations("community");

  // Community platforms
  const platforms = ["discord", "github", "twitter", "forum"];

  // Community stats
  const stats = [
    { key: "members", icon: <Users className="w-5 h-5" /> },
    { key: "communities", icon: <Globe className="w-5 h-5" /> },
    { key: "contributions", icon: <Star className="w-5 h-5" /> },
  ];

  // Get events
  let events: Array<{
    title: string;
    date: string;
    type: string;
    description: string;
  }> = [];
  
  try {
    events = t.raw("events.list") as typeof events;
  } catch {
    events = [];
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-civic-50 to-warm-white">
          <Container size="lg">
            <SectionHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Badge variant="heroic" className="mb-4">
                  <Heart className="w-4 h-4 mr-1" />
                  {t("badge")}
                </Badge>
                <SectionTitle>{t("title")}</SectionTitle>
                <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
              </motion.div>
            </SectionHeader>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {stats.map((stat) => (
                <div key={stat.key} className="text-center">
                  <div className="flex items-center justify-center gap-2 text-heroic-600 mb-1">
                    {stat.icon}
                    <span className="text-3xl font-bold text-civic-500">
                      {t(`stats.${stat.key}.value`)}
                    </span>
                  </div>
                  <span className="text-gray-600 text-sm">
                    {t(`stats.${stat.key}.label`)}
                  </span>
                </div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Platforms Section */}
        <Section className="py-16 bg-warm-white">
          <Container size="lg">
            <motion.h2
              className="text-2xl font-bold text-civic-500 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              {t("platforms.title")}
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {platforms.map((platform) => (
                <motion.a
                  key={platform}
                  variants={staggerCard}
                  href="#"
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-subtle hover:shadow-soft transition-all hover:-translate-y-1 group text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-civic-100 text-civic-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-heroic-100 group-hover:text-heroic-600 transition-colors group-hover:scale-110">
                    {platformIcons[platform]}
                  </div>
                  <h3 className="font-semibold text-civic-500 mb-1 group-hover:text-heroic-600 transition-colors">
                    {t(`platforms.${platform}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {t(`platforms.${platform}.description`)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-heroic-600">
                    {t(`platforms.${platform}.cta`)}
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Events Section */}
        <Section className="py-16 bg-white">
          <Container size="lg">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <h2 className="text-2xl font-bold text-civic-500 mb-3">
                {t("events.title")}
              </h2>
              <p className="text-gray-600">{t("events.subtitle")}</p>
            </motion.div>

            {events.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    variants={staggerCard}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-heroic-50 transition-colors group cursor-pointer border border-gray-100"
                  >
                    <div className="flex items-center gap-2 text-sm text-heroic-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                      <span className="px-2 py-0.5 bg-civic-100 text-civic-700 rounded-full text-xs">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-civic-500 group-hover:text-heroic-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-12 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
              >
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-civic-500 mb-2">
                  {t("events.noEvents.title")}
                </h3>
                <p className="text-gray-600">{t("events.noEvents.description")}</p>
              </motion.div>
            )}
          </Container>
        </Section>

        {/* Contribute Section */}
        <Section className="py-16 bg-civic-500 text-white">
          <Container size="md">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <Sparkles className="w-12 h-12 text-heroic-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">{t("contribute.title")}</h2>
              <p className="text-civic-100 leading-relaxed mb-8 max-w-xl mx-auto">
                {t("contribute.description")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="heroic" size="lg">
                  <Github className="w-5 h-5" />
                  {t("contribute.github")}
                </Button>
                <Button variant="secondary" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <MessageSquare className="w-5 h-5" />
                  {t("contribute.discord")}
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

