# Project Overview

This is a **Data Engineer Portfolio** website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. It features a clean, professional public interface for showcasing projects and a private admin dashboard for managing content.

**Key Features:**
- **Public Portfolio:** Displays a hero section and a grid of projects.
- **Admin Dashboard:** Located at `/admin`, allows adding and deleting projects.
- **Data Storage:** Uses a local JSON file (`data/projects.json`) as a lightweight database.
- **Authentication:** Simple password protection for the admin route (default: 'admin').

# Building and Running

## Prerequisites
- Node.js (Latest LTS recommended)
- npm

## Key Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000`. |
| `npm run build` | Compiles the application for production. |
| `npm run start` | Starts the production server (must build first). |
| `npm run lint` | Runs ESLint to check for code quality issues. |

# Development Conventions

## Architecture
- **Framework:** Next.js App Router (`app/` directory).
- **Components:** Server Components are used by default (e.g., `app/page.tsx`). Client Components are marked with `"use client"` (e.g., `app/admin/page.tsx`).
- **Styling:** Tailwind CSS is used for all styling.
- **Type Safety:** TypeScript is strictly enforced.

## Data Layer
- **Source:** Data is stored in `data/projects.json`.
- **Access:** The `lib/api.ts` file contains functions (`getProjects`, `addProject`, `deleteProject`) to read/write to the JSON file using Node.js `fs/promises`.
- **API Routes:** The frontend (Admin Dashboard) interacts with the data layer via API routes located in `app/api/projects`.

## Authentication
- **Mechanism:** A simple password check against an environment variable.
- **Configuration:** Set `ADMIN_PASSWORD` in `.env.local`. Defaults to `'admin'` if not set.
- **Implementation:** Logic resides in `app/api/auth/route.ts`.

# Key Files

- **`app/page.tsx`**: The main public landing page. Renders the hero and project list server-side.
- **`app/admin/page.tsx`**: The client-side Admin Dashboard for managing projects.
- **`lib/api.ts`**: Core logic for reading and writing to the filesystem "database".
- **`data/projects.json`**: Stores the portfolio project data.
- **`PLAN.md`**: The original architectural plan and requirements.
- **`DEVELOPMENT_LOG.md`**: A log of implementation steps and progress.
