# SecureSight Dashboard

A web-based dashboard for managing CCTV feeds and incidents, built with Next.js and Prisma.

## 🚀 Deployment Instructions

This project can be deployed on platforms like:

### 🔸 Vercel (Recommended for Next.js)

1. Push your project to GitHub.
2. Go to [https://vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"**, import from GitHub.
4. Configure:
   - **Framework**: Next.js (auto-detected)
   - **Environment Variables** (if using `.env`)
5. Click **Deploy**.

Your dashboard will be live in minutes.

---

## 💡 Tech Decisions

- **Next.js 15**: Chosen for fast routing, built-in API routes, and React server components.
- **Tailwind CSS**: Enables utility-first styling and rapid UI development.
- **Prisma ORM + SQLite**: Easy to configure and seed for local development. Prisma offers type-safe queries and database migration tools.
- **App Router (not Pages Router)**: Used the new App Router directory structure from Next.js for modularity and server components.
- **API Routes**: Used instead of external backend for simplicity during local and serverless deployment.
- **.env File**: Used to manage `DATABASE_URL` locally for Prisma.

---

