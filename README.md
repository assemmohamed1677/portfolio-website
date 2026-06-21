# Assem Mohamed Portfolio

Premium full stack developer portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, React Icons, Lucide React, EmailJS, and React Helmet Async.

## Features

- Dark premium glassmorphism interface with blue and cyan accents.
- Animated hero, typewriter roles, terminal intro, scroll progress, back-to-top button, hover states, and section reveal animations.
- Full portfolio sections: about, skills, services, featured projects, tech stack, GitHub, achievements, education, experience, contact, footer, and custom 404 page.
- GitHub API integration for repository and follower stats with graceful fallback.
- EmailJS-ready contact form.
- SEO meta tags, Open Graph, Twitter cards, structured data, favicon, manifest, robots.txt, and sitemap.xml.
- Command palette with `Ctrl+K`.
- Hidden easter egg: type `hello` anywhere on the page.

## Getting Started

```bash
npm install
npm run dev
```

## EmailJS Setup

Create a `.env` file and add:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form still renders without these values and explains what is missing when submitted.

## Architecture

```text
src/
  components/     reusable layout, UI, SEO, command palette, scroll tools
  data/           portfolio profile, skills, projects, services, icons
  hooks/          GitHub API, typewriter, counters, keyboard sequence
  pages/          routed pages
  sections/       homepage portfolio sections
  styles/         Tailwind entry and global utilities
  types/          shared TypeScript types
```

## Production

```bash
npm run build
npm run preview
```

Deploy the generated `dist` folder to Vercel, Netlify, GitHub Pages, or any static host. Update `public/sitemap.xml`, `public/robots.txt`, and the canonical URLs in `src/components/SEO.tsx` when the final domain is known.
