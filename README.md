# Astro Template

This project is a template for building websites with Astro.

## Structure

- **root**:
    - `astro.config.mjs` — Astro configuration: forces CSS to be extracted into dedicated files
      and disables script inlining so that assets are always emitted as separate files.
    - `tsconfig.json` — TypeScript configuration for the project.
    - `eslint.config.mjs` — ESLint configuration.
    - `prettier.config.mjs` — Prettier configuration.
- **src/** — application source code:
    - `assets/` — static assets shared across pages, such as `style.css`.
    - `pages/` — Astro pages; each `.astro` file under this folder becomes a route
      (e.g. `index.astro` is served at `/`).
    - `scripts/` — client-side TypeScript scripts imported by pages (e.g. `site-status.ts`).

## Useful Commands

Use npm to run the scripts declared in `package.json`.

- `npm run dev` : starts the local development server
- `npm run build` : builds the production site
- `npm run preview` : previews the production build locally
- `npm run check` : runs Astro's diagnostics checks
- `npm run lint` : lints the project with ESLint
- `npm run format` : formats the project with Prettier
- `npm run format:check` : checks formatting without writing changes