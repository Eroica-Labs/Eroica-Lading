// Structured data (JSON-LD) for SEO - Reflecting Eroica's brand identity
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eroica",
    alternateName: "The Democratic Symphony",
    description:
      "Eroica empowers communities with the instruments of genuine democracy — transparent governance, collective decision-making, and civic participation platforms that transform how people collaborate.",
    url: "https://eroica.app",
    logo: "https://eroica.app/images/logo.svg",
    slogan: "The Democratic Symphony",
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/eroica",
      "https://linkedin.com/company/eroica",
      "https://github.com/eroica",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@eroica.app",
      availableLanguage: ["English", "Spanish"],
    },
    brand: {
      "@type": "Brand",
      name: "Eroica",
      slogan: "The Democratic Symphony",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Eroica",
    operatingSystem: "iOS, Android",
    applicationCategory: "SocialNetworkingApplication",
    applicationSubCategory: "Civic Participation Platform",
    description:
      "Like a symphony, democracy is the harmonious collaboration of many distinct voices. Eroica gives communities the instruments to create something extraordinary together — democratic voting, transparent governance, and a participatory economy.",
    featureList: [
      "Democratic voting with quorum thresholds",
      "Community architecture and governance",
      "Eroica Coins participatory economy",
      "Project proposals and collective funding",
      "Radical transparency in all transactions",
      "Real-time community notifications",
    ],
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Citizen",
        description: "For emerging voices — 1 community, 3 projects, core features",
      },
      {
        "@type": "Offer",
        price: "9",
        priceCurrency: "USD",
        name: "Organizer",
        description: "For growing movements — 3 communities, 15 projects, analytics",
      },
      {
        "@type": "Offer",
        price: "29",
        priceCurrency: "USD",
        name: "Leader",
        description: "For established institutions — 10 communities, 50 projects, API access",
      },
      {
        "@type": "Offer",
        price: "99",
        priceCurrency: "USD",
        name: "Institution",
        description: "For transformative impact — unlimited scale, white-label, strategic consultation",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What exactly is Eroica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eroica is a civic participation platform designed for communities that believe in collective decision-making. It combines democratic voting, project funding, and transparent governance into one unified system. Whether you're a neighborhood association, nonprofit, cooperative, or any group making decisions together — Eroica provides the infrastructure for genuine democracy.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Eroica Coins economy work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eroica Coins are an internal currency that makes participation tangible. Vote on a proposal: earn 5 EC. Submit your own proposal: earn 25 EC. Invite a new member: earn 15 EC. Every new user starts with 100 EC. You can donate your coins to fund projects you believe in — creating a direct line between civic engagement and community impact.",
        },
      },
      {
        "@type": "Question",
        name: "How is community data protected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You have complete control. Public communities are discoverable and open to all. Private communities exist only for invited members — invisible to search, accessible only by invitation. All data is encrypted in transit and at rest. We never sell your information. Your community's governance is yours alone.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I access Eroica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eroica is available as a native mobile application for both iOS and Android. A full web platform for desktop access is in active development. All data synchronizes seamlessly across devices — participate wherever you are, however you prefer.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need to cancel my subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cancel anytime with no penalties. Your access continues through the end of your billing period, then you transition to the free tier with all core features intact. Your community data remains yours — export it whenever you wish. We believe in earning your continued trust, not locking you in.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
