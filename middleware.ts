import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  // Always use prefix (e.g. /en/about) to avoid RSC payload issues at root
  // and ensure explicit language selection
  localePrefix: "always",
});

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - Static files
  // - _next internal paths
  // - favicon/icon files
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
