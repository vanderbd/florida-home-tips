# Florida Home Tips

> Simple Home Tips for Florida Living — [floridahometips.com](https://floridahometips.com)

Content and community website for Florida homeowners. Built with **Astro 6** + **Tailwind CSS v3**, deployed to **Cloudflare Pages**.

---

## Local Development

**Prerequisites:** Node.js v24+, npm v11+

```bash
npm install          # Install dependencies
npm run dev          # Dev server → http://localhost:4321
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run check        # TypeScript type-check
```

---

## Cloudflare Pages — First-Time Setup

### 1. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/florida-home-tips.git
git push -u origin main
```

### 2. Connect repo in Cloudflare Dashboard

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Authorize GitHub and select the `florida-home-tips` repository

### 3. Build settings

| Setting | Value |
|---------|-------|
| Framework preset | Astro (auto-detected) |
| Build command | `npm run build` |
| Build output directory | `dist` |

### 4. Environment variables

Set these under **Settings → Environment variables** (Production **and** Preview):

| Variable | Value |
|----------|-------|
| `NODE_VERSION` | `24` |

Add these once your accounts are set up:

| Variable | When needed |
|----------|-------------|
| `KIT_API_KEY` | After Kit (ConvertKit) account is created |
| `KIT_FORM_ID` | After Kit form is created |

### 5. Deploy

Click **Save and Deploy**. The first build will take ~60 seconds.

---

## Automatic Deployments

Every push to `main` triggers a new build and live deployment. Pull requests automatically generate preview URLs.

---

## Manual Deployment

To deploy without a git push (e.g. from a local build):

```bash
npm run build
npx wrangler pages deploy dist --project-name florida-home-tips
```

---

## Custom Domain

1. Cloudflare Pages dashboard → your project → **Custom domains**
2. Add `floridahometips.com` and `www.floridahometips.com`
3. If the domain is already on Cloudflare DNS: one-click verification
4. If not: follow Cloudflare's instructions to add the provided CNAME records

---

## Content Editing

### Direct (always works)

1. Create or edit a `.md` file in `src/content/blog/`
2. Follow the frontmatter schema defined in `src/content.config.ts`
3. Push to `main` — Cloudflare Pages auto-deploys within ~60 seconds

### Decap CMS editor (`/admin`)

The visual editor is available at `/admin` but requires OAuth authentication to be configured first. Until then, use direct file editing above.

**To activate the CMS:** See the auth setup instructions in `public/admin/config.yml`.

For local CMS testing (no auth required):

```bash
npx decap-server    # Run in a separate terminal
npm run dev         # Then visit http://localhost:4321/admin
```

---

## Adding Blog Post Images

1. Add images to `public/images/blog/` (JPG or WebP, 1200×630 px recommended)
2. Reference in post frontmatter: `image: /images/blog/your-filename.jpg`
3. **Default OG/social image:** add `public/images/og-default.jpg` (1200×630 px) — used as the fallback `og:image` for pages without a specific image

---

## Future: Cloudflare D1 / R2 / Workers

The site is currently pure static output. When server-side features are needed:

1. Install: `npm install @astrojs/cloudflare`
2. Update `astro.config.mjs`: add the adapter and change `output` to `'hybrid'`
3. Add D1/R2 bindings to `wrangler.toml`

See the comment block at the bottom of `wrangler.toml` for the relevant docs link.

---

## Stack

| Layer | Tool | Version |
|-------|------|---------|
| Framework | Astro | 6.x |
| Styling | Tailwind CSS | 3.x |
| Blog prose | @tailwindcss/typography | 0.5.x |
| Sitemap | @astrojs/sitemap | 3.x |
| CMS | Decap CMS | 3.x |
| Email | Kit (ConvertKit) | — |
| Hosting | Cloudflare Pages | — |
