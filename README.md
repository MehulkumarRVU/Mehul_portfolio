# Mehul Kumar Choudhary — Portfolio

A personal portfolio showcasing Mehul's work across software engineering, AI, entrepreneurship, and photography. Built with React, TypeScript, and Vite.

## Features

- Animated home page with an interactive Three.js particle background
- About, experience, skills, startup, project, photography, and contact sections
- Project detail pages and a chapter-based Story page
- Responsive layouts, reduced-motion support, and downloadable resumes
- Photography gallery and profile images stored in `assets/`

## Getting started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project structure

```text
assets/                  Profile, brand, and photography images
public/resume/           Downloadable PDF resumes
src/components/           Reusable sections, navigation, and UI
src/data/                 Portfolio content and project data
src/pages/                Home, Story, and project detail pages
src/hooks/                Shared React hooks
```

Update the content in `src/data/` and replace or add image files in `assets/` as needed. The photography gallery and profile photos import their image files from that folder.

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to a static hosting provider. Configure the host to serve `index.html` for client-side routes such as `/story` and project detail pages.
