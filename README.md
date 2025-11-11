# FortuneBox Landing Page

Modern, responsive landing page for FortuneBox mystery box platform. Built with Astro and Tailwind CSS v4.

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
```

## Tech Stack

- **Astro 5.15.4** - Static site generator with zero JS by default
- **Tailwind CSS 4.1.17** - Utility-first CSS framework with custom theme
- **TypeScript** - Type-safe development

## Features

- **Static Site Generation**: Fast, SEO-friendly pages with minimal JavaScript
- **Responsive Design**: Mobile-first approach (6→3→2 column grid breakpoints)
- **Dark Theme**: FortuneBox brand colors (Red #FF3851, Dark #121212)
- **Modal System**: Sign In, Sign Up, and Contact popups with backdrop blur
- **Shimmer CTA**: Animated gradient button effect
- **24 Mystery Boxes**: Real box data with images and hover effects
- **Optimized Assets**: AVIF images for performance

## Project Structure

```
fortune-box-landing-page/
├── public/
│   ├── boxes/              # 24 mystery box images (AVIF format)
│   ├── hero-bg.avif        # Hero section background
│   ├── fortunebox-logo.svg # Brand logo
│   └── favicon.*           # Site icons
├── src/
│   ├── components/
│   │   ├── Header.astro         # Fixed header with logo + auth buttons
│   │   ├── Hero.astro           # Hero section with messaging
│   │   ├── CTAButton.astro      # Shimmer animation button
│   │   ├── BoxesGrid.astro      # Responsive grid of mystery boxes
│   │   ├── ContactForm.astro    # Inline contact form
│   │   ├── ContactPopup.astro   # Modal contact form
│   │   ├── AuthModal.astro      # Combined auth modal component
│   │   ├── SignInPopup.astro    # Sign in modal
│   │   ├── SignUpPopup.astro    # Sign up modal
│   │   └── Footer.astro         # Red footer with copyright
│   ├── data/
│   │   └── boxes.ts             # Mystery box data (TypeScript)
│   ├── layouts/
│   │   └── Layout.astro         # Base layout with SEO meta tags
│   ├── pages/
│   │   └── index.astro          # Homepage (composes all components)
│   ├── scripts/
│   │   └── modal.ts             # Modal interaction handlers
│   └── styles/
│       └── global.css           # Tailwind + custom theme tokens
├── astro.config.mjs            # Astro config (site URL, build settings)
├── vercel.json                 # Vercel deployment config (iad1 region)
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies & scripts
```

## Architecture

### Component Breakdown

- **Layout.astro**: Base HTML structure with SEO meta tags (Open Graph, Twitter cards, canonical URLs)
- **Header.astro**: Fixed navigation with logo and auth button triggers
- **Hero.astro**: Welcome section with background image and messaging
- **BoxesGrid.astro**: Displays 24 mystery boxes from `src/data/boxes.ts`
- **Modals**: Three modal types (Contact, Sign In, Sign Up) managed by `modal.ts`
- **Footer.astro**: Red background footer with copyright

### Styling System

Uses Tailwind CSS v4 with custom theme tokens in `src/styles/global.css`:

```css
@theme {
  --color-fortune-red: #FF3851;      /* Primary brand color */
  --color-fortune-dark: #121212;     /* Dark background */
  --color-fortune-card: #191919;     /* Card backgrounds */
  --color-fortune-border: #252525;   /* Border color */
  --color-fortune-text-secondary: #7A7A7A;
}
```

The `.shimmer` animation is defined globally for the CTA button gradient effect.

### Client-Side Interactivity

Modal interactions are centralized in `src/scripts/modal.ts`:
- Opens Contact popup when CTA button is clicked
- Opens Sign In/Sign Up modals from header buttons
- Closes via close button, outside click, or Escape key
- Body scroll locking when modal is open

The script is imported once in `index.astro` and executes on page load.

### Responsive Design

- **Mobile breakpoint**: 782px (matches SlotBox.io template)
- **Desktop**: 6-column grid for boxes
- **Tablet**: 3-column grid
- **Mobile**: 2-column grid
- Uses Tailwind's responsive utilities (`md:`, `lg:`) throughout

## Deployment

### Vercel (Recommended)

**Method 1: GitHub Integration**
1. Push this repo to GitHub
2. Import to Vercel at [vercel.com](https://vercel.com)
3. Vercel auto-detects Astro and deploys
4. Production URL will be generated automatically

**Method 2: Vercel CLI**
```bash
npm i -g vercel
vercel --prod
```

**Configuration**: Pre-configured in `vercel.json` with `iad1` region.

### Other Platforms

This is a static site - the build output in `dist/` can be deployed to:
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting provider

## Environment

- **Site URL**: Configured in `astro.config.mjs` as `https://fortunebox.com`
- **Build**: HTML compression enabled, auto-inlined stylesheets
- **SSG**: Static site generation (no server-side rendering)

## Customization

### Update Mystery Boxes

Edit `src/data/boxes.ts` to add/remove boxes:

```typescript
export const boxes = [
  {
    name: 'Around The World',
    category: 'Travel',
    value: '$1,299.99',
    image: '/boxes/around-the-world.avif'
  },
  // Add more boxes...
];
```

Images should be placed in `public/boxes/` and preferably in AVIF format for performance.

### Modify Theme Colors

Update `src/styles/global.css`:

```css
@theme {
  --color-fortune-red: #FF3851;      /* Change primary accent */
  --color-fortune-dark: #121212;     /* Change background */
  /* ... other colors */
}
```

### Update Form Actions

- Contact forms currently have placeholder endpoints
- Update `action` attributes in `ContactForm.astro` and `ContactPopup.astro`
- Update Sign In/Sign Up form actions in respective modal components

### External Links

Currently, all links point to `https://fortunebox.com/`. Update in:
- `src/components/Header.astro` (logo link)
- `src/components/BoxesGrid.astro` (if you want boxes to be clickable)

## Development Notes

- No external dependencies for box images (all local in `public/boxes/`)
- Contact form actions point to placeholder endpoints (update before production)
- The site uses SSG (Static Site Generation) - no server-side rendering
- OG image path is `/og-image.png` - add this file to `public/` if needed
- Modal script executes once on page load (no hydration needed)

## Performance

- **Build time**: ~400ms (fast!)
- **JavaScript**: Minimal - only modal interactions (~2KB)
- **Images**: AVIF format for optimal compression
- **CSS**: Purged in production (Tailwind removes unused styles)
- **HTML**: Compressed in production build

## License

All rights reserved © 2025 FortuneBox
