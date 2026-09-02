# miguelpereira.org

Personal site of Miguel Pereira — security engineer at Siemens ProductCERT / PSIRT, OWASP Leiria co-lead. Built with [Astro](https://astro.build).

## Stack

- **Astro 6** (static output)
- Plain CSS variables for theming (dark + light)
- Markdown-driven blog via Astro content collections (`src/content/blog`)
- Node 22+

## Pages

| Route          | Source                          | Purpose                                            |
|----------------|---------------------------------|----------------------------------------------------|
| `/`            | `src/pages/index.astro`         | Hero, background, latest posts                     |
| `/writing`     | `src/pages/writing.astro`       | Blog index                                         |
| `/blog/[slug]` | `src/pages/blog/[slug].astro`   | Individual post pages (rendered from Markdown)     |
| `/conferences` | `src/pages/conferences.astro`   | Conferences & events log (nav label: "Events")     |
| `/cv`          | `src/pages/cv.astro`            | Curriculum vitae                                   |
| `/404`         | `src/pages/404.astro`           | Not-found page                                     |

Shared layout lives in `src/layouts/Layout.astro` (head, fonts, theme toggle, pre-paint theme bootstrap). All global styles are in `src/styles/global.css`.

## Theming

A floating toggle (bottom-right on every page) flips between dark and light modes. The preference is stored in `localStorage` under `theme`, and an inline pre-paint script in `Layout.astro` sets `data-theme` on `<html>` to avoid flashing. Light mode uses a warm cream/parchment palette with a burnt-orange accent; dark mode is a deep navy with cyan accent.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

```bash
npm run build    # static output to dist/
npm run preview  # preview the production build
```

## Run with Docker

```bash
docker compose up
```

Mounts the project into a Node 22 Alpine container running `astro dev --host 0.0.0.0` on port 4321. Source edits hot-reload via the bind mount.

## Adding a blog post

Create a new Markdown file under `src/content/blog/`. The collection schema is defined in `src/content.config.ts`; the file's slug becomes the URL at `/blog/<slug>`.

```yaml
---
title: "What Does a PSIRT Actually Do?"
date: 2026-04-06
tags: ["explainer"]
description: "Shown in the listing and used as the page description."
draft: false
---
```

`title`, `date`, and `tags` are required; `description` and `draft` are optional. Drafts are excluded from the listings, the RSS feed, and the build.

### Articles published elsewhere

To list a piece hosted on another site (a collaboration, a guest post, a vendor blog), add `externalUrl` and `publisher` to the frontmatter:

```yaml
---
title: "Coordinated Disclosure in OT Environments"
date: 2026-05-14
tags: ["cvd", "collaboration"]
description: "One or two sentences for the listing."
publisher: "FIRST Blog"
externalUrl: "https://www.first.org/blog/..."
---
```

These entries sit in the same chronological list and tag filter as native posts, but link straight out to the publisher. No local page is generated at `/blog/<slug>`, so the Markdown body is never rendered — leave it empty or keep notes there. The listing shows the publisher as a source badge and a `↗` arrow, and the RSS item points at the original URL.

`src/content/blog/_external-post-template.md` is a ready-to-copy template, kept out of the build with `draft: true`.

## Adding a conference / event

Edit the `conferences` array at the top of `src/pages/conferences.astro`. Each entry takes `name`, `city`, `country`, `year`, `role`, and `upcoming`. Within a year, events display in array order.

## Deployment

Pushing to `main` builds and publishes the site to GitHub Pages at
[miguelpereira.org](https://miguelpereira.org).

`.github/workflows/deploy.yml` runs `withastro/action@v3` (pinned to Node 22, since
`package.json` requires `>=22.12.0` and the action defaults to Node 20), then
`actions/deploy-pages@v4`. No manual build or branch push is involved — `dist/` is
never committed.

One-time setup, for reference:

- **Settings → Pages → Source: GitHub Actions.** Not "Deploy from a branch" — that
  path builds with Jekyll and ignores the workflow.
- **`public/CNAME`** holds the custom domain. Astro copies `public/` verbatim into
  `dist/`, so the file survives every deploy. Without it, Pages drops the custom
  domain and serves 404s.
- **`site`** in `astro.config.mjs` must match the domain; it is what absolute URLs
  in the RSS feed are built from.
- **DNS** (Namecheap → Advanced DNS): four `A` records on `@` pointing at
  `185.199.108.153`–`185.199.111.153`, plus a `CNAME` on `www` to
  `<user>.github.io.`. An apex domain cannot use a `CNAME`, hence the literal IPs.
- **HTTPS** is a free Let's Encrypt certificate GitHub issues and renews
  automatically once the domain check passes. Enable *Enforce HTTPS* afterwards so
  plain `http://` visitors are redirected.

Anything under `public/` ships as-is, including `resume.pdf` — the CV page's
button links to it directly. Before replacing that file, check it carries no
personal contact details (email, phone) and no revealing document metadata: it is
published at `/resume.pdf` the moment it is pushed. The `@media print` block in
`global.css` still styles the page for anyone who prints it with Ctrl+P.
