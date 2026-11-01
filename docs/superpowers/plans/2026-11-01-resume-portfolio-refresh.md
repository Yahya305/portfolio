# Resume Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update portfolio messaging, capabilities, experience, and project presentation to accurately reflect the current resume.

**Architecture:** Keep the current Next.js component tree and Tailwind styling. Convert project content from rendered JSX cards to typed data, then render a single complete project collection through the existing carousel.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Embla Carousel.

**Spec:** `docs/superpowers/specs/2026-11-01-resume-portfolio-refresh-design.md`

## Global Constraints

- Do not push, deploy, or modify the resume PDF.
- Use resume-supported claims and metrics for Follow, Membership Sales Coach, and Shipfacet; source existing public-project details from their linked repositories or live sites.
- Do not add a test framework; this repository has none and the changes are static content/presentation.
- Verify with `npx tsc --noEmit` and `git diff --check`; do not run a production build unless explicitly requested.

## Review Focus

- Projects without a URL or screenshot must render correctly as ordinary project cards.
- Every new resume-project metric must match the resume exactly.
- The public project group must retain functional external links.
- Desktop, tablet, and mobile carousel grouping must not render missing cards across the complete collection.
- The existing site style must remain intact while labels and content become more senior-focused.

### Task 1: Align personal, experience, and capability messaging

**Files:**
- Modify: `src/app/about-me/components/MyInfo.tsx`
- Modify: `src/data/About.ts`
- Modify: `src/data/Services.tsx`
- Modify: `src/app/home/components/MyServices.tsx`
- Modify: `src/app/home/components/MySkills.tsx`

- [ ] Update About and experience copy with the resume's senior engineering, client-consulting, cloud, AI, and performance themes.
- [ ] Replace generic technology cards with six capability-led service cards.
- [ ] Update skills/progress labels to reflect present focus areas.
- [ ] Verify copy against the resume and run `npx tsc --noEmit`.

### Task 2: Introduce grouped, structured project data

**Files:**
- Modify: `src/data/Projects.tsx`
- Modify: `src/components/ui/CardProjects.tsx`
- Modify: `src/app/home/components/Portfolio.tsx`
- Modify: `src/app/home/components/ResponsiveCarousel.tsx`

- [ ] Define typed project data with optional link/image fields, tags, and highlights.
- [ ] Render the three resume projects first, followed by every previous project.
- [ ] Update project-card UI for projects without a link or image and outcome highlights.
- [ ] Preserve the `My Complete Projects` section label.
- [ ] Run `npx tsc --noEmit` and `git diff --check`.

### Task 3: Review and handoff

**Files:**
- Review all modified portfolio files.

- [ ] Inspect the final diff for resume alignment, unsupported claims, and accidental removal of public projects.
- [ ] Run `npx tsc --noEmit` and `git diff --check`.
- [ ] Report the local branch name and verification status; do not push.
