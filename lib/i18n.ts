import { getRequestConfig } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";

// Helper function to enable static rendering
export function setRequestLocale(locale: string) {
  // This is a marker function that next-intl uses for static rendering
  // The actual implementation is handled by next-intl internally
}

// Validate locale
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
