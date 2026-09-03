# QuotaBench

Marketing site for QuotaBench — fractional GTM & sales leadership for B2B SaaS. Built with [Astro](https://astro.build) for static output, fast pages, and strong SEO/AEO defaults.

The original design (from Claude Design) lives in [`design/`](./design) for reference — chat transcript, HTML/CSS prototypes, and handoff notes.

## Stack

- **Astro** (static output) — content-driven marketing site with zero client JS by default.
- **Content collections** for the blog (`src/content/blog/*.md`).
- **Netlify Forms** for the inquiry form — no backend to run or maintain.
- **@astrojs/sitemap** + hand-written `robots.txt` / `llms.txt` / `rss.xml` for SEO and AEO (answer-engine) discoverability.

## Project structure

```text
src/
├── components/       # Header, Footer, Hero, sections, blog cards, contact form
├── content/blog/      # Blog posts (markdown)
├── content.config.ts  # Blog collection schema
├── data/site.ts        # Site copy: services, process steps, fit criteria, founder bio
├── layouts/BaseLayout.astro  # <head>, meta/OG/Twitter tags, JSON-LD
├── lib/format.ts       # Date formatting helper
└── pages/
    ├── index.astro      # Home
    ├── thank-you.astro  # Netlify Forms redirect target (noindex)
    ├── blog/index.astro # Blog index
    ├── blog/[slug].astro
    ├── rss.xml.ts
    └── llms.txt.ts
```

## Commands

| Command           | Action                                       |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`        |
| `npm run preview` | Preview the production build locally          |

## Editing content

- **Site copy** (services, process, fit criteria, founder bio): `src/data/site.ts`.
- **Accent color / brand tokens**: `src/styles/global.css` (`--color-accent` and friends).
- **Blog posts**: add a new markdown file to `src/content/blog/` with frontmatter:

  ```md
  ---
  title: Post title
  description: One-sentence summary used for previews and SEO.
  category: GTM
  pubDate: 2026-07-01
  ---

  Body content in markdown.
  ```

  The post is automatically picked up by the blog index, the homepage preview, the RSS feed, and `llms.txt` — no other wiring needed.

## Deploying to Netlify

1. Push this repo to GitHub and connect it to a new Netlify site.
2. Build command: `npm run build`, publish directory: `dist` (already set in `netlify.toml`).
3. **Enable Netlify Forms**: no extra setup needed beyond the first deploy — Netlify scans the built HTML for the `data-netlify="true"` form (`src/components/ContactForm.astro`) and starts capturing submissions automatically. Check **Site configuration → Forms** for submissions and to set up email notifications.
4. Point `quotabench.com` at the Netlify site (Site configuration → Domain management) once the domain is registered.
5. Update `site.url` in `astro.config.mjs` and `src/data/site.ts` if the final domain differs from `quotabench.com`.

## Notes / follow-ups

- No custom Open Graph image is included yet (design is intentionally typographic, no photos) — consider adding a simple branded `og-image.png` before launch for nicer social link previews.
- Blog posts 2–6 are placeholder full drafts written to match the brand voice; swap in the founder's real writing whenever ready — the frontmatter/URL structure won't need to change.
