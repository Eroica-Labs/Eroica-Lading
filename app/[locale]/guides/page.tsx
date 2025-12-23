"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  Rocket,
  Users,
  Vote,
  Coins,
  Settings,
  Shield,
  CheckCircle2,
  Smartphone,
  Download,
  UserPlus,
  LogIn,
  Home,
  Bell,
  PlusCircle,
  HandCoins,
  BarChart3,
  MessageSquare,
  Eye,
  FolderKanban,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Step component for numbered guides
function GuideStep({ 
  number, 
  title, 
  description, 
  icon: Icon 
}: { 
  number: number; 
  title: string; 
  description: string; 
  icon: React.ElementType;
}) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-heroic-50 transition-colors"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-heroic-500 text-white flex items-center justify-center font-bold text-sm">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-heroic-600" />
          <h4 className="font-semibold text-civic-500">{title}</h4>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Feature card component
function FeatureCard({ 
  icon: Icon, 
  title, 
  description,
  color = "heroic"
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  color?: "heroic" | "civic";
}) {
  const colors = {
    heroic: "bg-heroic-100 text-heroic-600",
    civic: "bg-civic-100 text-civic-600",
  };
  
  return (
    <motion.div
      variants={staggerItem}
      className="bg-white rounded-xl p-5 border border-gray-100 shadow-subtle hover:shadow-soft transition-all hover:-translate-y-1"
    >
      <div className={`w-10 h-10 rounded-lg ${colors[color]} flex items-center justify-center mb-3`}>
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="font-semibold text-civic-500 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function GuidesPage() {
  const t = useTranslations("guides");

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-heroic-50 to-warm-white">
          <Container size="lg">
            <SectionHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Badge variant="heroic" className="mb-4">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {t("badge")}
                </Badge>
                <SectionTitle>{t("title")}</SectionTitle>
                <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
              </motion.div>
            </SectionHeader>
          </Container>
        </Section>

        {/* Quick Start Section */}
        <Section className="py-16 bg-white" id="quickstart">
          <Container size="lg">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-heroic-100 text-heroic-600 flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-civic-500">{t("quickStart.title")}</h2>
                  <p className="text-gray-600">{t("quickStart.subtitle")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="space-y-4"
            >
              <GuideStep
                number={1}
                title={t("quickStart.steps.download.title")}
                description={t("quickStart.steps.download.description")}
                icon={Download}
              />
              <GuideStep
                number={2}
                title={t("quickStart.steps.register.title")}
                description={t("quickStart.steps.register.description")}
                icon={UserPlus}
              />
              <GuideStep
                number={3}
                title={t("quickStart.steps.login.title")}
                description={t("quickStart.steps.login.description")}
                icon={LogIn}
              />
              <GuideStep
                number={4}
                title={t("quickStart.steps.explore.title")}
                description={t("quickStart.steps.explore.description")}
                icon={Home}
              />
            </motion.div>
          </Container>
        </Section>

        {/* Main Features Section */}
        <Section className="py-16 bg-gray-50" id="features">
          <Container size="lg">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <h2 className="text-2xl font-bold text-civic-500 mb-3">{t("mainFeatures.title")}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t("mainFeatures.subtitle")}</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <FeatureCard
                icon={Home}
                title={t("mainFeatures.items.home.title")}
                description={t("mainFeatures.items.home.description")}
              />
              <FeatureCard
                icon={Users}
                title={t("mainFeatures.items.communities.title")}
                description={t("mainFeatures.items.communities.description")}
                color="civic"
              />
              <FeatureCard
                icon={Vote}
                title={t("mainFeatures.items.voting.title")}
                description={t("mainFeatures.items.voting.description")}
              />
              <FeatureCard
                icon={FolderKanban}
                title={t("mainFeatures.items.projects.title")}
                description={t("mainFeatures.items.projects.description")}
                color="civic"
              />
              <FeatureCard
                icon={Wallet}
                title={t("mainFeatures.items.wallet.title")}
                description={t("mainFeatures.items.wallet.description")}
              />
              <FeatureCard
                icon={Bell}
                title={t("mainFeatures.items.notifications.title")}
                description={t("mainFeatures.items.notifications.description")}
                color="civic"
              />
            </motion.div>
          </Container>
        </Section>

        {/* Communities Guide */}
        <Section className="py-16 bg-white" id="communities">
          <Container size="lg">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-civic-100 text-civic-600 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-civic-500">{t("communities.title")}</h2>
                  <p className="text-gray-600">{t("communities.subtitle")}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Join Community */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-civic-500 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-heroic-500" />
                  {t("communities.join.title")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("communities.join.steps.browse")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("communities.join.steps.select")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("communities.join.steps.request")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("communities.join.steps.participate")}
                  </li>
                </ul>
              </motion.div>

              {/* Create Community */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                className="bg-heroic-50 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-civic-500 mb-4 flex items-center gap-2">
                  <PlusCircle className="w-5 h-5 text-heroic-500" />
                  {t("communities.create.title")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("communities.create.steps.tap")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("communities.create.steps.configure")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("communities.create.steps.privacy")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("communities.create.steps.invite")}
                  </li>
                </ul>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* Voting Guide */}
        <Section className="py-16 bg-gray-50" id="voting">
          <Container size="lg">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-heroic-100 text-heroic-600 flex items-center justify-center">
                  <Vote className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-civic-500">{t("voting.title")}</h2>
                  <p className="text-gray-600">{t("voting.subtitle")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportOnce}
              className="space-y-4"
            >
              <GuideStep
                number={1}
                title={t("voting.steps.access.title")}
                description={t("voting.steps.access.description")}
                icon={Eye}
              />
              <GuideStep
                number={2}
                title={t("voting.steps.review.title")}
                description={t("voting.steps.review.description")}
                icon={MessageSquare}
              />
              <GuideStep
                number={3}
                title={t("voting.steps.vote.title")}
                description={t("voting.steps.vote.description")}
                icon={Vote}
              />
              <GuideStep
                number={4}
                title={t("voting.steps.results.title")}
                description={t("voting.steps.results.description")}
                icon={BarChart3}
              />
            </motion.div>
          </Container>
        </Section>

        {/* Eroica Coins Guide */}
        <Section className="py-16 bg-white" id="coins">
          <Container size="lg">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-heroic-100 text-heroic-600 flex items-center justify-center">
                  <Coins className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-civic-500">{t("coins.title")}</h2>
                  <p className="text-gray-600">{t("coins.subtitle")}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* How to Earn */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                className="bg-heroic-50 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-civic-500 mb-4 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-heroic-500" />
                  {t("coins.earn.title")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("coins.earn.items.welcome")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("coins.earn.items.vote")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("coins.earn.items.propose")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-heroic-500 mt-0.5 flex-shrink-0" />
                    {t("coins.earn.items.invite")}
                  </li>
                </ul>
              </motion.div>

              {/* How to Use */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                className="bg-civic-50 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-civic-500 mb-4 flex items-center gap-2">
                  <HandCoins className="w-5 h-5 text-civic-500" />
                  {t("coins.use.title")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-civic-500 mt-0.5 flex-shrink-0" />
                    {t("coins.use.items.donate")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-civic-500 mt-0.5 flex-shrink-0" />
                    {t("coins.use.items.fund")}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-civic-500 mt-0.5 flex-shrink-0" />
                    {t("coins.use.items.boost")}
                  </li>
                </ul>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* Need Help CTA */}
        <Section className="py-16 bg-civic-500 text-white">
          <Container size="md">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <Shield className="w-12 h-12 text-heroic-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">{t("help.title")}</h2>
              <p className="text-civic-200 mb-6 max-w-lg mx-auto">{t("help.description")}</p>
              <a
                href="/support"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-civic-500 rounded-xl font-semibold hover:bg-heroic-50 transition-colors"
              >
                {t("help.cta")}
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
