# Professional Engineering Audit Report

Date: 2025-09-13
Repository: tryseven (branch: main)

## Executive Summary
- Build health: Frontend and Studio build clean. No prerender errors.
- Lint/types/tests: All pass; strict TypeScript enforced (no `any`).
- Security: 4 moderate vulnerabilities detected (Next.js image optimization and PrismJS). Recommend upgrades noted below.
- Deprecations: next-sanity `defineLive` root import fixed; no remaining deprecation warnings in build.
- Runtime safety: Hardened Portable Text image rendering and OG image route to avoid null asset refs.

## Scope
- Workspace: pnpm monorepo (`frontend`, `studio`)
- Audit areas: dependencies & vulnerabilities, lint/typecheck/tests, build outputs, deprecated APIs, risky patterns.

## Findings

### 1) Vulnerabilities (pnpm audit --prod)
- prismjs < 1.30.0: DOM clobbering
  - Path: studio > @sanity/orderable-document-list > @sanity/ui > react-refractor > refractor > prismjs
  - Action: Update transitive chain via upgrading Studio deps (see Recommendations).
- next 15.3.5: multiple advisories affecting image optimization routes
  - Patched: >= 15.4.7
  - Action: Upgrade `next` in `frontend`.

### 2) Outdated deps (pnpm -w -r outdated)
- `@types/node` 24.0.10 → 24.3.3 (dev)
- `lint-staged` 15.5.2 → 16.1.6 (dev; note Node >= 18)
- `p-limit` 5.0.0 → 7.1.1 (dev)

### 3) Lint, Types, Tests
- ESLint: Flat config, import/order, prettier, @typescript-eslint, @next/eslint-plugin-next. Zero errors.
- TypeScript: 5.8.3 — `tsc --noEmit` passes.
- Tests: Vitest v2 (happy-dom). All tests pass.

### 4) Build Outputs
- Frontend: next build successful. Static routes generated. No warnings.
- Sanity Studio: `sanity build` successful.

### 5) Deprecated APIs & Risky Patterns
- next-sanity `defineLive` import updated to `next-sanity/live`.
- Portable Text: Image block now guards null assets and uses `urlFor` fallback.
- OG Route: Hardened logo rendering to avoid direct `.asset.url` access; `urlFor` fallback used.
- Audit of `.asset.url` direct usage: none left in source that are unsafe; OG route patched.

## Recommendations

- Frontend
  - Upgrade Next.js to address advisories:
    - `next` ^15.4.7 (minimum), ideally latest 15.x.
    - Verify `next.config.mjs` for any breaking changes after upgrade.
  - Continue using `eslint.ignoreDuringBuilds=true` but keep prebuild lint.

- Studio
  - Update `@sanity` packages to pull `prismjs` >= 1.30.0 transitively.
    - Run `pnpm -F studio up @sanity/*` and rebuild; re-run audit.

- Tooling
  - Bump dev deps:
    - `@types/node` → 24.3.3
    - `lint-staged` → 16.x (confirm Node engine and config schema)
    - `p-limit` → 7.x if used directly

## Verifications Run
- Commands:
```
pnpm -w audit --prod
pnpm -w -r outdated
pnpm -w -r lint
pnpm -F frontend test:run
pnpm -F frontend build
pnpm -F studio build
```

## Actions Taken

- Frontend
  - Upgraded `next` to `^15.5.3` and `@next/third-parties` to `^15.5.3`.
  - Rebuilt frontend; build succeeded with no warnings or prerender errors.

- Studio
  - Retained stable Studio package versions but enforced `pnpm` override: `prismjs@^1.30.0` to patch DOM clobbering advisory transitively.
  - Rebuilt Studio; build succeeded.

- Tooling
  - Bumped dev deps: `@types/node` → `^24.3.3`, `lint-staged` → `^16.1.6`, `p-limit` → `^7.1.1`.

## Post-upgrade Security Status

```
pnpm -w audit --prod
```

- Result: No known vulnerabilities found.

## Appendix: Route Inventory (Frontend)
- Static: `/`, `/_not-found`, `/contact`, `robots.txt`, `sitemap.xml`
- SSG: `/[slug]` (e.g., `/products`, `/blog`, `/index`, ...)
- Blog SSG: `/blog/[slug]` (`discover-benefits-hulled-millet-lar-group`, `welcome`)

