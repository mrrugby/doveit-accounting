# DoveIT Accounting - Technical Documentation

## Overview

DoveIT Accounting is a premium, minimalist corporate website for a professional accounting and financial consulting firm based in Kenya. The website is designed to communicate trust, financial expertise, and high-end professionalism.

**Live Project URL:** https://lovable.dev/projects/72bc8822-27f2-4a37-a78e-d5a2da6bbc00

---

## Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^18.3.1 | UI library for building component-based interfaces |
| **TypeScript** | - | Type-safe JavaScript for better developer experience |
| **Vite** | - | Next-generation frontend build tool |
| **Tailwind CSS** | - | Utility-first CSS framework |
| **React Router DOM** | ^6.30.1 | Client-side routing |

### UI Component Library

| Package | Purpose |
|---------|---------|
| **shadcn/ui** | Pre-built, accessible UI components |
| **Radix UI** | Headless UI primitives (accordion, dialog, dropdown, etc.) |
| **Lucide React** | ^0.462.0 | Beautiful, consistent icon library |
| **class-variance-authority** | ^0.7.1 | Component variant management |
| **clsx** | ^2.1.1 | Conditional className utility |
| **tailwind-merge** | ^2.6.0 | Merge Tailwind classes intelligently |

### Form & Validation

| Package | Purpose |
|---------|---------|
| **react-hook-form** | ^7.61.1 | Performant form handling |
| **@hookform/resolvers** | ^3.10.0 | Form validation resolvers |
| **zod** | ^3.25.76 | Schema validation library |

### Data & State Management

| Package | Purpose |
|---------|---------|
| **@tanstack/react-query** | ^5.83.0 | Server state management |

### UI Utilities

| Package | Purpose |
|---------|---------|
| **sonner** | ^1.7.4 | Toast notifications |
| **vaul** | ^0.9.9 | Drawer component |
| **embla-carousel-react** | ^8.6.0 | Carousel/slider component |
| **recharts** | ^2.15.4 | Charting library |
| **date-fns** | ^3.6.0 | Date utility library |
| **react-day-picker** | ^8.10.1 | Date picker component |

---

## Project Structure

```
src/
├── components/
│   ├── layout/           # Page layout components
│   │   ├── Header.tsx    # Sticky navigation header
│   │   ├── Footer.tsx    # Site footer with links
│   │   └── Layout.tsx    # Main layout wrapper
│   │
│   ├── sections/         # Page section components
│   │   ├── HeroSection.tsx       # Homepage hero
│   │   ├── AboutPreview.tsx      # About company preview
│   │   ├── ServicesOverview.tsx  # Services grid
│   │   ├── Testimonials.tsx      # Client testimonials
│   │   └── CTABanner.tsx         # Call-to-action banner
│   │
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── card.tsx
│       ├── toast.tsx
│       └── ... (60+ components)
│
├── pages/                # Route pages
│   ├── Index.tsx         # Homepage (/)
│   ├── About.tsx         # About page (/about)
│   ├── Services.tsx      # Services page (/services)
│   ├── Contact.tsx       # Contact page (/contact)
│   └── NotFound.tsx      # 404 page
│
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx    # Mobile detection hook
│   └── use-toast.ts      # Toast notification hook
│
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
│
├── App.tsx               # Main app with routing
├── main.tsx              # Application entry point
└── index.css             # Global styles & design system
```

---

## Design System

### Color Palette

The design uses a sophisticated, corporate color scheme defined in `src/index.css`:

#### Light Mode
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | 0 0% 100% | Page background (white) |
| `--foreground` | 222 47% 11% | Primary text (dark navy) |
| `--primary` | 222 47% 11% | Primary brand color |
| `--secondary` | 220 14% 96% | Secondary backgrounds |
| `--accent` | 43 74% 41% | Gold accent color |
| `--muted` | 220 14% 96% | Muted backgrounds |
| `--border` | 220 13% 91% | Border color |

#### Dark Mode
Full dark mode support with inverted color tokens.

### Typography

**Font Family:** Manrope (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800
- Applied via `font-sans` and `font-heading` classes

```css
font-family: ["Manrope", "system-ui", "sans-serif"]
```

### Custom CSS Utilities

| Class | Description |
|-------|-------------|
| `.premium-card` | Card with subtle shadow and hover effect |
| `.hero-gradient` | Gradient background for hero sections |
| `.accent-underline` | Animated underline on hover |
| `.animate-fade-up` | Fade up entrance animation |
| `.animate-fade-in` | Fade in animation |
| `.animate-slide-in` | Slide in from left animation |

### Custom Shadows

```css
--card-shadow: 0 4px 6px -1px hsl(222 47% 11% / 0.05)
--card-shadow-hover: 0 20px 25px -5px hsl(222 47% 11% / 0.08)
--premium-shadow: 0 25px 50px -12px hsl(222 47% 11% / 0.15)
```

---

## Component Documentation

### Layout Components

#### `<Header />`
Sticky navigation header with:
- Logo with brand mark
- Desktop navigation links
- Mobile hamburger menu
- Scroll-aware background blur effect
- "Request a Quote" CTA button

#### `<Footer />`
Site footer containing:
- Brand logo and description
- Company links (About, Services, Contact)
- Services quick links
- Contact information (email, phone, location)
- Copyright and legal links

#### `<Layout />`
Wrapper component that includes Header, main content area, and Footer.

### Section Components

#### `<HeroSection />`
Homepage hero featuring:
- Trust badge ("Trusted by 500+ businesses")
- Main headline with accent color
- Descriptive subtext
- Dual CTA buttons (primary + outline)
- Trust indicators (15+ years, 500+ clients, 99% satisfaction)
- Decorative gradient element

#### `<AboutPreview />`
Brief company introduction with:
- Section title and description
- Three highlight cards (Expertise, Turnaround, Client-Focus)
- Link to full About page

#### `<ServicesOverview />`
Services grid displaying:
- 6 service cards in responsive grid
- Icon, title, and description for each
- Hover effects on cards
- CTA to Services page

#### `<Testimonials />`
Client testimonials section:
- 3 testimonial cards
- Quote icon decoration
- Client avatar (initials), name, and role

#### `<CTABanner />`
Call-to-action section:
- Dark background with decorative elements
- Compelling headline
- Two CTA buttons

### Page Components

#### `Index.tsx` (Homepage)
Assembles all homepage sections in order:
1. HeroSection
2. AboutPreview
3. ServicesOverview
4. Testimonials
5. CTABanner

#### `About.tsx`
About page including:
- Hero section with company introduction
- Mission & Vision cards
- Core Values grid (Integrity, Excellence, Transparency, Innovation)
- Why Choose Us section with checkmarks
- Statistics cards (Years, Clients, Retention, Support)
- Team member profile (Shaka Senaji)
- Final CTA section

#### `Services.tsx`
Services page featuring:
- Hero section
- 6 detailed service cards with:
  - Icon and title
  - Pricing (e.g., "Starting at KES 15,000/month")
  - Description
  - Feature list with checkmarks
  - Request Quote button
- Process section (4 steps)
- Final CTA section

#### `Contact.tsx`
Contact page with:
- Hero section
- Contact form (Name, Email, Phone, Message)
- Submit and WhatsApp buttons
- Contact info cards (Email, Phone, Location, Hours)
- Why Contact Us box
- Map placeholder

---

## Button Variants

Custom button variants defined in `src/components/ui/button.tsx`:

| Variant | Description |
|---------|-------------|
| `default` | Primary dark button with shadow |
| `destructive` | Red/error state button |
| `outline` | Border-only button |
| `secondary` | Light gray button |
| `ghost` | Transparent with hover |
| `link` | Text link style |
| `accent` | Gold accent button |
| `hero` | Large primary with lift effect |
| `hero-outline` | Large outline for hero sections |

| Size | Description |
|------|-------------|
| `default` | h-10, px-5 |
| `sm` | h-9, px-4 |
| `lg` | h-12, px-8 |
| `xl` | h-14, px-10 |
| `icon` | h-10, w-10 |

---

## Routing

Routes defined in `src/App.tsx`:

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Index` | Homepage |
| `/about` | `About` | About Us page |
| `/services` | `Services` | Services listing |
| `/contact` | `Contact` | Contact form |
| `*` | `NotFound` | 404 error page |

---

## SEO Configuration

Meta tags configured in `index.html`:

```html
<title>DoveIT Accounting | Professional Financial Services</title>
<meta name="description" content="DoveIT Accounting offers professional accounting, bookkeeping, tax preparation, and financial consulting services..." />
<meta name="keywords" content="accounting, bookkeeping, tax preparation, financial consulting, Kenya, Nairobi, business advisory" />
<link rel="canonical" href="https://doveitaccounting.com" />
```

Open Graph and Twitter Card meta tags included for social sharing.

---

## Development

### Prerequisites
- Node.js (v18+)
- npm or bun

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs on `http://localhost:8080`

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `tsconfig.json` | TypeScript configuration |
| `components.json` | shadcn/ui configuration |
| `postcss.config.js` | PostCSS configuration |
| `eslint.config.js` | ESLint rules |

---

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Mobile hamburger menu
- Responsive grids and typography

### Animations
- Fade up/in animations on page load
- Hover effects on cards and buttons
- Smooth transitions throughout
- Scroll-aware header

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states

### Performance
- Optimized bundle with Vite
- Lazy loading ready
- Minimal dependencies
- Efficient Tailwind purging

---

## Support

For questions or support, contact:
- **Email:** info@doveitaccounting.com
- **Phone:** +254 700 000 000
- **Location:** Nairobi, Kenya

---

