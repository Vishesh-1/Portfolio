# Project Plan: Data Engineer Portfolio

## Overview
A clean, professional, and high-performance portfolio website designed for a Data Engineer. The site will feature a public-facing showcase of work and a private admin interface for managing project data.

## Tech Stack
*   **Framework:** [Next.js](https://nextjs.org/) (React) - For SEO, performance, and API routes.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - For rapid, modern, utility-first UI design.
*   **Data Storage:** JSON (Local file system) - Lightweight and efficient for portfolio-scale data.
*   **Icons:** Lucide React or Heroicons.

## Core Features

### 1. Public Interface (The Portfolio)
*   **Hero Section:** Brief introduction, professional headline, and links to social profiles (GitHub, LinkedIn).
*   **About Section:** Short bio highlighting data engineering skills (ETL, Python, SQL, Cloud).
*   **Projects Showcase:** A responsive grid displaying projects. Each card will show:
    *   Title
    *   Description
    *   Tech Stack tags (e.g., "Apache Airflow", "Snowflake")
    *   Links (Repo/Live Demo)
*   **Contact:** Simple contact information or form.

### 2. Admin Interface (The CMS)
*   **Route:** `/admin`
*   **Authentication:** Simple access control using an environment variable (e.g., `ADMIN_PASSWORD`).
*   **Dashboard:**
    *   **List View:** See all current projects.
    *   **Add Project:** Form to input new project details.
    *   **Delete Project:** Button to remove outdated projects.
*   **API:** Next.js API routes (`/api/projects`, `/api/auth`) to read/write to the `projects.json` file.

## Data Structure (`projects.json`)
```json
[
  {
    "id": "1",
    "title": "Real-time ETL Pipeline",
    "description": "Ingesting streaming data from IoT sensors using Kafka and Spark.",
    "tags": ["Kafka", "Spark", "AWS"],
    "link": "https://github.com/..."
  }
]
```

## Design Aesthetic
*   **Theme:** "Clean Engineering". Minimalist.
*   **Colors:** Neutral background (white/slate-50), dark text (slate-900), and a strong accent color (e.g., Teal-600 or Indigo-600) to guide the eye.
*   **Typography:** Sans-serif, highly readable (e.g., Inter or Roboto).

## Implementation Steps
1.  Initialize Next.js project with Tailwind CSS.
2.  Create data service (read/write logic for JSON).
3.  Build public components (Hero, ProjectCard, Layout).
4.  Implement API routes for data management and auth.
5.  Build Admin Dashboard UI.
6.  Polish UI/UX and fix responsiveness.
