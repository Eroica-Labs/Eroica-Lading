import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const BASE_URL = "https://eroica.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/guides",
    "/privacy",
    "/terms",
    "/cookies",
    "/join",
    "/support",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}

