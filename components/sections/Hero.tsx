"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users, CheckSquare, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedWaves } from "@/components/ui/AnimatedWaves";
import { 
  staggerContainerSlow, 
  staggerItem, 
} from "@/lib/animations";

// Animated counter component
function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-civic-500"
    >
      {value}{suffix}
    </motion.span>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-warm-white via-white to-warm-white">
      {/* Symphonic Waves - The Living Score */}
      <AnimatedWaves />
      
      {/* Content Container */}
      <Container size="lg" className="relative z-10 py-20 md:py-28 lg:py-32">
        <motion.div
          variants={staggerContainerSlow}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={staggerItem}>
            <Badge variant="heroic" className="mb-6 md:mb-8">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              {t("badge")}
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-civic-500 mb-6 text-balance"
          >
            {t("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed text-balance"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20"
          >
            <Button 
              size="lg" 
              variant="primary"
              className="w-full sm:w-auto group"
            >
              {t("cta.primary")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto group"
            >
              <Play className="w-4 h-4 fill-current" />
              {t("cta.secondary")}
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12"
          >
            {/* Stat 1: Communities */}
            <motion.div 
              className="group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100/80 shadow-subtle transition-all duration-300 group-hover:shadow-soft group-hover:border-heroic-200/50">
                <div className="w-12 h-12 rounded-xl bg-heroic-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Users className="w-6 h-6 text-heroic-600" />
                </div>
                <AnimatedNumber value="2,500" suffix="+" />
                <span className="mt-2 text-sm text-gray-500 font-medium">
                  {t("stats.communities")}
                </span>
              </div>
            </motion.div>

            {/* Stat 2: Votes */}
            <motion.div 
              className="group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100/80 shadow-subtle transition-all duration-300 group-hover:shadow-soft group-hover:border-civic-200/50">
                <div className="w-12 h-12 rounded-xl bg-civic-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <CheckSquare className="w-6 h-6 text-civic-600" />
                </div>
                <AnimatedNumber value="125K" suffix="+" />
                <span className="mt-2 text-sm text-gray-500 font-medium">
                  {t("stats.votes")}
                </span>
              </div>
            </motion.div>

            {/* Stat 3: Projects */}
            <motion.div 
              className="group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100/80 shadow-subtle transition-all duration-300 group-hover:shadow-soft group-hover:border-heroic-200/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-heroic-100 to-heroic-200 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Sparkles className="w-6 h-6 text-heroic-700" />
                </div>
                <AnimatedNumber value="8,400" suffix="+" />
                <span className="mt-2 text-sm text-gray-500 font-medium">
                  {t("stats.projects")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
}
