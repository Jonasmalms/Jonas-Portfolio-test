# Jonas Malm — Portfolio

A React portfolio with folder-based case images. Each project has its own image folder and a dedicated detail page with a gallery.

Built with **React**, **Vite**, **Tailwind CSS v4**, and **react-router-dom**. Design tokens live in `src/index.css`.

---

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal. The home page lists all cases; click one to view its gallery at `/cases/{slug}`.

---

## Adding a new case

### 1. Create an image folder

Because Vite uses `root: 'src'`, static assets go in **`src/public/`** (served at the site root).

Create a folder named after your case slug (lowercase, hyphens):

```
src/public/cases/my-new-case/
  cover.jpg          # thumbnail for the overview grid
  01-screenshot.png
  02-mobile.png
  03-detail.png
```

**Naming tips:**

| File | Purpose |
|------|---------|
| `cover.jpg` or `cover.webp` | Card thumbnail on the home page |
| `01-`, `02-`, … | Gallery order on the detail page |
| WebP or optimized JPG/PNG | Aim for under ~300 KB per image |

Replace the example `.svg` placeholders with your real screenshots when ready.

### 2. Register the case in data

Open **`src/data/cases.js`** and add a new object:

```js
{
  slug: 'my-new-case',                    // must match folder name + URL
  title: 'My New Case',
  summary: 'One-line hook for the card',
  description: 'Full story shown on the detail page',
  tags: ['UX', 'React'],
  role: 'Your role on the project',
  outcome: 'Optional result or metric',
  coverImage: '/cases/my-new-case/cover.jpg',
  images: [
    { src: '/cases/my-new-case/01-screenshot.png', alt: 'Description', caption: 'Optional caption' },
    { src: '/cases/my-new-case/02-mobile.png', alt: 'Mobile view' },
  ],
  links: { live: 'https://...', github: 'https://...' },  // leave empty strings if N/A
  featured: false,    // true = wider card on the home grid
  order: 3,           // sort position on home page
},
```

### 3. Preview

```bash
npm run dev
```

Visit `/cases/my-new-case` to check the gallery, then verify the card appears on the home page.

### 4. Commit

Commit the new folder and the updated `cases.js` together.

---

## Project structure

```
src/
├── public/
│   └── cases/
│       └── {slug}/              # drop images here
├── data/
│   └── cases.js                 # case metadata — edit when adding projects
├── pages/
│   ├── Home.jsx                 # overview: hero, case grid, skills, contact
│   └── CaseDetail.jsx           # per-case page with image gallery
├── components/
│   ├── Button/
│   ├── Navbar/
│   ├── CaseCard/
│   ├── ImageGallery/            # grid + click-to-enlarge lightbox
│   └── TagList/
├── App.jsx                      # routes
├── index.jsx                    # BrowserRouter entry
├── index.css                    # design tokens
└── index.html
```

---

## Routes

| Route | Page |
|-------|------|
| `/` | Home — case overview |
| `/cases/:slug` | Case detail with image gallery |

---

## Design tokens

Visual design is controlled from **`src/index.css`**. Tokens follow three layers: primitive → semantic → component. Change a primitive and every dependent token updates site-wide.

Portfolio-specific tokens:

- `--color-accent` — links, hover highlights
- `--color-surface-elevated` — card and gallery backgrounds
- `--font-display` — hero and case titles

---

## Deploy

Build for production:

```bash
npm run build
```

Output goes to `src/dist/`. Deploy to Vercel, Netlify, or any static host — images in `src/public/` are included automatically.

---

## Legacy pricing demo

The original pricing card demo (`src/pages/Pricing.jsx`) is kept for reference but is not routed. The portfolio replaces it as the main app.
