"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Heart, Target, Users, Globe, Sparkles, MapPin, Calendar, Award, FlaskConical, GraduationCap, Smartphone, ExternalLink, BookOpen, Scale, Lightbulb, HandHeart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function AboutPage() {
  const t = useTranslations("about");

  const values = ["democracy", "transparency", "community", "innovation"];
  
  const valueIcons: Record<string, React.ReactNode> = {
    democracy: <Users className="w-7 h-7" />,
    transparency: <Sparkles className="w-7 h-7" />,
    community: <Heart className="w-7 h-7" />,
    innovation: <Target className="w-7 h-7" />,
  };

  const milestones = [
    { year: "2023", icon: <Calendar className="w-5 h-5" /> },
    { year: "2024-Q1", icon: <Users className="w-5 h-5" /> },
    { year: "2024-Q3", icon: <Globe className="w-5 h-5" /> },
    { year: "2024-Q4", icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Gradient background for header area */}
      <div className="fixed inset-x-0 top-0 h-32 bg-gradient-to-b from-civic-50 to-transparent pointer-events-none z-40" />
      <Header />
      <main className="pt-24 pb-0 md:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-16 md:pb-24 bg-gradient-to-b from-civic-50 via-civic-50/50 to-white">
          <Container size="lg">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-heroic-100 text-heroic-600 mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-display-md text-civic-500 mb-6">
                {t("hero.title")}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Ecosystem Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container size="lg">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-heroic-100 text-heroic-700 text-sm font-medium mb-4">
                {t("ecosystem.badge")}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-civic-500 mb-4">
                {t("ecosystem.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("ecosystem.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Eroica Labs */}
              <motion.div
                variants={staggerItem}
                className="group relative bg-gradient-to-br from-civic-500 to-civic-600 rounded-2xl p-6 text-white overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <FlaskConical className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {t("ecosystem.items.labs.title")}
                  </h3>
                  <p className="text-white/70 text-sm font-medium mb-3">
                    {t("ecosystem.items.labs.entity")}
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {t("ecosystem.items.labs.description")}
                  </p>
                  <a 
                    href="https://eroica.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-heroic-300 text-sm font-medium hover:text-heroic-200 transition-colors"
                  >
                    {t("ecosystem.items.labs.domain")}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Eroica Foundation */}
              <motion.div
                variants={staggerItem}
                className="group bg-gradient-to-br from-heroic-500 to-heroic-600 rounded-2xl p-6 text-white overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {t("ecosystem.items.foundation.title")}
                  </h3>
                  <p className="text-white/70 text-sm font-medium mb-3">
                    {t("ecosystem.items.foundation.focus")}
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {t("ecosystem.items.foundation.description")}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white/60 text-sm font-medium">
                    {t("ecosystem.items.foundation.comingSoon")}
                  </span>
                </div>
              </motion.div>

              {/* Eroica Platform */}
              <motion.div
                variants={staggerItem}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle hover:shadow-medium transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-civic-100 text-civic-600 flex items-center justify-center mb-4">
                  <Smartphone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-civic-500 mb-1">
                  {t("ecosystem.items.platform.title")}
                </h3>
                <p className="text-civic-600 text-sm font-medium mb-3">
                  {t("ecosystem.items.platform.focus")}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("ecosystem.items.platform.description")}
                </p>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Foundation Section */}
        <section id="foundation" className="py-16 md:py-24 bg-gradient-to-b from-heroic-50/50 to-white">
          <Container size="lg">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-heroic-100 text-heroic-700 text-sm font-medium mb-4">
                {t("foundation.badge")}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-civic-500 mb-4">
                {t("foundation.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("foundation.subtitle")}
              </p>
            </motion.div>

            {/* Foundation Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="bg-white rounded-3xl p-8 md:p-12 border border-heroic-100 shadow-soft mb-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-heroic-100 text-heroic-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-civic-500 mb-3">
                    {t("foundation.mission.title")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("foundation.mission.description")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Foundation Pillars */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Pillar 1: Education */}
              <motion.div
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-heroic-100 text-heroic-600 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-civic-500 mb-2">
                  {t("foundation.pillars.education.title")}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("foundation.pillars.education.description")}
                </p>
              </motion.div>

              {/* Pillar 2: Research */}
              <motion.div
                variants={staggerItem}
                id="research"
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-civic-100 text-civic-600 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-civic-500 mb-2">
                  {t("foundation.pillars.research.title")}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("foundation.pillars.research.description")}
                </p>
              </motion.div>

              {/* Pillar 3: Advocacy */}
              <motion.div
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-heroic-100 text-heroic-600 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-civic-500 mb-2">
                  {t("foundation.pillars.advocacy.title")}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("foundation.pillars.advocacy.description")}
                </p>
              </motion.div>

              {/* Pillar 4: Community */}
              <motion.div
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-civic-100 text-civic-600 flex items-center justify-center mb-4">
                  <HandHeart className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-civic-500 mb-2">
                  {t("foundation.pillars.community.title")}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("foundation.pillars.community.description")}
                </p>
              </motion.div>
            </motion.div>

            {/* Coming Soon Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 bg-heroic-50 rounded-full px-6 py-3 border border-heroic-200">
                <Globe className="w-5 h-5 text-heroic-600" />
                <span className="text-heroic-700 font-medium">
                  {t("foundation.comingSoon")}
                </span>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container size="lg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-heroic-100 text-heroic-700 text-sm font-medium mb-4">
                  {t("mission.badge")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-civic-500 mb-6">
                  {t("mission.title")}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t("mission.content")}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t("mission.vision")}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Visual representation */}
                <div className="relative bg-gradient-to-br from-civic-500 to-civic-600 rounded-3xl p-8 text-white">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-heroic-500/20 rounded-full blur-xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg" />
                  
                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">{t("mission.location.title")}</p>
                        <p className="text-white/80 text-sm">{t("mission.location.value")}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">{t("mission.founded.title")}</p>
                        <p className="text-white/80 text-sm">{t("mission.founded.value")}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">{t("mission.global.title")}</p>
                        <p className="text-white/80 text-sm">{t("mission.global.value")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container size="lg">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-civic-100 text-civic-700 text-sm font-medium mb-4">
                {t("values.badge")}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-civic-500 mb-4">
                {t("values.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("values.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value) => (
                <motion.div
                  key={value}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle hover:shadow-medium transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-heroic-100 text-heroic-600 flex items-center justify-center mb-4">
                    {valueIcons[value]}
                  </div>
                  <h3 className="text-lg font-semibold text-civic-500 mb-2">
                    {t(`values.items.${value}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`values.items.${value}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container size="default">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-heroic-100 text-heroic-700 text-sm font-medium mb-4">
                {t("timeline.badge")}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-civic-500 mb-4">
                {t("timeline.title")}
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
                className="space-y-8"
              >
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    variants={staggerItem}
                    className={`flex items-center gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className={`inline-block bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle ${
                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      }`}>
                        <span className="text-heroic-600 font-semibold text-sm">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-semibold text-civic-500 mt-2 mb-2">
                          {t(`timeline.items.${milestone.year.replace('-', '')}.title`)}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {t(`timeline.items.${milestone.year.replace('-', '')}.description`)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline node */}
                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-civic-500 text-white items-center justify-center z-10">
                      {milestone.icon}
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Swiss Commitment */}
        <section className="py-16 md:py-24 bg-civic-500 text-white">
          <Container size="default">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-6">
                {t("swiss.title")}
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
                {t("swiss.content")}
              </p>
              <div className="inline-flex items-center gap-2 text-heroic-400 font-medium">
                <MapPin className="w-5 h-5" />
                <span>{t("swiss.location")}</span>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

