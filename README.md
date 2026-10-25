# Marina Barroso — Graphic Design Portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Motion for React. The primary background is `#262626`. Google Fonts supplies Instrument Serif and DM Sans, with local system-font fallbacks. No accounts, environment variables, API keys, or paid services are needed to run it.

## Preview on your computer

1. Install the current **Node.js LTS** from https://nodejs.org (Node 20.9 or newer is required).
2. Download this repository from GitHub using **Code → Download ZIP**, then unzip it. Alternatively, clone it with Git.
3. Open the project folder in a terminal (VS Code has **Terminal → New Terminal**).
4. Run these commands one at a time:

```sh
npm ci
npm run dev
```

5. Open **http://localhost:3000** in your browser. Keep the terminal running. Changes you save appear automatically. Press **Ctrl+C** in the terminal to stop the website.

In a cloud editor, use its port preview for port **3000**, if available. A localhost address works only on the machine running the server.

## What’s included

- Hero, Showreel, Selected Works, Portfolio, About, and Contact sections.
- Reusable navigation, footer, project cards, artwork, and reveal components.
- Individual project pages at `/projects/bloom`, `/projects/forma`, and `/projects/still`.
- Responsive layouts, keyboard focus indicators, a skip link, and reduced-motion support.
- A custom page for missing links and project-specific browser titles.

**All projects are fictional placeholders.** They do not represent real clients or professional credentials. The showreel and portrait are visual placeholders, not working video or a real photograph. Contact details are intentionally unset, so there is no contact form or email delivery to configure.

## Make it yours

### Change projects

Open **`src/data/projects.ts`**. Each project has a title, category, description, disciplines, and a unique `slug` (the last part of its page address). Set `featured: true` to show it in Selected Works. Adding an entry automatically creates its page and adds it to the portfolio list.

The current `artwork` options are `bloom`, `forma`, and `still`: original decorative CSS compositions. To use real images, put your files in **`public/`**, add an image path and descriptive alternative text to the project type/data, and replace the `Artwork` component with `next/image` or your own image component. Do not describe the samples as completed client work.

### Change text and contact details

Open **`src/components/Sections.tsx`** to edit the introduction, about text, showreel, and contact section. Replace the contact placeholder with your real email link (for example, `<a href="mailto:YOUR_EMAIL">Email me</a>`) and your own social links. Replace the showreel placeholder with your own accessible video when ready. Update page titles and description in **`src/app/layout.tsx`**.

### Change the design

Open **`src/app/globals.css`**. The `@theme` block at the top centralizes colors, fonts, section spacing, and the hover easing curve. Additional layout and timing tokens are in `:root`. Motion reveal settings are in **`src/components/Reveal.tsx`**. Font files load from Google when visitors have Internet access; the site remains readable using fallback fonts if that request fails. No font download is needed at build time.

## Check the website

```sh
npm run typecheck
npm run build
npm start
```

`build` makes the production version and checks its routes. After a successful build, `start` runs it on port 3000. Stop the development server before starting production on the same port. There is no automated unit-test suite yet; check your real content and contact links before publishing.

## Publish with Vercel

1. Save these files to your GitHub repository (commit and push using your editor or GitHub).
2. Sign in at https://vercel.com and choose **Add New → Project**.
3. Import this GitHub repository. Vercel detects **Next.js** automatically.
4. Leave the default build settings and click **Deploy**. No environment variables are required.
5. Vercel provides your public website address. Later pushes to the connected branch trigger new deployments.

You can preview before replacing placeholders, but add your own work, biography, portrait, video, and contact details before sharing it as a finished professional portfolio.

## File map

| Location | Purpose |
| --- | --- |
| `src/app/page.tsx` | Home page section order |
| `src/app/projects/[slug]/page.tsx` | Shared individual project page |
| `src/app/globals.css` | Design system and responsive styles |
| `src/components/` | Reusable website pieces |
| `src/data/projects.ts` | Editable project information |
| `public/` | Your future images and videos |
| `package-lock.json` | Exact installed dependency versions; keep this file |

Use the existing checkout for development; a separate Git worktree is unnecessary.
