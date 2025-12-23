"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe, ChevronDown, BookOpen, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { locales, localeNames, type Locale } from "@/i18n/config";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

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

  // Helper function to create localized links
  const localizedHref = (path: string) => `/${locale}${path}`;

  // Navigation links - anchor links for home page sections
  const anchorLinks = [
    { href: "#features", label: t("features") },
    { href: "#pricing", label: t("pricing") },
    { href: "#how-it-works", label: t("howItWorks") },
  ];

  // Page links
  const pageLinks = [
    { href: "/guides", label: t("guides"), icon: BookOpen },
    { href: "/about", label: t("about"), icon: Info },
  ];

  // Handle anchor link click - smooth scroll on homepage, navigate on other pages
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomepage) {
      // On homepage, smooth scroll to section
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
    // On other pages, let the link navigate normally (it will go to homepage with hash)
    setIsMobileMenuOpen(false);
  };

  // Get the full href for anchor links
  const getAnchorHref = (hash: string) => {
    if (isHomepage) {
      return hash; // Just the hash on homepage
    }
    return `/${locale}/${hash}`; // Full path on other pages
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-subtle py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container size="lg">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="Eroica"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Anchor links (scroll on homepage, navigate on other pages) */}
            {anchorLinks.map((link) => (
              <Link
                key={link.href}
                href={getAnchorHref(link.href)}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="px-4 py-2 text-gray-600 hover:text-civic-500 font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}

            {/* Separator */}
            <div className="w-px h-5 bg-gray-200 mx-2" />

            {/* Page links */}
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={localizedHref(link.href)}
                className="px-4 py-2 text-gray-600 hover:text-civic-500 font-medium transition-colors rounded-lg hover:bg-gray-50 inline-flex items-center gap-1.5"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 text-gray-600 hover:text-civic-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{localeNames[locale]}</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", isLangMenuOpen && "rotate-180")} />
              </button>

              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0"
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-medium border border-gray-100 py-2 z-50">
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={`/${loc}`}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          loc === locale
                            ? "text-heroic-600 bg-heroic-50 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        )}
                        onClick={() => setIsLangMenuOpen(false)}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <Button size="sm" variant="primary" shimmer>
              {t("getStarted")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-large">
            <div className="p-4 space-y-2">
              {/* Anchor links */}
              {anchorLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getAnchorHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="block py-3 px-4 text-gray-700 hover:text-civic-500 hover:bg-gray-50 font-medium rounded-lg"
                >
                  {link.label}
                </Link>
              ))}

              <hr className="border-gray-100 my-2" />

              {/* Page links */}
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(link.href)}
                  className="flex items-center gap-2 py-3 px-4 text-gray-700 hover:text-civic-500 hover:bg-gray-50 font-medium rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}

              <hr className="border-gray-100 my-2" />

              {/* Language Options */}
              <div className="flex gap-2 px-2">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    className={cn(
                      "flex-1 text-center py-2.5 rounded-lg text-sm font-medium transition-colors",
                      loc === locale
                        ? "bg-civic-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {localeNames[loc]}
                  </Link>
                ))}
              </div>

              <div className="pt-2 px-2">
                <Button className="w-full" variant="heroic">
                  {t("getStarted")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

