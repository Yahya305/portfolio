# Resume-Aligned Portfolio Refresh

## Intent

Bring the portfolio in line with the current resume so that it represents Yahya as a full stack software engineer and technical consultant with 4+ years of experience in client delivery, backend architecture, cloud platforms, performance engineering, and applied AI.

## Goals

- Replace generalist, junior-leaning copy with outcome- and capability-led messaging.
- Add Follow, Membership Sales Coach, and Shipfacet to the beginning of one complete project collection.
- Retain every existing public project after the three newly added projects.
- Support projects without a public URL or screenshot without presenting them as confidential.
- Keep the existing Next.js, Tailwind, carousel, and card patterns.

## Non-Goals

- Do not modify the resume PDF.
- Do not publish, push, or create a pull request.
- Do not invent URLs or screenshots that have not been provided.
- Do not add a test framework for this static content and presentation update.

## Approaches Considered

1. Update only existing paragraphs and project descriptions. This is the smallest change, but it does not add the resume projects.
2. Replace every project with the three resume projects. This produces a focused portfolio, but removes useful public proof of work.
3. Use one complete project collection with the three resume projects first and all existing work retained. This is the chosen approach because it adds the resume projects without hiding previous work.

## Design

- About and experience copy will foreground 4+ years, client discovery, solution roadmaps, backend/cloud ownership, performance, and applied AI.
- The repertoire section will become capability-led: consulting, systems architecture, cloud/performance, applied AI, web/mobile delivery, and data/reliability.
- Projects will use structured data instead of JSX instances. Each project may have an optional URL and image, technology tags, and concise impact highlights.
- Follow, Membership Sales Coach, and Shipfacet will appear as the first three entries in the existing project carousel.
- The carousel will retain the existing `My Complete Projects` heading and all previous projects.
- The existing progress bars will be updated to reflect backend/system design, cloud and performance, applied AI, web/mobile delivery, and client discovery.

## Constraints

- Use only approved-resume claims, project names, and metrics for Follow, Membership Sales Coach, and Shipfacet.
- Source public-project descriptions and technical details from their existing linked repositories or live sites.
- Keep all changed copy in English and preserve the existing visual language.
- Keep links optional when no public project URL is available.
- Do not push the branch.
