# AGENTS.md

Working notes for AI coding agents (and humans) on the ToasterCat Studios site. This covers the design system, house copy style, and decisions already made. Read it before changing UI or copy. When a decision changes, update this file in the same commit.

This is the one shared instruction file for every agent. `CLAUDE.md` only imports it (`@AGENTS.md`) for Claude Code. Put shared rules here, never in an agent-specific file.

Open work is tracked in Jira (project **HOME**, toastercatstudios.atlassian.net), not here. Post-launch work is under the epic HOME-44, "Post-Launch Optimizations". Each task's summary carries a `[Cx]`/`[Mx]`/`[Tx]`/`[Dx]` ID (content, media, technical, design).

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
- **Tests:** all data tests pass. Keep it that way: add content rather than weakening a test.

### Jira and Git workflow

- **Git belongs to the human authors.** Agents edit the working tree and leave committing, amending, branching, and pushing to people. Only do Git work when someone explicitly asks you to author a commit, and only for that request.
- **Always ask before moving a Jira task** to any status, including In Progress and Done. Creating tasks and adding comments are fine when asked; changing status needs a yes each time.
- **Jira tasks are mostly immutable.** Once filed, don't rewrite a task's summary or description. Log progress, partial updates, and decisions as comments. Edit the description only to fix a real discovery or ambiguity, and say so in a comment.
- **One Jira task, many commits.** A task usually takes a handful of commits, so a commit landing on the remote doesn't mean the task is done. A person decides when it's done.
- **Commit messages for Jira tasks:** start the subject with the issue key and the task's ID, then a short description. A related fix gets its own short sentence. Write it in the past tense, like `[HOME-86]-[D5] Added side scrolling fades to mobile /portfolio nav and homepage testimonials.` Keep it short; put details in the body only if they're needed.

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
- **Media dimensions and previews are generated, not typed:** `vite-plugin-asset-meta.ts` uses `sharp` at build time to read every imported image's pixel size and make a ~16px blurred WebP preview (opaque images only), registered in `src/assets/assetMeta.ts`. `mediaSize()` in `media.ts` resolves an item's size; `previewProps(url)` (for `<img>`/`<video>`) and `withPreview(url)` (for CSS backgrounds) show the preview until the real file arrives, so layout never jumps and alt text never flashes. Leave `width`/`height` out of project media; set them only for files on the media server or to override. A data test fails if any item has no size. Images fade in and sharpen from the preview as the real file arrives: use `ProgressiveImg` (a drop-in `<img>`) for photos, and for CSS backgrounds put the photo on its own layer with `useBackgroundReady` + `progressiveBackground()` + the `.progressive-bg` class (never blur a layer that holds text). Every new image surface should use these. Under reduced motion it's an instant swap. After installing a package, restart the dev server (a stale dependency cache leaves pages blank with 504s).
- **`build.assetsInlineLimit: 1024`** in `vite.config.ts` means only tiny images are inlined into the JS. Bigger images load as files, only where they're used.
- **Licensing:** the code is GPLv3 (`LICENSE`), but media, copy, brand marks, and client material are not (`NOTICE`). Keep `NOTICE` accurate when adding a new kind of third-party material (fonts, icon sets, client documents).
- **SEO:** every route calls `usePageMeta({ title, description, noindex })` (`src/hooks/usePageMeta.ts`), which sets the title, description, canonical URL (`SITE_URL` in `SITE.ts`), and share tags, restoring the `index.html` defaults on unmount. Project pages use their `brief`; the 404 is `noindex`. `vite-plugin-sitemap.ts` writes `/sitemap.xml` at build time (pages plus listed projects; unlisted ones stay out), and `robots.txt` points to it. Link-preview bots don't run JavaScript, so every shared link shows the default card. That's accepted: per-page previews would need build-time pages and generated images, judged not worth the complexity (2026-10-14).
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
  - `/projects` (the old portfolio URL) redirects to `/portfolio`: a permanent 301 in `vercel.json` in production, plus a client-side `<Redirect>` for dev. There's no other legacy-link handling (old `#proj-*` anchors and renamed-alias redirects were removed 2026-10-16); add a `vercel.json` redirect if a URL ever changes after it's been shared.
- **Reusable UI** in `src/components/UI`:
  - `Brackets` (tertiary button label), `TcMark` and `BrandMark` (logos), `NyanToaster` (404 sprite)
  - `Ticker` (tags that scroll only when they overflow), `Media/*` (MediaFrame, Gallery, Lightbox)
  - `RichText` (project body markup), `StatusLine`, `PostCard`
  - `ShopReel`: one 3:2 frame that slowly crossfades through photos (About, under the spec sheet). Each shot's caption names the service it advertises (Live Recording, 3D Printing, Consulting…); shots can come from the shop or from project galleries. Holds still under reduced motion, pauses off-screen, on hover, and on focus, has `[ < ] | [ > ]` steppers (a manual step restarts the hold), and a dim `[ PAUSE ⏸ ]` / `[ PLAY ▶ ]` control (required: WCAG 2.2.2 for anything moving on its own over 5 seconds); it fetches each photo only when it's next. Shop photos show tech up close (printers, mics, desks), never the room's cabinets or walls.
  - `ScrollControls` (`[ < PREV ]` / `[ NEXT > ]`) with the `useHorizontalScroll` hook: the one way to build a sideways-scrolling row. Used by the testimonials band today; kept generic for Selected Work and the feature banner once there are more projects to feature
- **Page-level layouts:**
  - `components/ProjectCard`: variants `card`, `feature`, and `row`.
  - `components/PolicyDocument`: the shared layout for policy pages, with an optional sticky directory (`sections`, with `sub` entries indented).
- **Homepage:** Hero → FeatureBanner (the first entry in `src/FEATURES.ts`: any highlighted work, currently BLACK0UT.PUNK; a list so it can become a rotating slider later) → ServicesStrip (five service tiles, names only) → Selected Work (projects flagged `featured`: ClickTune and Lizzie, chosen for outside proof; tiled at every width) → In Their Words (TestimonialsBand: every project testimonial, linking to its project; always one quote tall, in a single side-scrolling row with `[ < PREV ]` / `[ NEXT > ]` once quotes overflow) → AboutSection → CTA. Testimonials marked `placeholder: true` render in dev builds only; a data test requires any lorem-ipsum quote to carry the flag.
- **Contact page:** heading → subtitle, "Helpful to include", and the "Work *with* us" collaborator line (the form's `intro` slot) → fields, including an optional free-text Subject (`subject`, which becomes the email's subject line via `_subject`) → Formspree/email fine print → Submit; then "What to expect from us" (four steps, the one place the reply/estimate timing is promised, then a note that we *may* bring in a trusted specialist and the client still works with us directly) and the studio-status guide (`#status`), every status listed with the current one on a tinted plate. The page is meant to be evergreen: no project-specific routing (e.g. playtests) here.

### Decisions not to revisit unless asked

- **`/portfolio` layout:** it's grouped by service (sticky jump bar, then each service's pitch, flagship, more rows, NDA row, "Early work" rows for projects finished before 2020, and CTA). The founder's Amazon/AWS background lives only in the About bio, never as a résumé panel on /portfolio ("this site shouldn't be my LinkedIn"). Projects with `listed: false` (currently FOSS Armory, Wraith Squadron, and Early Games and Engines: shelved work, or pre-studio work without outside proof) leave their section and sit in a small Archive after the last service; their pages still load. The user rejected a flat filter grid, a timeline, stats, and terminal-style navigation ("customers aren't nerds; we just wanna *look* nerdy"). No years or counts appear there.
- **Project pages:** navigation is a breadcrumb back only, with no prev/next and no related-projects strip. The Outcome section is always last and quiet.
- **Roles:** `roles` is always a list of short, parallel entries ("Recording", "Mixing"), never a sentence. The spec sheet labels it "Role" or "Roles" by count and hides the row when empty.
- **Credits:** named collaborators go in a project's `credits` (name and role), shown as a Team row in the spec sheet. Student and pre-studio projects (PixHell, Chick Magnet) don't list names.
- **In-house flags:** don't mark current projects as in-house on cards or project pages (it "deflates our exhibition"). Early work keeps `#in-house`, since it really was made for ourselves. `shownOrigin()` in `PROJECTS.ts` applies this everywhere.
- **Header nav:** Home and Portfolio plus the Hire Us button. The current page is marked with plain `| Page |` bars (box-drawing variants were tried and rejected).
- **Footer:** the studio-status line appears only in the footer, which links to the guide on `/contact#status`.
- **Founder and team on the site:** About names the founder in the prose. The spec sheet carries the facts, and it holds the only links: Founder → his LinkedIn, Funding → Patreon. There are no links in the About prose. There's no founder photo on the site (a deliberate choice; the photo is for the pitch deck). The spec sheet reads as a story, in this order: Est., Based, Founder, Team ("specialist network"), Builds, Shop, Cloud (vendor-neutral: "hosting · build pipeline"), Funding. Labels are one word; values are short `·` lists. Public funding copy states current sources only (client work, Patreon); expansion plans and any raise stay off the site. BLACK0UT.PUNK partners who aren't on payroll are never named or alluded to (non-compete constraints).
- **Not doing:** per-project link previews (build-time pages and share images; too much machinery for the payoff).
- **Deferred:** the Google Analytics consent banner (not targeting the EU or Canada yet).

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
  - `btn--tertiary`: PT Mono caps inside `<Brackets>`, for interface commands and minor navigation (menu, reset, back to top, section jumps, prev/next, "See the project"). **Rule: every tertiary or nav button reads `[ TEXT ]`**, rendered with `<Brackets>`; never a bare text link with a trailing arrow.
  - **Direction inside brackets:** paired prev/next and back commands carry ASCII direction marks: `[ < PREV ]`, `[ NEXT > ]`, `[ << BACK TO PORTFOLIO ]`. Media controls carry their glyph after the word: `[ PAUSE ⏸ ]` / `[ PLAY ▶ ]` (text-style, U+FE0E). Compact media steppers may be glyph-only, `[ < ] | [ > ]`, with an `aria-label` ("Previous photo"). Every other bracket command is words only. (`[ SKIP TO OUR POLICY ↓ ]` is the one accepted legacy exception.)
  - Arrows (`→`) belong to secondary buttons and to whole-card links (cards, rows, tiles), never inside brackets.
- **Tags vs. commands:** `[ BRACKETS ]` always mean a clickable command. Non-clickable labels (project kinds, VIDEO, NOW, PERSONAL NOTE, DO/DON'T, the NDA mark) use the bordered `.tag` class in `index.scss`, with no brackets. Colours vary by modifier (`.tag--signal`; `.tag--quiet` for project kinds, so titles stay dominant), but the shape never does.
- **Backgrounds:**
  - **Images** only where the section *is* the picture: the homepage hero, the feature banner, and project heroes.
  - **Texture (dots)** for framing bands, the parts that say who we are or where you are: page title bands (`/portfolio`), What We Do (a navigation strip), and About (short brand copy plus the spec sheet).
  - **Flat** for working content: project cards and dossiers, long-form text (policy pages), and forms and status guides (`/contact`).
  - **Spacing:** at most one dotted band on screen at a time, and never two adjacent.
  - The dot grid comes only from the `base.dot-grid` mixin, in two strengths: `'texture'` for the bands above, and `'placeholder'` to stand in for a missing photo. Never hand-write the radial-gradient.
- **Links in prose** use the `base.prose-link` mixin (RichText links carry the global `.prose-link` class): off-white with an olive underline, visited the same, signal red on hover and focus. Never leave an inline link to browser defaults.
- **Motion:** `$hover` (0.2s ease) is the one speed for all hover and focus feedback. Every animation must hold still under `prefers-reduced-motion`.
- **The `\>` prompt** is reserved for headings and titles: the brand, section headings, "\> Our Policy", and sign-off names. Never use it on pull-out statements or as a list marker. Lists use `>` (robot and human lists), `+` and `×` (do and don't panels), or dots.
- **Project thumbnails** are the work's own mark (client logo, band or product mark, game icon). With no fitting mark, leave `thumbnailImage` out. If the work has no mark at all (consulting, mostly), set `initials` (two to four capitals or digits: "CT", "UNE", "LIVE", "2077"): the `Monogram` component draws them as a square olive badge, with the PostCard avatar's lettering in a square so it reads as a badge, not a person. It goes wherever the mark would (row thumbnail, card badge, project hero). With neither, cards and heroes show no badge, and rows fall back to a square crop of the cover. The TC stamp (`tc-logo`) only marks work that's ours and carries our name (a data test enforces it).
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
- **“Mic’d”**, not “miked”, for a microphone placed on a source (Dirk’s usage, and the common PNW studio shorthand).
- **Product names capitalized:** Node, Docker, GitHub.
- **AI-policy terms:** “quarantined” means hand-coded, AI-free, IP-protected code; the “sandbox” is where AI is allowed (never the reverse). Generated stand-in art is a “placeholder”, never “scaffolding”.
- **Tool and skill names:** use the name people recognize, without a vendor prefix: "Fusion 360", "Maya", "Cura". AWS services are always "AWS …" (AWS S3, AWS DynamoDB, AWS Step Functions), never "Amazon …", whatever AWS's own naming says. Skill icons for AWS come from the official AWS Architecture Icons package; other icons come from Simple Icons, recoloured for the dark theme.

### Voice

Direct, engineer-honest, a little irreverent. Plain words over marketing spiel ("descriptive sentences, not marketing spiel"). Light profanity is acceptable in Dirk's personal voice. The company voice stays calmer and more authoritative. Any factual claim on a policy page needs a verified, linked source, and the wording must not claim more than the source supports.

**No output counts in project copy.** Don't quantify the studio's output or size: no "seven shows", "four venues", "team of three", or "hundreds of sites". We have more work than the site can show, and next to bigger shops, counts make the output look thin. Describe the work instead ("shows across Seattle-area venues", "a team project"). Technical specs (frame rates, character counts, board sizes) and a project's own outcomes are fine.

### Locked content

- **The personal note on `/ai-policy` is locked:** the `<PostCard id="note">` in `src/routes/AiPolicy/AiPolicyPage.tsx`, marked `LOCKED`. Never edit its wording, punctuation, or quotes; raise issues instead. Code formatting (line wrapping) is allowed, but confirm afterwards that the rendered text is unchanged.

## Policy commitments the site must keep

The site makes public promises. Code and copy changes must stay consistent with them.

- **AI policy (`/ai-policy`):**
  - **Core tenets** (top of “Our Policy”): the page summarized in six numbered lines. Anything added above the divider should map to one of them, and the do/don't lists apply them.
  - **Where AI is used:** AI handles the "short game": grunt code, debugging, testing, compliance checks, paperwork (contracts, briefs, grant applications), and drafts of our own correspondence.
  - **What never ships:** generated art and media, and narrative writing (stories, scripts, lyrics). Those are human-made.
  - **Placeholders:** generated placeholders are the exception, not the rule. When used, they are tagged, tracked, and replaced before release. Public playtest builds may still contain tagged placeholders, and we say so when they do.
  - **Sandboxing and quarantine:** quarantined code and assets define proprietary IP and are hand-written, AI-free (deterministic tools only; AI may help test, document, and debug, but a person writes the fix). When most of a codebase counts as IP, the default flips: everything is quarantined, and AI-assisted work is sandboxed into clearly bounded non-IP sections. A legal peer reviewed this approach (2026-10) and agrees it's valid for copyright and IP protection until further precedent.
  - **Who does what:** people hold the executive and senior roles (framework and language, architecture and design patterns, code organization, conventions and style); coding agents only extend established patterns, and every change is reviewed by a person.
  - **This site follows the policy:** people chose React and TypeScript, the file layout, and the conventions, and the site ran before an AI assistant was brought in; the assistant extends that structure and drafts copy that people edit, approve, and own. The site isn't registrable IP, so it's all sandbox. `/ai-policy` links the public repo as proof; keep that true.
- **Policy dates:** `/privacy` and `/ai-policy` show a "Last updated" date. `src/policyDates.test.ts` fingerprints both pages, so any edit fails the tests until you confirm the date (bump it for content changes, keep it for code or formatting) and paste in the new fingerprint the failure prints.
- **Privacy (`/privacy`):** contact details are used only to reply and are never shared. The form goes through Formspree, and Google Analytics measures site traffic only. Keep the Privacy page accurate if either changes.
- **Studio status:** change `STUDIO_STATUS` in `SITE.ts` (`open`, `limited`, `booked`, `away`). The footer and the `/contact` guide both update from it.
