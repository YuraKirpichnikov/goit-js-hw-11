# Contact Sheet — Image Search (GOIT JS HW-11)

A small image-search app built with vanilla JavaScript and Vite. Type a
word, hit **Search**, and browse the results in a lightbox gallery
powered by the Pixabay API.

## Features

- Search form that sends a request to the [Pixabay API](https://pixabay.com/api/docs/)
- Loading indicator shown while a request is in flight
- Responsive image gallery with likes / views / comments / downloads
- Full-size image preview via [SimpleLightbox](https://simplelightboxjs.com/)
- Toast notifications (empty query, no results, request errors) via
  [iziToast](https://izitoast.marcelodolza.com/)

## Project structure

```
GOIT-JS-HW-11
├── .github/workflows/deploy.yml   # auto-deploy to GitHub Pages
├── assets/                        # design reference / mockup assets
├── src/
│   ├── css/styles.css
│   ├── img/
│   └── js/
│       ├── pixabay-api.js         # getImagesByQuery(query)
│       └── render-functions.js    # createGallery, clearGallery, showLoader, hideLoader
├── index.html
├── main.js                        # form submit handler / app entry point
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package.json
└── vite.config.js
```

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Get a free API key from [pixabay.com/api/docs](https://pixabay.com/api/docs/)
   and paste it into `API_KEY` in `src/js/pixabay-api.js`.

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Format the code before committing:

   ```bash
   npx prettier --write .
   ```

## Building & deploying to GitHub Pages

This repo is wired for GitHub Pages in two ways — pick whichever you
prefer:

**A. GitHub Actions (recommended)**
Push to `main`. The workflow in `.github/workflows/deploy.yml` builds
the project with Vite and publishes `dist/` to Pages automatically.
Enable it once under **Settings → Pages → Source → GitHub Actions**.

**B. Manual deploy with `gh-pages`**

```bash
npm run deploy
```

This runs `vite build` and pushes the `dist/` folder to the `gh-pages`
branch using the `gh-pages` package.

> `vite.config.js` sets `base: '/goit-js-hw-11/'` so asset URLs resolve
> correctly under `https://<username>.github.io/goit-js-hw-11/`. Update
> that value if you rename the repository.

## Loading indicator

The loader is a small set of pulsing dots defined in `src/css/styles.css`
(`.loader`, `.loader-dot`) rather than a third-party package — it's
toggled purely by adding/removing the `is-hidden` class from
`showLoader()` / `hideLoader()` in `render-functions.js`. Swap in any
other CSS spinner you like by editing that block; the show/hide contract
stays the same.

## Notes

- Search input is cleared **after** a request completes, not before, so
  a failed search can be retried without retyping it.
- The gallery is cleared before each new search to avoid mixing results.
- `SimpleLightbox.refresh()` is called every time new cards are added so
  newly inserted images are clickable immediately.
