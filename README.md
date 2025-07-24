# 🛡️ SecureSight Dashboard

A modern surveillance dashboard for managing CCTV feeds and incidents, built with **Next.js 15 App Router**, **Prisma**, and **Tailwind CSS**. Designed for real-time monitoring and efficient resolution of security events.

🔗 **Live demo**: [https://securesightdashboard.netlify.app](https://securesightdashboard.netlify.app)

---

## 🚀 Deployment Instructions

This project can be deployed easily using platforms like **Netlify** or **Vercel**.

### 🔹 Deploying to Netlify

1. Push your project to GitHub.
2. Go to [https://app.netlify.com](https://app.netlify.com) and click **“Add New Site”** → **Import from GitHub**.
3. Set the following build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Add the following **Environment Variables**:
5. Netlify will automatically install dependencies, run `prisma generate`, and build your app.

---

## 💡 Tech Decisions

- **Next.js 15 App Router**: Chosen for modular routing, server components, and better layout handling.
- **Tailwind CSS**: For utility-first, responsive, and fast UI development.
- **Prisma ORM + PostgreSQL (via Neon)**: Used for relational data modeling with auto-generated types and migrations.
- **API Routes**: Enables handling actions like incident resolution without needing an external backend.
- **Environment Variables**: `.env` file used locally to manage sensitive config like `DATABASE_URL`.
- **Optimistic UI**: Incidents disappear immediately when resolved, even before confirmation from the backend.

---

## 🔮 If I Had More Time...

- Add **authentication** (e.g., admin vs. viewer roles)
- Integrate a **video player** instead of static thumbnails
- Implement **filters**, **search**, and **sort** on the incident list
- Stream **live camera feeds** into the player section
- Improve **error boundaries** and loading states

---

