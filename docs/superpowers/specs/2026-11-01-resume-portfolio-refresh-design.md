# Resume-Aligned Portfolio Refresh

## Intent

Bring the portfolio in line with the current resume so that it represents Yahya as a full stack software engineer and technical consultant with 4+ years of experience in client delivery, backend architecture, cloud platforms, performance engineering, and applied AI.

## Goals

- Replace generalist, junior-leaning copy with outcome- and capability-led messaging.
- Lead the portfolio with the three resume case studies: Follow, Membership Sales Coach, and Shipfacet.
- Retain selected public personal work after the client case studies.
- Support confidential client work without inventing public URLs or screenshots.
- Keep the existing Next.js, Tailwind, carousel, and card patterns.

## Non-Goals

- Do not modify the resume PDF.
- Do not publish, push, or create a pull request.
- Do not expose confidential screenshots, links, or client details that are not already approved for public display.
- Do not add a test framework for this static content and presentation update.

## Approaches Considered

1. Update only existing paragraphs and project descriptions. This is the smallest change, but it cannot clearly distinguish client case studies from public side projects.
2. Replace every project with the three resume projects. This produces a focused portfolio, but removes useful public proof of work.
3. Use a case-study-first portfolio with the three resume projects followed by selected public work. This is the chosen approach because it communicates senior client impact first while retaining accessible public demonstrations.

## Design

- About and experience copy will foreground 4+ years, client discovery, solution roadmaps, backend/cloud ownership, performance, and applied AI.
- The repertoire section will become capability-led: consulting, systems architecture, cloud/performance, applied AI, web/mobile delivery, and data/reliability.
- Projects will use structured data instead of JSX instances. Each project may have an optional URL and image, technology tags, concise impact highlights, and a confidential-project label.
- Follow, Membership Sales Coach, and Shipfacet will be presented as confidential client case studies unless a public URL or approved screenshot already exists.
- Existing public projects will appear under a smaller Labs & Open Source label.
- The existing progress bars will be updated to reflect backend/system design, cloud and performance, applied AI, web/mobile delivery, and client discovery.

## Constraints

- Use only approved-resume claims, project names, and metrics for confidential client case studies.
- Source public-project descriptions and technical details from their existing linked repositories or live sites.
- Keep all changed copy in English and preserve the existing visual language.
- Keep links optional for confidential client work.
- Do not push the branch.
