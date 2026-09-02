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

## Adding a conference / event

Edit the `conferences` array at the top of `src/pages/conferences.astro`. Each entry takes `name`, `city`, `country`, `year`, `role`, and `upcoming`. Within a year, events display in array order.
