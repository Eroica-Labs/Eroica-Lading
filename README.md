# Eroica Landing Page

A modern, professional landing page for Eroica - the democratic community platform for civic participation, project voting, and transparent microeconomy management.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.x
- **Animations**: Framer Motion
- **i18n**: next-intl (English & Spanish)
- **Icons**: Lucide React

## Features

- Fully responsive design (mobile-first)
- Bilingual support (EN/ES) with automatic locale detection
- SEO optimized with meta tags and structured data
- Smooth scroll animations
- Interactive pricing toggle (monthly/annual)
- Accessible navigation with keyboard support

## Project Structure

```
landing/
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── layout.tsx      # Root layout with fonts and providers
│   │   └── page.tsx        # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections (Hero, Features, Pricing, etc.)
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── animations.ts       # Animation variants
│   └── utils.ts            # Utility functions
├── messages/
│   ├── en.json             # English translations
│   └── es.json             # Spanish translations
├── public/
│   └── images/             # Static images
├── i18n.ts                 # i18n configuration
├── middleware.ts           # Locale detection middleware
└── tailwind.config.ts      # Tailwind configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Navigate to landing directory
cd landing

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Deployment

This landing page can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  navy: { ... },    // Primary navy shades
  teal: { ... },    // Accent teal shades
  gold: { ... },    // Premium gold accents
}
```

### Content

Edit the translation files in `messages/`:

- `en.json` - English content
- `es.json` - Spanish content

### Images

Replace placeholder images in `public/images/`:

- `og-image.png` - Open Graph image (1200x630)
- Add logo and other brand assets

## Page Sections

1. **Hero** - Main headline, CTAs, app mockup
2. **Trusted By** - Partner/community logos
3. **Features** - 6 core features grid
4. **How It Works** - 3-step process
5. **Pricing** - 4 subscription tiers
6. **Audiences** - For Leaders & Organizations
7. **Testimonials** - User quotes
8. **FAQ** - Common questions
9. **CTA** - Email capture & app download

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

Proprietary - All rights reserved.

## Version

**v1.0.0** - Initial Release
