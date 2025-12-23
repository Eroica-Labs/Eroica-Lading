"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, User } from "lucide-react";
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

export default function BlogPage() {
  const t = useTranslations("blog");

  // Get blog posts from translations
  let posts: Array<{
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    image: string;
  }> = [];
  
  try {
    posts = t.raw("posts") as typeof posts;
  } catch {
    posts = [];
  }

  return (
    <>
      <Header />
      <main>
        <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-warm-white">
          <Container size="lg">
            {/* Header */}
            <SectionHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="civic" className="mb-4">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {t("badge")}
                </Badge>
                <SectionTitle>{t("title")}</SectionTitle>
                <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
              </motion.div>
            </SectionHeader>

            {/* Blog posts grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {posts.map((post, index) => (
                <motion.article
                  key={index}
                  variants={staggerCard}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-subtle hover:shadow-large transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-civic-100 to-heroic-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-civic-300" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-civic-600">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-civic-500 mb-2 group-hover:text-heroic-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <button className="inline-flex items-center gap-1 text-sm font-medium text-heroic-600 hover:text-heroic-700 transition-colors group/link">
                      {t("readMore")}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Coming soon message if no posts */}
            {posts.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-civic-100 text-civic-600 mb-6">
                  <BookOpen className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-civic-500 mb-3">
                  {t("comingSoon.title")}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  {t("comingSoon.description")}
                </p>
                <Button variant="secondary">
                  {t("comingSoon.cta")}
                </Button>
              </motion.div>
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

