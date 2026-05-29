# Florida Home Tips — Project Memory

## Brand
- **Name:** Florida Home Tips
- **Tagline:** Simple Home Tips for Florida Living
- **Mission:** Help Florida homeowners maintain, protect, and improve their homes with practical, Florida-specific advice
- **Tone:** Friendly, knowledgeable, practical. Not corporate. Not generic. Always Florida-specific.

## Color Palette
```
--color-dark-blue:   #101f41
--color-blue:        #4f6ae1
--color-azure:       #43acec
--color-white:       #ffffff
--color-cyan:        #5ce2e6
--color-vivid-cyan:  #0a969e
```

## Typography
- **Primary font:** Montserrat (headings, CTAs, nav)
- **Secondary font:** Poppins (body text, captions)
- Load both from Google Fonts

## Tech Stack
- **Framework:** Astro (latest stable)
- **Styling:** Tailwind CSS v3
- **CMS:** Decap CMS (Git-based, editor at /admin)
- **Hosting:** Cloudflare Pages
- **Domain:** floridahometips.com
- **Email marketing:** Kit (ConvertKit) — embed native forms
- **Additional Cloudflare services:** D1, R2, Workers (as needed)

## Site Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual blog post |
| `/recommended` | Tools & affiliate products |
| `/checklist` | Lead magnet / giveaway landing page |
| `/about` | About page |
| `/contact` | Contact page |
| `/privacy-policy` | Privacy policy |

## Home Page Structure (top to bottom)
1. **Hero + CTA** — headline, subheadline, checklist download CTA
2. **Trust bar** — credibility statement with icons
3. **Problem-based navigation** — "What do you need help with?" with 5 category cards
4. **Featured guides** — 4–6 best post cards
5. **Email capture** — checklist preview + Kit embed form
6. **Tools & recommendations** — 4–6 affiliate product cards
7. **Recent posts** — 3–4 latest posts only
8. **Local partners** — placeholder section for sponsors
9. **Footer** — About, Contact, Privacy Policy, social links

## Blog Post Categories
- 🦠 Mold & Humidity
- 🌪 Hurricane Prep
- 🐜 Pests
- 🏠 Exterior Maintenance
- 🔧 DIY Fixes

## Hero Copy
- **Headline:** Simple Home Tips for Florida Living
- **Subheadline:** Protect your home from humidity, mold, storms, and pests — without wasting money.
- **CTA button:** Download the Free Florida Home Maintenance Checklist

## Design Principles
- Mobile-first. Every section must look excellent on a 390px screen.
- Fast and lean. No unnecessary JavaScript. Prefer Astro's static output.
- SEO-optimized from day one: semantic HTML, meta tags, Open Graph, Article schema, FAQ schema, BreadcrumbList schema on all relevant pages.
- Accessibility: proper heading hierarchy, alt tags on all images, sufficient color contrast.
- Cards over lists everywhere — guides, posts, products all use card layouts.

## Logo
- Logo files will be provided in 4 variations (light, dark, icon-only, etc.)
- Store in `/public/images/logo/`
- Use appropriate variation based on background (light logo on dark bg, dark logo on light bg)

## Monetization Sections
- **Affiliate links:** Amazon, Home Depot, Lowe's (via `/recommended` page and inline in blog posts)
- **Email capture:** Kit native form embed — deliver checklist PDF on signup
- **Ads:** placeholder slots for future ad network integration
- **Local partnerships:** `/local-partners` placeholder page

## CMS / Content
- Blog posts stored as Markdown in `/src/content/blog/`
- Decap CMS config at `/public/admin/config.yml`
- CMS editor accessible at `/admin`
- Blog post frontmatter fields: title, description, pubDate, category, tags, image, featured (boolean), draft (boolean)

## Conventions
- Use Astro content collections for blog posts
- All Tailwind colors mapped to CSS custom properties — never hardcode hex values in components
- Component files in `/src/components/`
- Layout files in `/src/layouts/`
- Pages in `/src/pages/`
- Images in `/public/images/`
- Placeholder images: use descriptive alt text and a Florida-appropriate placeholder until real assets are provided

## Kit (ConvertKit) Form Integration
- Embed Kit form HTML in the Email Capture section on home page
- Also embed on `/checklist` landing page
- Kit form ID and embed code to be added once account is set up — use a clear `<!-- KIT FORM EMBED -->` placeholder comment in the component

## Environment / Config
- No secrets in source code
- Use `.env` for any API keys or tokens
- `.env` is gitignored

## Developer Environment
- OS: macOS (MacBook Pro)
- Node.js: v24.3.0
- Editor: VS Code with Claude Code extension
- Terminal: VS Code integrated terminal (Mac)
- Use Mac keyboard shortcuts (Cmd, not Ctrl)
- Git installed via Xcode Command Line Tools

## Build Notes
- `@astrojs/tailwind` is deprecated in Astro 6 — Tailwind is integrated via `postcss.config.mjs` with Tailwind + autoprefixer directly. Do NOT use `@astrojs/tailwind`.
- Astro 6 moved content config from `src/content/config.ts` to `src/content.config.ts` — uses Content Layer API with `glob` loader
- Decap CMS local dev: run `npx decap-server` in a separate terminal, then visit http://localhost:4321/admin