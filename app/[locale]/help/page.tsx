"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Book,
  Search,
  ChevronRight,
  Users,
  Vote,
  Coins,
  Shield,
  Settings,
  Bell,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, staggerCard, viewportOnce } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Category icons
const categoryIcons: Record<string, React.ReactNode> = {
  gettingStarted: <Book className="w-6 h-6" />,
  communities: <Users className="w-6 h-6" />,
  voting: <Vote className="w-6 h-6" />,
  coins: <Coins className="w-6 h-6" />,
  account: <Settings className="w-6 h-6" />,
  notifications: <Bell className="w-6 h-6" />,
  security: <Shield className="w-6 h-6" />,
};

export default function HelpPage() {
  const t = useTranslations("help");

  // Help categories
  const categories = [
    "gettingStarted",
    "communities",
    "voting",
    "coins",
    "account",
    "security",
  ];

  // Popular articles
  let popularArticles: Array<{ title: string; category: string }> = [];
  try {
    popularArticles = t.raw("popular") as typeof popularArticles;
  } catch {
    popularArticles = [];
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Search */}
        <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-civic-500 to-civic-600 text-white">
          <Container size="lg">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="heroic" className="mb-4">
                <HelpCircle className="w-4 h-4 mr-1" />
                {t("badge")}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {t("title")}
              </h1>
              <p className="text-civic-100 text-lg mb-8">{t("subtitle")}</p>

              {/* Search bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("search.placeholder")}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 shadow-large focus:outline-none focus:ring-2 focus:ring-heroic-500"
                />
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Categories Grid */}
        <Section className="py-16 bg-warm-white -mt-8">
          <Container size="lg">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categories.map((category) => (
                <motion.div
                  key={category}
                  variants={staggerCard}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-subtle hover:shadow-soft transition-all hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-civic-100 text-civic-600 flex items-center justify-center shrink-0 group-hover:bg-heroic-100 group-hover:text-heroic-600 transition-colors">
                      {categoryIcons[category]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-civic-500 mb-1 group-hover:text-heroic-600 transition-colors">
                        {t(`categories.${category}.title`)}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t(`categories.${category}.description`)}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm text-heroic-600 mt-2">
                        {t(`categories.${category}.count`)}
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Popular Articles */}
        {popularArticles.length > 0 && (
          <Section className="py-16 bg-white">
            <Container size="lg">
              <motion.h2
                className="text-2xl font-bold text-civic-500 text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
              >
                {t("popular.title")}
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                className="grid md:grid-cols-2 gap-4"
              >
                {popularArticles.map((article, index) => (
                  <motion.a
                    key={index}
                    variants={staggerItem}
                    href="#"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-heroic-50 transition-colors group"
                  >
                    <Book className="w-5 h-5 text-gray-400 group-hover:text-heroic-600 transition-colors" />
                    <div>
                      <span className="font-medium text-civic-500 group-hover:text-heroic-600 transition-colors">
                        {article.title}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">
                        {article.category}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-heroic-600 transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </Container>
          </Section>
        )}

        {/* Contact Support */}
        <Section className="py-16 bg-warm-white">
          <Container size="lg">
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              {/* Email Support */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-subtle text-center">
                <Mail className="w-12 h-12 text-civic-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-civic-500 mb-2">
                  {t("contact.email.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("contact.email.description")}</p>
                <Button variant="primary">
                  <Mail className="w-4 h-4" />
                  {t("contact.email.cta")}
                </Button>
              </div>

              {/* Live Chat */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-subtle text-center">
                <MessageCircle className="w-12 h-12 text-heroic-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-civic-500 mb-2">
                  {t("contact.chat.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("contact.chat.description")}</p>
                <Button variant="heroic">
                  <MessageCircle className="w-4 h-4" />
                  {t("contact.chat.cta")}
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

