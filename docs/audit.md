Project Technical Audit — 2025-09-12

    Branch: letsFixIt (based on commit f69df9b with bootstrap commit eae4677)
    Scope: Frontend (Next.js 15, React 19, Tailwind v4), Studio (Sanity v3), repository hygiene, security advisories, and DX baseline (lint, typecheck).

Executive Summary

    Frontend type safety: Failing with 70+ TS errors focused in components/blocks/index.tsx due to a mismatch between the Block discriminated union and the component mapping (componentMap). This breaks CI-quality gates for type safety.
    Lint baseline: ESLint configuration was re-initialized by next lint (interactive prompt). Lint did not complete on first run; config requires normalization to a non-interactive CI setup.
    Studio: Typecheck passes after dependency install; previously missing plugin type declarations are now resolved.
    Security posture: One critical advisory in transitive form-data (studio → sanity), several moderate advisories affecting next@15.3.5 and vite used by Sanity’s tooling. Upgrades recommended.

Findings

1. Frontend Type Errors (Blocking)

   Command: pnpm -C frontend typecheck
   Result: 72 errors, representative samples:
   component map assigns implementations like Compare2, Gallery*, Timeline* to keys typed from Block["_type"], but the value type expected is React.ComponentType<Extract<Block, { \_type: K }>>. Several components accept narrower/shape-incompatible props (e.g., require columns, title, etc.) while the mapped type for the key (from generated sanity.types.ts) expects a different subset or structure.
   Errors also show usage sites accessing block.\_type and block.\_key where the type is {} in some union branches, indicating insufficient type refinement or the union includes non-block shapes.
   Risk: Build breaks in strict CI. Developer velocity impacted; runtime inconsistencies possible if projection/types drift.
   Likely cause: Divergence between schema, generated sanity.types.ts, and the Block union used for rendering.

2. Lint Baseline (Action Required)

   Command: pnpm -C frontend lint
   Result: Next.js triggered an interactive ESLint scaffolding flow and created .eslintrc.json. This indicates the project is not wired for non-interactive lint in this branch.
   Risk: CI cannot reliably run lint; inconsistent rule set from previous flat config vs new JSON config.
   Cause: Missing ESLint config expected by next lint in this branch snapshot.

3. Studio Typecheck (Pass)

   Command: pnpm -C studio typecheck
   Result: OK. Prior missing types for @sanity/assist, @sanity/document-internationalization, and sanity-plugin-internationalized-array were resolved after install.
   Risk: Low.

4. Dependency Security Audit

   Command: pnpm audit --prod
   Summary:
   Critical: form-data@4.0.3 (transitive via sanity) — CVE-2025-7783. Recommendation: upgrade to form-data@>=4.0.4. Requires upstream sanity resolution; track release notes or pin override.
   Moderate (Next.js): next@15.3.5 impacted by CVE-2025-57752 (cache key confusion in Image Optimization), CVE-2025-55173 (content injection), CVE-2025-57822 (middleware SSRF). Recommendation: upgrade to >=15.4.7.
   Low (Vite): vite@6.3.5 in Sanity toolchain — path traversal/public serving issues. Recommendation: upgrade to 6.3.6.
   Moderate (PrismJS): prismjs<1.30.0 within @sanity/ui chain. Recommendation: ensure >=1.30.0 via upstream or resolutions.
   Risk: Medium for production if affected features are active (image optimization, middleware). Development risk low-to-medium (Vite issues in dev server exposure scenarios).

Recommendations (Prioritized)

    Restore Type Safety in Block Rendering (High)

    Align the Block discriminated union and component prop types:
        Ensure each key in componentMap maps to React.ComponentType<Extract<Block, { _type: K }>>.
        If components expect richer props (columns, title, etc.), update the generated types by adjusting GROQ projections and re-running typegen so Extract<...> matches component props.
        Add a runtime type guard to filter only block-shaped objects before mapping to prevent {} union leakage.
    Acceptance: pnpm -C frontend typecheck passes with zero errors.

    Normalize ESLint for CI (High)

    Replace interactive .eslintrc.json with a committed config consistent with the project standards (flat or next/core-web-vitals), and add "lint:ci": "next lint --max-warnings=0 --no-cache" to scripts.
    Acceptance: pnpm -C frontend lint exits 0 locally and in CI.

    Security Upgrades (High)

    Frontend: bump next to >=15.4.7, review images config and middleware usage.
    Studio toolchain: ensure vite >=6.3.6 via Sanity dependency updates.
    Track form-data update via sanity releases or add a temporary pnpm.overrides block to force form-data@4.0.4 if compatible.
    Acceptance: pnpm audit --prod shows no criticals; moderates addressed for next and vite.

    DX Guardrails (Medium)

    Reinstate pre-commit hooks carefully (husky + lint-staged). Ensure lint-staged is installed and configured to avoid blocking commits unexpectedly.
    Add a CI workflow to run: install, frontend typecheck, frontend lint, optional tests.

    Documentation (Medium)

    Update docs/project-setup.md to reflect current next and Sanity versions after upgrades.
    Add a short “Block Rendering Contract” note: schema → projection → generated types → component props.

Suggested Next Steps

    Option A: Tight “fix branch” scope in letsFixIt:
        Pin overrides for vulnerabilities.
        Restore ESLint config and script.
        Regenerate types (pnpm typegen) and reconcile components/blocks/index.tsx typing.
    Option B: Split into two PRs:
        PR1: Security + tooling (Next/Vite bumps, lint config, overrides).
        PR2: Type fixes for block rendering.

Commands (for reference)

    Typegen and typecheck:

pnpm -C studio typegen
pnpm -C frontend typecheck

    Lint (post-config fix):

pnpm -C frontend lint

    Audit:

pnpm audit --prod
