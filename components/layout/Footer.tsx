"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Twitter, Linkedin, Github, Instagram, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { locales, localeNames, type Locale } from "@/i18n/config";

// Define link type for footer sections
interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  description?: string;
  links: FooterLink[];
}

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale() as Locale;
  const currentYear = new Date().getFullYear();

  // Helper function to create localized links
  const localizedHref = (path: string) => {
    // Don't modify anchor links, external links, or mailto
    if (path.startsWith("#") || path.startsWith("http") || path.startsWith("mailto:")) {
      return path;
    }
    return `/${locale}${path}`;
  };

  // Footer link sections organized by Eroica ecosystem
  const sections: FooterSection[] = [
    {
      title: t("labs.title"),
      description: t("labs.description"),
      links: [
        { label: t("labs.about"), href: "/about" },
        { label: t("labs.careers"), href: "/join" },
        { label: t("labs.contact"), href: "mailto:hello@eroica.io", external: true },
      ],
    },
    {
      title: t("platform.title"),
      description: t("platform.description"),
      links: [
        { label: t("platform.features"), href: "/#features" },
        { label: t("platform.pricing"), href: "/#pricing" },
        { label: t("platform.support"), href: "/support" },
        { label: t("platform.guides"), href: "/guides" },
      ],
    },
    {
      title: t("foundation.title"),
      description: t("foundation.description"),
      links: [
        { label: t("foundation.mission"), href: "/about#foundation" },
        { label: t("foundation.education"), href: "/guides" },
      ],
    },
    {
      title: t("legal.title"),
      links: [
        { label: t("legal.privacy"), href: "/privacy" },
        { label: t("legal.terms"), href: "/terms" },
        { label: t("legal.cookies"), href: "/cookies" },
      ],
    },
  ];

  // Social links
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/eroica", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/eroica", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/eroica", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/eroica", label: "Instagram" },
  ];

  return (
    <footer className="bg-civic-500 text-gray-300">
      {/* Main footer content */}
      <Container size="lg" className="py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href={`/${locale}`} className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.svg"
                alt="Eroica"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-2">
              {t("tagline")}
            </p>
            <p className="text-gray-500 text-xs">
              {t("entity")}
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-1">{section.title}</h4>
              {section.description && (
                <p className="text-gray-500 text-xs mb-3">{section.description}</p>
              )}
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                    <Link
                        href={localizedHref(link.href)}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container size="lg" className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              {t("copyright", { year: currentYear })}
            </p>

            {/* Language switcher */}
            <div className="flex items-center gap-2">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    loc === locale
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {localeNames[loc]}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
