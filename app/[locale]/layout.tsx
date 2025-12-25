import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { OrganizationSchema, SoftwareApplicationSchema, FAQSchema } from "./structured-data";
import "../globals.css";

// Load Inter font (body text) - Brand Book secondary typeface
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Load Playfair Display (headings) - Brand Book primary serif typeface
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Dynamic metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Import messages for metadata
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const meta = messages.metadata as { title: string; description: string };

  return {
    metadataBase: new URL("https://eroica.io"),
    title: {
      default: meta.title,
      template: "%s | Eroica",
    },
    description: meta.description,
    keywords: [
      "community platform",
      "democratic voting",
      "civic participation",
      "community management",
      "project funding",
      "transparent governance",
      "digital democracy",
      "participatory economy",
      "Eroica Labs",
      "Eroica Foundation",
    ],
    authors: [{ name: "Eroica Labs" }],
    creator: "Eroica Labs",
    publisher: "Eroica Labs",
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: "https://eroica.io",
      siteName: "Eroica",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Eroica - Democracy for Your Community",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <OrganizationSchema />
        <SoftwareApplicationSchema />
        <FAQSchema />
      </head>
      <body className="min-h-screen bg-warm-white font-sans text-gray-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
