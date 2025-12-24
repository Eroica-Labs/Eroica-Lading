"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, Sparkles, BookOpen, Building2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { locales, localeNames, type Locale } from "@/i18n/config";

// Animation variants for navbar elements
const navItemVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const dropdownVariants = {
  initial: { opacity: 0, y: 8, scale: 0.96 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  },
  exit: { 
    opacity: 0, 
    y: 8, 
    scale: 0.96,
    transition: { duration: 0.15 }
  },
};

const mobileMenuVariants = {
  initial: { opacity: 0, height: 0 },
  animate: { 
    opacity: 1, 
    height: "auto",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.2 }
  },
};

const mobileItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Check if we're on the homepage
  const isHomepage = pathname === `/${locale}` || pathname === `/${locale}/`;

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Helper function to create localized links
  const localizedHref = (path: string) => `/${locale}${path}`;

  // Navigation links - primary product sections
  const primaryLinks = [
    { href: "#features", label: t("features"), isAnchor: true },
    { href: "#pricing", label: t("pricing"), isAnchor: true },
    { href: "#how-it-works", label: t("howItWorks"), isAnchor: true },
  ];

  // Secondary links - pages
  const secondaryLinks = [
    { href: "/guides", label: t("guides"), icon: BookOpen },
    { href: "/about", label: t("about"), icon: Building2 },
  ];

  // Handle anchor link click
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomepage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Get the full href for anchor links
  const getAnchorHref = (hash: string) => {
    if (isHomepage) {
      return hash;
    }
    return `/${locale}/${hash}`;
  };

  // Check if link is active
  const isActiveLink = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === localizedHref(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_20px_40px_-20px_rgba(0,51,102,0.1)] py-2"
          : "bg-transparent py-4"
      )}
    >
      <Container size="lg">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href={`/${locale}`} 
            className="flex items-center group relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.svg"
                alt="Eroica"
                className={cn(
                  "w-auto transition-all duration-300",
                  isScrolled ? "h-10" : "h-12"
                )}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {/* Primary Links - Product sections */}
            <div className="flex items-center bg-gray-50/80 rounded-full px-1.5 py-1.5 backdrop-blur-sm border border-gray-100/50">
              {primaryLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={getAnchorHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors rounded-full"
                >
                  {/* Animated background on hover */}
                  <AnimatePresence>
                    {hoveredLink === link.href && (
                      <motion.span
                        layoutId="navHover"
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Elegant Separator */}
            <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-5" />

            {/* Secondary Links - Pages */}
            <div className="flex items-center gap-1">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(link.href)}
                  className={cn(
                    "group flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActiveLink(link.href)
                      ? "text-civic-600 bg-civic-50"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <link.icon className={cn(
                    "w-4 h-4 transition-transform duration-200 group-hover:scale-110",
                    isActiveLink(link.href) ? "text-civic-500" : ""
                  )} />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Language Switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher - Premium style */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
                  isLangMenuOpen 
                    ? "bg-gray-100 text-gray-900" 
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                )}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{localeNames[locale]}</span>
                <motion.div
                  animate={{ rotate: isLangMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-40"
                      onClick={() => setIsLangMenuOpen(false)}
                    />
                    <motion.div
                      variants={dropdownVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 overflow-hidden"
                    >
                      <div className="px-3 py-2 border-b border-gray-50">
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Language
                        </p>
                      </div>
                      {locales.map((loc, index) => (
                        <motion.div
                          key={loc}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={`/${loc}`}
                            className={cn(
                              "flex items-center justify-between px-3 py-2.5 text-sm transition-colors",
                              loc === locale
                                ? "text-civic-600 bg-civic-50 font-medium"
                                : "text-gray-700 hover:bg-gray-50"
                            )}
                            onClick={() => setIsLangMenuOpen(false)}
                          >
                            <span>{localeNames[loc]}</span>
                            {loc === locale && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-1.5 h-1.5 rounded-full bg-civic-500"
                              />
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Premium style */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="sm" 
                variant="primary"
                className="group relative overflow-hidden shadow-lg shadow-civic-500/20 hover:shadow-xl hover:shadow-civic-500/30 transition-shadow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {t("getStarted")}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "lg:hidden p-2.5 rounded-xl transition-colors",
              isMobileMenuOpen 
                ? "bg-gray-100 text-gray-900" 
                : "text-gray-600 hover:bg-gray-50"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu - Premium design */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-1">
                {/* Primary Links */}
                <div className="space-y-1">
                  <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Product
                  </p>
                  {primaryLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={mobileItemVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={getAnchorHref(link.href)}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="block py-3 px-4 text-gray-700 hover:text-civic-600 hover:bg-civic-50 font-medium rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Secondary Links */}
                <div className="pt-3 space-y-1">
                  <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Company
                  </p>
                  {secondaryLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={mobileItemVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ delay: (primaryLinks.length + index) * 0.05 }}
                    >
                      <Link
                        href={localizedHref(link.href)}
                        className={cn(
                          "flex items-center gap-3 py-3 px-4 font-medium rounded-xl transition-colors",
                          isActiveLink(link.href)
                            ? "text-civic-600 bg-civic-50"
                            : "text-gray-700 hover:text-civic-600 hover:bg-civic-50"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <link.icon className="w-5 h-5" />
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-4 mx-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* Language Switcher */}
                <motion.div
                  variants={mobileItemVariants}
                  initial="initial"
                  animate="animate"
                  className="px-4"
                >
                  <p className="py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Language
                  </p>
                  <div className="flex gap-2 mt-1">
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={`/${loc}`}
                        className={cn(
                          "flex-1 text-center py-2.5 rounded-xl text-sm font-medium transition-all",
                          loc === locale
                            ? "bg-civic-500 text-white shadow-lg shadow-civic-500/30"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  variants={mobileItemVariants}
                  initial="initial"
                  animate="animate"
                  className="pt-4 px-4"
                >
                  <Button className="w-full justify-center gap-2 shadow-lg shadow-heroic-500/30" variant="heroic">
                    <Sparkles className="w-4 h-4" />
                    {t("getStarted")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
