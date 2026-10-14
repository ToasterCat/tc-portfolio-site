# CLAUDE.md

Working notes for AI assistants (and humans) on the ToasterCat Studios site. This covers the design system, house copy style, and decisions already made. Read it before changing UI or copy. When a decision changes, update this file in the same commit.

## Project

- **What it is:** the marketing and portfolio site for ToasterCat Studios, a studio offering games, websites, digital media (recording, live shows, and print promotion), prototyping, and consulting. It is live at toastercat-studios.com.
- **Stack:** Vite 8, React 18, React Router 5 (`Switch`/`Route`), TypeScript 5, Sass (`@use` modules), Vitest, and ESLint 10 (flat config in `eslint.config.js`). The site moved from Create React App on 2026-10-08.
- **Deploy:** the Vercel Git integration builds on every push.
  - `vercel.json` sets the Vite framework, `npm run build`, and the `build/` output.
  - It also adds the **SPA rewrite to `/index.html`**. Without it, deep links like `/portfolio/<alias>` return a 404 on refresh.
  - It caches `/assets/*` for a year as `immutable`. The files are content-hashed, so this is safe, and Vercel's Vite preset doesn't set it on its own (CRA's preset did).
  - Node comes from `"engines": { "node": "24.x" }`, which meets Vite's minimum of 20.19 or 22.12.
  - The `vercel` CLI was removed on purpose.
- **Commands:**
  - `npm start` (alias `npm run dev`): Vite dev server on :3000, with hot reload.
  - `npm run build`: type-check, then build into `build/`.
  - `npm run preview`: serve the production build on :3000.
  - `npm test`: Vitest run (`npm run test:watch` to watch).
  - `npm run lint`: ESLint.
  - `npm run typecheck`: `tsc --noEmit`.
- **Entry points:**
  - `index.html` lives at the repo root, not in `public/`, and loads `/src/index.tsx`.
  - `public/` holds files served as-is (icons, the og-card, and the manifest).
  - Use plain `/` paths in `index.html` (no `%PUBLIC_URL%`).
- **Environment variables:**
  - Only `VITE_`-prefixed variables reach the app, read via `import.meta.env` (types in `src/vite-env.d.ts`). `VITE_MEDIA_BASE` overrides the media CDN.
  - Never put secrets in `.env`: anything that reaches the app is visible in the browser.
- **Tests:** all 144 data tests pass. Keep it that way: add content rather than weakening a test.

### Environment gotchas (Windows + WSL)

- Node and npm are the Windows binaries, so call them via `cmd.exe /c "..."` from WSL.
- Build somewhere other than `build/` with `npx vite build --outDir <windows path>`.
- A dev server started in the background outlives its task and can turn into a zombie on :3000.
  - `strictPort` makes a second `npm start` fail rather than move to another port.
  - Free the port first: find the PID with `netstat -ano | findstr :3000`, then run `taskkill /PID <pid> /T /F`.
- Vite reports compile errors in a `<vite-error-overlay>` element. Check for it before trusting any click or visual test.
- For mobile checks, use headless Chrome with DevTools-protocol device emulation.
  - Node 24's built-in `WebSocket` drives it; no `ws` package is needed.
  - `chrome --window-size` misreports overflow.
  - Check at 390 and 1440 wide, with no horizontal overflow.

### Media and brand assets

- **Heavy media is optimized next to its original:**
  - Stills become WebP (`*_1600.webp`, `*_800.webp`); GIFs become MP4 `clip`s with a `*_poster.webp`.
  - `AssetMap.ts` points the asset key at the optimized file, and the full-size original stays as the source.
  - Conversion uses Pillow plus a portable ffmpeg (`imageio-ffmpeg`).
- **`build.assetsInlineLimit: 1024`** in `vite.config.ts` means only tiny images are inlined into the JS. Bigger images load as files, only where they're used.
- **Favicons, app icons, and the 1200×630 share card** (`public/og-card.png`) come from `scripts/build-brand-assets.py`. Re-run it (it needs Pillow) after any brand change.

### Dependencies

- **`npm audit`:** 0 vulnerabilities since the Vite move. The ~70 Dependabot alerts all came from `react-scripts`, which is gone.
- **Sass is unpinned:** it runs the latest version on its modern API. npm may warn that `@parcel/watcher` (an optional Sass dependency) has an unapproved install script. Vite doesn't need it, so leave it unapproved.

## Architecture map

- **Site chrome:** `src/SITE.ts` holds the shared content for the header, footer, and menu: `NAV_LINKS`, `CTA_LINK` ("Hire Us"), `FOOTER_LINKS`, `SOCIAL_LINKS`, `CONTACT_EMAIL`, and the studio status (`STUDIO_STATUSES` / `STUDIO_STATUS`).
- **Project data:** `src/PROJECTS.ts` holds the typed project data and `PROJECT_CATEGORIES` (service pitches, flagships, anchors). Types live in `src/types/project.model.ts`, and media resolution lives in `src/media.ts` (CloudFront `MEDIA_BASE`, YouTube and Bandcamp embeds).
- **Routes** (`src/components/App/App.tsx`):
  - `/`
  - `/portfolio`: the "services résumé"
  - `/portfolio/:alias`: one dossier page per project
  - `/contact`
  - `/privacy`
  - `/ai-policy`
  - a catch-all 404
  - `/projects` and old `#proj-*` anchors redirect to `/portfolio`.
- **Reusable UI** in `src/components/UI`:
  - `Brackets` (tertiary button label), `TcMark` and `BrandMark` (logos), `NyanToaster` (404 sprite)
  - `Ticker` (tags that scroll only when they overflow), `Media/*` (MediaFrame, Gallery, Lightbox)
  - `RichText` (project body markup), `StatusLine`, `PostCard`
- **Page-level layouts:**
  - `components/ProjectCard`: variants `card`, `feature`, and `row`.
  - `components/PolicyDocument`: the shared layout for policy pages, with an optional sticky directory (`sections`, with `sub` entries indented).
- **Homepage:** Hero → FeatureBanner (the first entry in `src/FEATURES.ts`: any highlighted work, currently BLACK0UT.PUNK; a list so it can become a rotating slider later) → ServicesStrip (five service tiles, names only) → Selected Work (projects flagged `featured`: ClickTune and Lizzie, chosen for outside proof) → AboutSection → CTA.
- **Contact page:** heading → subtitle, "Helpful to include", and the "Work *with* us" collaborator line (the form's `intro` slot) → fields, including an optional "What's this about?" `topic` select → Formspree/email fine print → Submit; then "What to expect from us" (four steps, the one place the reply/estimate timing is promised) and the studio-status guide (`#status`), every status listed with the current one on a tinted plate. The page is meant to be evergreen: no project-specific routing (e.g. playtests) here.

### Decisions not to revisit unless asked

- **`/portfolio` layout:** it's grouped by service (sticky jump bar, then each service's pitch, flagship, more rows, NDA row, "Early work" rows for projects finished before 2020, and CTA). The founder's Amazon/AWS background lives only in the About bio, never as a résumé panel on /portfolio ("this site shouldn't be my LinkedIn"). Projects with `listed: false` (currently FOSS Armory; Dirk may add more) leave their section and sit in a small Archive after the last service; their pages still load. The user rejected a flat filter grid, a timeline, stats, and terminal-style navigation ("customers aren't nerds; we just wanna *look* nerdy"). No years or counts appear there.
- **Project pages:** navigation is a breadcrumb back only, with no prev/next and no related-projects strip. The Outcome section is always last and quiet.
- **In-house flags:** don't mark current projects as in-house on cards or project pages (it "deflates our exhibition"). Early work keeps `#in-house`, since it really was made for ourselves. `shownOrigin()` in `PROJECTS.ts` applies this everywhere.
- **Header nav:** Home and Portfolio plus the Hire Us button. The current page is marked with plain `| Page |` bars (box-drawing variants were tried and rejected).
- **Footer:** the studio-status line appears only in the footer, which links to the guide on `/contact#status`.
- **Deferred:** per-project link previews (pre-rendering), and the Google Analytics consent banner (not targeting the EU or Canada yet).

## Design system

All tokens live in `src/_base.scss`. Use them instead of hard-coded values.

- **Type:**
  - **Space Grotesk** is for headings and buttons.
  - **DM Sans** is for body text and anything italic, since Space Grotesk has no italic.
  - **PT Mono** is strictly for meta content: #tags, statuses, kind labels, the tertiary `[ BRACKETS ]` buttons, and sign-offs.
  - The fonts are self-hosted and declared in `src/_fonts.scss`, which is loaded only by `index.scss`. Never put `@font-face` in `_base.scss`, because every component `@use`s it.
- **Colour:**
  - Warm, never pure white: text `$color-light #EDE8DF`, secondary text `$site-color-gray #C4BFB4`.
  - **Signal red** (a vermilion, not salmon): `$color-signal #F05A3F` for lines, hover text, and focus rings; `$color-signal-fill #C0392B` for fills, with `$color-on-signal #F2F0EB` text on them.
  - **Olive** for meta: `$color-meta #BAB55A` and `$color-meta-dim #7d7a3c`.
  - **Status traffic light** (state, never interaction):
    - `$color-success` / `$color-status-open` `#7FB069` (sage green) for open for work and message sent.
    - Olive for limited availability.
    - `$color-status-booked` (signal red) for booked up.
    - Dim for away.
  - New colours must pass AA contrast.
- **Buttons** (`src/_buttons.scss`), three tiers:
  - `btn--primary`: red outline that fills on hover.
  - `btn--secondary`: neutral outline plus an icon or glyph.
  - `btn--tertiary`: PT Mono caps inside `<Brackets>`, for interface commands only (menu, reset, back to top, section jumps).
- **Tags vs. commands:** `[ BRACKETS ]` always mean a clickable command. Non-clickable labels (project kinds, VIDEO, NOW, PERSONAL NOTE, DO/DON'T, the NDA mark) use the bordered `.tag` class in `index.scss`, with no brackets. Colours vary by modifier (`.tag--signal`; `.tag--quiet` for project kinds, so titles stay dominant), but the shape never does.
- **Backgrounds:**
  - **Images** only where the section *is* the picture: the homepage hero, the feature banner, and project heroes.
  - **Texture (dots)** for framing bands, the parts that say who we are or where you are: page title bands (`/portfolio`), What We Do (a navigation strip), and About (short brand copy plus the spec sheet).
  - **Flat** for working content: project cards and dossiers, long-form text (policy pages), and forms and status guides (`/contact`).
  - **Spacing:** at most one dotted band on screen at a time, and never two adjacent.
  - The dot grid comes only from the `base.dot-grid` mixin, in two strengths: `'texture'` for the bands above, and `'placeholder'` to stand in for a missing photo. Never hand-write the radial-gradient.
- **Motion:** `$hover` (0.2s ease) is the one speed for all hover and focus feedback. Every animation must hold still under `prefers-reduced-motion`.
- **The `\>` prompt** is reserved for headings and titles: the brand, section headings, "\> Our Policy", and sign-off names. Never use it on pull-out statements or as a list marker. Lists use `>` (robot and human lists), `+` and `×` (do and don't panels), or dots.
- **Project thumbnails** are the work's own mark (client logo, band or product mark, game icon). With no fitting mark, leave `thumbnailImage` out: cards and heroes show no badge, and rows fall back to a square crop of the cover. The TC stamp (`tc-logo`) only marks work that's ours and carries our name (a data test enforces it).
- **Brand marks:** the TC mark goes in professional spots. The pixel toastercat appears only beside the footer copyright and, animated, on the 404 page. Render pixel art only at whole-number scales.
- **Layout gotchas:**
  - On desktop, `index.scss` sets `section { min-width: 30rem }`, so a `<section>` inside a narrow column needs `min-width: 0`.
  - Columns that use `width: 100%` plus padding need `box-sizing: border-box`, or they overflow on phones.
  - In JSX, never break a line right next to an inline tag; JSX drops that whitespace and words run together.

## Copy and voice

### House style

- **Oxford comma**, always ("me, myself, and I").
- **Title Case** for sub-headings and directory labels ("In-House Projects", "Why: Consent and Derivative Work").
- **Curly quotes and apostrophes** in rendered text (’ “ ”), never straight ones. Periods and commas go *outside* closing quotes (“AI”.), matching Dirk's style.
- **Real dashes or recast sentences:** use an em dash (—), a colon, or a semicolon. Never a spaced hyphen ( - ) as a dash.
- **American spelling** ("judgment", not "judgement").
- **Product names capitalized:** Node, Docker, GitHub.
- **Tool and skill names:** use the name people recognize, without a vendor prefix: "Fusion 360", "Maya", "Cura". AWS services are always "AWS …" (AWS S3, AWS DynamoDB, AWS Step Functions), never "Amazon …", whatever AWS's own naming says. Skill icons for AWS come from the official AWS Architecture Icons package; other icons come from Simple Icons, recoloured for the dark theme.

### Voice

Direct, engineer-honest, a little irreverent. Plain words over marketing spiel ("descriptive sentences, not marketing spiel"). Light profanity is acceptable in Dirk's personal voice. The company voice stays calmer and more authoritative. Any factual claim on a policy page needs a verified, linked source, and the wording must not claim more than the source supports.

### Locked content

- **The personal note on `/ai-policy` is locked:** the `<PostCard id="note">` in `src/routes/AiPolicy/AiPolicyPage.tsx`, marked `LOCKED`. Never edit its wording, punctuation, or quotes; raise issues instead. Code formatting (line wrapping) is allowed, but confirm afterwards that the rendered text is unchanged.

## Policy commitments the site must keep

The site makes public promises. Code and copy changes must stay consistent with them.

- **AI policy (`/ai-policy`):**
  - **Where AI is used:** AI handles the "short game": grunt code, debugging, testing, compliance checks, paperwork (contracts, briefs, grant applications), and drafts of our own correspondence.
  - **What never ships:** generated art and media, and narrative writing (stories, scripts, lyrics). Those are human-made.
  - **Placeholders:** generated placeholders are the exception, not the rule. When used, they are tagged, tracked, and replaced before release.
  - **Sandboxing:** code that defines proprietary IP lives in sandboxed, AI-free areas. AI may help diagnose bugs there, but a person writes the fix. Mechanical changes there are made with deterministic tools (formatters), never generated.
  - **This site follows the policy:** an AI assistant helped refactor it within a hand-built structure, and much of its copy was AI-drafted, then edited and approved by people.
- **Privacy (`/privacy`):** contact details are used only to reply and are never shared. The form goes through Formspree, and Google Analytics measures site traffic only. Keep the Privacy page accurate if either changes.
- **Studio status:** change `STUDIO_STATUS` in `SITE.ts` (`open`, `limited`, `booked`, `away`). The footer and the `/contact` guide both update from it.

## Open work (summary)

- **Content sweep** (deferred until templates settle): typos and ™ marks in `PROJECTS.ts`, empty project bodies, missing covers and skill icons, real gallery media on S3, and older content that predates the house style.
- **Technical:**
  - Replace the default React favicon and og:image.
  - Compress heavy images (WebP; GIFs to MP4 clips).
  - Add a CloudFront alternate domain and certificate for `media.toastercat-studios.com`.
  - Contact form: give the message field a proper name and make it required, and stop Formspree redirecting away from the site.
  - Add component and end-to-end tests.
