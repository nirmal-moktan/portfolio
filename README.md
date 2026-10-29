# Nirmal Moktan — Personal Portfolio

## Overview

A personal portfolio for Nirmal Moktan, a Computer Science student at Jacksonville State University. It introduces my interests, showcases my software projects and technical skills, and provides ways to connect.

## Features

- Responsive single-page layout with sticky section navigation.
- About section sharing my background, interests, and approach to learning.
- Clickable project cards for Aozora Japanese Restaurant, Spending Analyzer, and Job Application Tracker.
- Skill badges organized into Languages, Libraries, Frameworks, and Developer Tools.
- Contact information with GitHub, LinkedIn, an email link, and copy-to-clipboard feedback.
- Custom navy-and-gold NM monogram favicon.
- Subtle magical and dark-academia styling with parchment backgrounds, serif headings, antique-gold details, and burgundy accents.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Getting Started

Requires Node.js 20.9 or newer and npm.

Clone the repository, install dependencies, and start the development server:

```bash
git clone https://github.com/nirmal-moktan/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Create a production build:

```bash
npm run build
```

## Deployment

The project is configured for Next.js static export through `output: "export"` in `next.config.ts`. The build generates the static site in `out`.

For Cloudflare Pages, use these settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |

The build command runs `next build`. See the [Cloudflare Pages static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) for deployment details.

## Contact

- [GitHub](https://github.com/nirmal-moktan)
- [LinkedIn](https://www.linkedin.com/in/nirmal-moktan)
