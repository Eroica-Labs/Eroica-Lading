"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Building2, Landmark, Users2, TreePine, Home } from "lucide-react";

export default function TrustedBy() {
  const t = useTranslations("trustedBy");

  // Elegant community representations with icons
  const communities = [
    { 
      name: "Community First", 
      icon: Users2,
      gradient: "from-heroic-100 to-heroic-200",
      iconColor: "text-heroic-600",
      delay: 0
    },
    { 
      name: "Urban Alliance", 
      icon: Building2,
      gradient: "from-civic-100 to-civic-200",
      iconColor: "text-civic-600",
      delay: 0.1
    },
    { 
      name: "Civic Tech", 
      icon: Landmark,
      gradient: "from-heroic-50 to-heroic-150",
      iconColor: "text-heroic-700",
      delay: 0.2
    },
    { 
      name: "Green Cities", 
      icon: TreePine,
      gradient: "from-civic-50 to-civic-150",
      iconColor: "text-civic-700",
      delay: 0.3
    },
    { 
      name: "Neighbor Hub", 
      icon: Home,
      gradient: "from-heroic-100 to-heroic-200",
      iconColor: "text-heroic-600",
      delay: 0.4
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconFloatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Elegant title with decorative lines */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden sm:block h-px w-20 bg-gradient-to-r from-transparent via-heroic-300 to-heroic-400 origin-right" 
            />
            <p className="text-sm text-gray-500 uppercase tracking-[0.25em] font-medium">
              {t("title")}
            </p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden sm:block h-px w-20 bg-gradient-to-l from-transparent via-heroic-300 to-heroic-400 origin-left" 
            />
          </div>

          {/* Large animated icons grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
          >
            {communities.map((community, index) => {
              const Icon = community.icon;
              return (
                <motion.div
                  key={community.name}
                  variants={itemVariants}
                  className="group flex flex-col items-center gap-4 cursor-default"
                >
                  {/* Large animated icon container */}
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconFloatVariants}
                    style={{ animationDelay: `${index * 0.5}s` }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                    className={`
                      relative w-20 h-20 md:w-24 md:h-24 rounded-2xl 
                      bg-gradient-to-br ${community.gradient}
                      flex items-center justify-center
                      shadow-lg shadow-gray-200/50
                      group-hover:shadow-xl group-hover:shadow-heroic-200/30
                      transition-shadow duration-300
                    `}
                  >
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-2xl bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon */}
                    <Icon className={`relative w-10 h-10 md:w-12 md:h-12 ${community.iconColor} transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Name with fade effect */}
                  <motion.span 
                    className="text-sm md:text-base font-medium tracking-wide text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                  >
                    {community.name}
                  </motion.span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Elegant decorative dots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="w-2 h-2 rounded-full bg-heroic-400" 
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="w-1.5 h-1.5 rounded-full bg-gray-300" 
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                className="w-2 h-2 rounded-full bg-civic-400" 
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
