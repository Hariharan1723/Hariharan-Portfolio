# Hariharan — Data Analyst Portfolio

A personal portfolio site built with Next.js 16, TypeScript, and Tailwind CSS, showcasing data analytics projects, professional experience in logistics/freight operations, and skills in Python, SQL, and Power BI.

**Live site:** https://hariharan-edith.vercel.app/

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Email delivery:** Mailtrap Send API (contact form)
- **Hosting:** Vercel

## Project Structure

```
src/
  app/
    api/contact/route.ts   # Serverless API route: handles contact form submissions via Mailtrap
    layout.tsx              # Root layout + SEO metadata
    page.tsx                 # Assembles all sections in order
  components/                # One folder per section (Hero, Experience, Skills, Projects, Contact, etc.)
  data/                       # Plain TypeScript data files (profile, experience, education, skills, projects)
  hooks/                      # Custom React hooks
public/
  images/                     # Profile photo
  presentation/                # Project presentation PDFs
  resume.pdf                   # Downloadable resume
```

## Key Design Decisions

- **Data/UI separation:** Content (name, experience, projects, skills) lives in `src/data/*.ts` as typed objects, separate from the components that render them. Updating content never requires touching component logic.
- **Contact form → Mailtrap:** Instead of exposing a personal inbox directly or relying on `mailto:` links, the contact form posts to a Next.js API route (`/api/contact`), which calls Mailtrap's Send API server-side. This keeps the sending credentials off the client and gives delivery logs/tracking.
- **Environment variables:** All secrets (Mailtrap API token, sender email) are stored in `.env.local`, which is git-ignored and never committed. Production secrets are set directly in the Vercel dashboard.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

- `MAILTRAP_API_TOKEN` — from Mailtrap dashboard → Settings → API Tokens
- `MAILTRAP_SENDER_EMAIL` — verified sender/domain in Mailtrap
- `CONTACT_RECEIVER_EMAIL` — where contact form messages should be delivered

## Deployment

Deployed on Vercel with automatic redeploys on every push to `main`. Environment variables are configured in the Vercel project dashboard under Settings → Environment Variables.
