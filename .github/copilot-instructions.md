### Repo overview

This is a Nuxt 4 (Nuxt 4.x) frontend site scaffolded from the Nuxt UI starter. The app is client-first (ssr: false) and configured to output a static site for GitHub Pages (Nitro preset: github-pages). Key folders:

- `app/` - main application code (components, pages, views, assets, utils).
- `public/` - static public images and assets referenced at runtime (see `/public/image/...`).
- `nuxt.config.ts` - framework configuration (modules, css, nitro, vite HMR tweaks).
- `package.json` - scripts and dependencies (use pnpm).

### Big picture architecture & patterns

- Framework: Nuxt 4 with `@nuxt/ui`, `@nuxt/image`, and Vue 3 `<script setup>` SFCs.
- Rendering: SSR is disabled globally (`ssr: false`) but the root route `/` has routeRules enabling SSR. The site is intended to be built for static hosting (GitHub Pages) via Nitro preset.
- Layouts: pages import view components directly (see `app/pages/index.vue`), and there is a shared `NuxtLayout` wrapper used across pages.
- Component organization: UI components live under `app/components/` and larger page sections under `app/views/` (e.g., `LandingScreen.vue`, `Partners.vue`). Small utilities live in `app/utils/` (see `navigation.ts`, `redirect.ts`).
- Client behavior: Many interactions (mobile menu, sticky header) are implemented with composition API and local component state (e.g., `AppHeader.vue` uses `ref`, `watch`, `onMounted`). Use these patterns when adding interactivity.

### Developer workflows (how to run, build, test)

- Install: `pnpm install` (pnpm is specified in package.json). Do not use npm/yarn unless necessary.
- Dev server: `pnpm dev` — starts Vite + Nuxt dev server (default port 3000).
- Build for production: `pnpm build` then `pnpm preview` to preview the built app.
- Generate/static: `pnpm generate` (Nuxt generate) — used for static export. Repo also has `deploy` script using `push-dir` to publish `dist` to `gh-pages`.
- Linting/Types: `pnpm lint`, `pnpm lintfix`, `pnpm typecheck`. The repo uses `@nuxt/eslint` and `vue-tsc`/`nuxt typecheck` for types.

### Project-specific conventions

- Single source of truth for nav and content lists: `app/utils/navigation.ts` exports `navItems`, `itservices`, `eduservices` arrays used by header and views.
- Redirect helpers: `app/utils/redirect.ts` contains window-open helpers for social and chat links. Use these helpers for external links rather than inlining window.open.
- Assets: image paths are referenced from `/image/...` under `public/` (e.g., logo paths in `AppHeader.vue`), not `~/assets` for public runtime images.
- Styles: Tailwind-like utility classes are used in templates. Global CSS is in `assets/css/main.css` (imported in `nuxt.config.ts`). Follow the existing utility-first style.
- TypeScript: SFCs often use `<script setup lang="ts">` (see `index.vue`). Add types where relevant but prefer the repo's lightweight typing (no heavy runtime guards).

### Integration points & external dependencies

- Uses `@nuxt/image` with `ipx` provider — image optimization is configured in `nuxt.config.ts`.
- Social/chat integrations are simple external links (WhatsApp API links, Instagram, YouTube) via `app/utils/redirect.ts`.
- Icons come from `@iconify/vue` and `@iconify-json` packages — components use `<Icon name="..." />` patterns.

### Editing guidance for AI agents (what to change and how)

- When adding a new page, create the file in `app/pages/` and import shared components from `app/components/` or `app/views/`.
- When adding site-wide config, prefer `nuxt.config.ts` for modules and `app/app.config.ts` for UI theme variables.
- Prefer `NuxtLink` for internal navigation and `redirect.ts` helpers for external links.
- Keep client-only logic in components (composition API). Avoid adding server-side code; the project is client-first and set up for static hosting.

### Examples to reference

- Header interactivity: `app/components/header/AppHeader.vue` — shows mobile menu toggle, sticky header logic, and reading `navItems`.
- Nav source: `app/utils/navigation.ts` — canonical nav and services data.
- Redirect helpers: `app/utils/redirect.ts` — use as the single place for social/chat link logic.

### Quick checks before submitting PRs

- Run `pnpm lint` and `pnpm typecheck` locally. The repo enforces ESLint via `@nuxt/eslint`.
- Confirm image references point to `public/image/...` and exist (missing images break visual sections).
- For interactive changes, test both desktop and mobile layouts (mobile menu lives behind a v-if in `AppHeader.vue`).

If any section needs more detail (CI commands, env files, or routing edge-cases), tell me which area you want expanded and I'll iterate.
