# AGENTS.md

This file is the **single source of truth** for agent-facing project guidance. It follows the open [agents.md](https://agents.md/) standard so the same instructions are used by Claude Code, Cursor, Aider, Codex, Gemini CLI, and any other compliant agent. `CLAUDE.md` is a symlink to this file — edit `AGENTS.md` only.

## Project Overview

**USTW Website** is a Next.js 14 (App Router) application focused on US-Taiwan political relations, tracking US Congressional activities, bills, representatives, and related news/podcast content.

**Tech stack:**

- **Next.js 14** (App Router) + **TypeScript**
- **Material-UI v6** for components and design system
- **Apollo Client** for GraphQL data management
- **Auth0** for authentication
- **i18next** for internationalization (English / Traditional Chinese)
- **Zustand** for client-side state management
- **Highcharts** + **MUI X-Charts** for data visualization

## Setup Commands

```bash
yarn                      # Install dependencies (Yarn is the only supported package manager)
yarn i18n                 # Fetch translation files from CMS
yarn graphql-codegen      # Generate GraphQL TypeScript types
```

Copy `.env.sample` to `.env.local` and fill in CMS, GraphQL, Auth0, Algolia, and GA4/GTM credentials before running the dev server.

## Development Workflow

```bash
yarn dev                  # Start development server (http://localhost:3000)
yarn build                # Production build (standalone output)
yarn start                # Start production server
yarn analyze              # Bundle size analysis
```

**Node version:** v20 (pinned in `.nvmrc`; no `engines` field in `package.json`).

## Testing Instructions

> ⚠️ **There is no real unit test suite yet.** `yarn test` is a placeholder (`echo "Mock Test"`). Do not rely on it as a quality gate.

The actual quality gates are:

```bash
yarn lint                 # ESLint
yarn lint:fix             # ESLint + Prettier auto-fix
yarn check-types          # tsc --noEmit
```

A Husky `pre-commit` hook runs `lint-staged` on staged files, so most formatting/lint issues are caught before commit.

## Code Style

- **ESLint:** Standard Style with `comma-dangle` allowed. Config: `.eslintrc.json` (classic, not flat).
- **Prettier:** Config at `.prettierrc.js`, integrated with ESLint.
- **Indentation:** 2 spaces, never tabs.
- **TypeScript everywhere** — prefer generated GraphQL types over hand-written ones.

## Architecture

### Modular structure

Features live under `src/modules/<feature>/` and follow this convention:

```
src/modules/<feature>/
├── business/      # Domain logic and data models
├── components/    # UI components
├── hooks/         # Custom React hooks
├── graphql/       # GraphQL queries/mutations (consumed by codegen)
└── api/           # API utilities
```

Key modules: `Article`, `Bill`, `People`, `Podcast`, `Search`, `Account`.

### Routing

- **App Router** with language prefix: `src/app/[lang]/...`
- **Type-safe routes:** `src/common/lib/router/routes.ts`
- **i18n routing:** automatic language detection + redirect via `src/middleware.ts`

### Internationalization

- Languages: `en-US`, `zh-TW`. Translation files come from the CMS via `yarn i18n`.
- **Server-side:** `getTranslationServer` (default export) from `src/common/lib/i18n/hooks/getTranslationServer.ts` — usage: `const { t } = await getTranslationServer(lang, namespace)`
- **Client-side:** `useTranslationClient` (default export) from `src/common/lib/i18n/hooks/useTranslationClient.ts` — usage: `const { t } = useTranslationClient(namespace)`

### GraphQL workflow

1. Write queries/mutations inside the relevant module's `graphql/` directory.
2. Run `yarn graphql-codegen` to regenerate typed hooks (config: `codegen.ts`).
3. Use the generated hooks/types — do not hand-roll types that codegen produces.
4. Schema lives at `src/common/lib/graphql/schema.graphql` and can be refreshed from the GraphQL Playground SDL export.

### Data visualization

- Highcharts for advanced political-data charts; MUI X-Charts for simpler MUI-integrated charts.
- The ideology chart requires a data-prep step: `yarn prepare-ideology` after updating `public/data/ideology.txt`.

### Analytics

- Google Analytics 4 via `@next/third-parties/google`.
- GDPR consent gating through `googleAnalyticsUpdateConsent`.
- Search events tracked via `googleAnalyticsSearchEvent`.

## Build and Deployment

- Production build is **standalone Next.js** output (`next.config.mjs`).
- CI workflow: `.github/workflows/ustw_cms_frontend_dev.yml`.

## Pull Request Guidelines

- **Branches:**
  - `main` — production
  - `develop` — integration branch; feature branches **squash-merge into `develop`**
- **Commit messages:** AngularJS Git Commit Message Conventions (`feat:`, `fix:`, `refactor:`, `docs:`, etc.).
- **Required before pushing:** `yarn lint` and `yarn check-types` must pass.

## Additional Notes

- Auth0 will not work locally without the correct env vars — see `.env.sample`.
- After regenerating GraphQL types or pulling new translations, restart `yarn dev` so Next.js picks up the changes.
- See `handoff.md` for deeper architectural background that did not fit here.
