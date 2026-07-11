# Portfolio Project — Interview Explainer

Use this as your own reference to explain the project confidently in interviews. It covers what you built, why you made each decision, and how to answer likely follow-up questions.

---

## 1. The 30-second summary

"I built and deployed my own portfolio website using Next.js, TypeScript, and Tailwind CSS. It's a single-page site with sections for my experience, education, skills, and projects, plus a working contact form that emails me directly using Mailtrap's transactional email API. It's hosted on Vercel with CI/CD — every time I push to GitHub, it redeploys automatically."

---

## 2. Tech stack — and why each piece

| Tech | Why I used it |
|---|---|
| **Next.js 16 (App Router)** | Modern React framework. Gives me file-based routing, built-in API routes (so I don't need a separate backend server), and easy deployment on Vercel. |
| **TypeScript** | Catches type errors at compile time instead of runtime — e.g., if I forget a required field in a project entry, TypeScript flags it before the site even builds. |
| **Tailwind CSS** | Utility-first CSS — lets me style components directly in JSX without writing/maintaining separate CSS files for every component. |
| **Framer Motion** | Handles animations (fade-ins, hover effects, the typewriter text) declaratively in React. |
| **Mailtrap (Send API)** | Transactional email service — lets my contact form actually deliver messages to my inbox without exposing my personal email credentials in the code. |
| **Vercel** | Hosting platform built by the Next.js team — zero-config deployment, automatic HTTPS, and serverless functions for my API route work out of the box. |

---

## 3. Architecture — how the project is organized

```
src/
  app/
    api/contact/route.ts   <- serverless backend endpoint
    layout.tsx              <- site-wide metadata (title, SEO description)
    page.tsx                 <- the homepage; just assembles sections in order
  components/                <- one folder per UI section
    Hero/, Experience/, Education/, Skills/, Projects/, Contact/, Footer/, Navbar/
  data/                       <- my actual content, separate from UI code
    profile.ts, experience.ts, education.ts, skills.ts, projects.ts
```

**Key principle: separation of content from presentation.**
All my actual information (job history, education, skills, project descriptions) lives in `src/data/*.ts` as plain TypeScript objects/arrays. The components in `src/components/` just *render* whatever is in those files. This means:
- If I get a promotion or finish a new project, I edit one line in a data file — I never touch component/JSX code.
- It's the same pattern professional codebases use to separate "data layer" from "view layer," just simplified for a static personal site.

**If asked "why not just hardcode the text in the components?"**
→ "Because then updating my resume info would mean hunting through JSX across a dozen files. Centralizing it in `data/` makes updates fast and less error-prone — and it's a pattern I can point to as good separation of concerns."

---

## 4. How the contact form actually works (the most "backend-y" part — good to know cold)

1. Visitor fills out the form (name, email, message) in the `Contact` component (client-side React state).
2. On submit, the form does a `fetch()` POST request to `/api/contact` — my own Next.js API route, **not** a third-party form service.
3. `src/app/api/contact/route.ts` runs **server-side** (on Vercel's serverless infrastructure, not in the visitor's browser). It:
   - Validates the input (checks name/email/message aren't empty, checks email format with a regex)
   - Reads my Mailtrap API token from an environment variable (never exposed to the browser)
   - Sends a POST request to Mailtrap's Send API (`https://send.api.mailtrap.io/api/send`) with the message details
   - Sets `reply_to` to the visitor's email, so when I hit "reply" in my inbox, it goes straight to them
4. Mailtrap delivers the email to my real inbox.

**Why an API route instead of just a `mailto:` link?**
→ "A `mailto:` link only opens the visitor's own email client — it doesn't work if they don't have one configured, and it looks unprofessional. Routing it through my own backend endpoint means the message is sent regardless of the visitor's setup, and I control formatting, validation, and delivery."

**Why Mailtrap instead of my personal Gmail SMTP directly?**
→ "Two reasons: security and reliability. Using my personal Gmail credentials directly in server code means if that config ever leaked, someone could send email as me. Mailtrap issues scoped API tokens specifically for transactional sending, gives me delivery logs, and is the same category of tool (a transactional email service) used in real production systems — so it's also a more realistic pattern to talk about in interviews than 'I used my Gmail password.'"

**Why validate on both client and server?**
→ "Client-side validation is for UX — instant feedback without a network round trip. Server-side validation is for security — you can never trust data coming from the browser, since a malicious user could bypass the UI and hit the API directly with bad data."

---

## 5. Environment variables & secrets management

- Real credentials (`MAILTRAP_API_TOKEN`, `MAILTRAP_SENDER_EMAIL`, `CONTACT_RECEIVER_EMAIL`) live in a `.env.local` file **only on my local machine**.
- `.env.local` is listed in `.gitignore`, so it's never committed to GitHub — anyone viewing my public repo can see the code but not my actual API keys.
- On Vercel, the same variables are set separately in the project's dashboard (Settings → Environment Variables), so the deployed site has access to them without them ever touching the Git history.
- I also keep a `.env.local.example` file in the repo — it lists which variables are *needed* with placeholder values, so if someone (or future me) clones the repo, they know exactly what to configure without seeing real secrets.

**If asked "what would happen if you accidentally committed your API key?"**
→ "I'd immediately regenerate/revoke the key in Mailtrap's dashboard to invalidate the leaked one, then remove it from the code and git history, and make sure `.gitignore` is properly excluding `.env.local` going forward. A committed secret should always be treated as compromised, even if you delete it in a later commit, because it's still visible in the Git history."

---

## 6. Deployment pipeline

1. Code is pushed to GitHub (`main` branch).
2. Vercel is connected to that GitHub repo — every push triggers an automatic build and deploy.
3. Vercel auto-detects it's a Next.js project (zero manual config needed) and builds both the static frontend and the serverless API route.
4. Environment variables are injected at build/runtime from Vercel's dashboard, not from the repo.
5. Live at a `.vercel.app` URL (or custom domain if added later).

**If asked "how do you deploy updates?"**
→ "I just push to `main` on GitHub — Vercel picks it up automatically and redeploys within about a minute. No manual server management."

---

## 7. Performance/quality decisions worth mentioning

- **Image optimization:** My profile photo was originally 3000×2000px and 2.4MB — I resized it to 800×533px and compressed it to ~230KB, since large unoptimized images are one of the most common causes of slow page loads.
- **`.gitignore` hygiene:** Excluded `node_modules` (regenerable from `package.json`) and `.next` (build cache) from version control — keeps the repo small and fast to clone.
- **TypeScript interfaces for data:** Each data file (e.g., `projects.ts`) defines a TypeScript `interface` describing the shape of the data (title, description, technologies, etc.), so adding a new project with a missing or mistyped field causes a compile error instead of a silent bug.

---

## 8. Likely interview follow-up questions (and how to answer)

**"Why Next.js instead of plain React?"**
→ Needed a backend endpoint for the contact form (API routes), built-in routing, and better SEO out of the box (server-rendered metadata) — plain React (e.g., Create React App/Vite) would need a separate backend service for the same thing.

**"How would you scale this if it got a lot of traffic?"**
→ It's already serverless — Vercel auto-scales the API route per-request. The bigger concern at scale would be rate-limiting the contact form to prevent abuse/spam, which I'd add via middleware or a simple in-memory/Redis-based limiter.

**"What would you add next?"**
→ Good honest answers: rate limiting on the contact API, a CI step (e.g., GitHub Actions) to run linting/type-checks before merge, analytics (e.g., Vercel Analytics) to see visitor behavior, and possibly a blog section using MDX.

**"What was the hardest part?"**
→ Genuine answer based on your actual process: switching the email delivery from direct SMTP to a proper transactional email API, and making sure secrets were handled correctly (never committed, properly scoped between local/production).

---

## 9. A note on originality

Early in development, this project started from a template that included some unrelated "backend engineer" placeholder copy (About/Skills/Experience section text describing Go, AWS, CargoWise, Docker work). That content was **UI copy only** — it never affected your actual data (`experience.ts`, `projects.ts`, `skills.ts`, `education.ts` were always yours) — but it has since been fully replaced with data-analyst-accurate copy throughout, including the site's SEO title and meta description. Good to know this history exists, but nothing live on the site references it anymore.
