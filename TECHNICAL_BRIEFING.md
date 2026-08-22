# Project Technical Briefing & Full Architectural Audit

**Document:** Comprehensive Situation Report & Technical Deep-Dive  
**Project:** Digital Magnet Productions (Creative Agency Platform & Interactive Portfolio)  
**Author:** Freelance Full-Stack Web Developer  
**Recipient / Target:** Senior Solutions Architect / Principal Engineer  
**Date:** August 2026  
**Status:** In-Depth Forensic Analysis & Strategic Options Blueprint  

---

## 1. Context & The Client Engagement

### 1.1 The Brief & Freelancer Situation
I am currently working on a high-stakes client engagement for **Digital Magnet Productions**, an ambitious creative agency looking to launch a flagship, award-winning interactive portfolio and agency web platform. 

The client's benchmark for visual design, fluid typography, 3D interactions, and micro-animations is the acclaimed **Dentsu Creative** global web platform (`dentsucreative.com`). The client provided an extracted snapshot package of the site along with raw forensic extractions for key pages stored in our `/extracted/` workspace.

### 1.2 The Core Problem
On the surface, the visual layout, typographic scales, CSS stylesheets, and 3D WebGL assets (`.glb` models) are world-class. However, under the hood, the extracted codebase is in a **severely compromised, semi-functional hybrid state**:
1. **Broken React Hydration Lifecycle:** Minified Next.js Webpack chunks fail to hydrate over the static pre-rendered DOM, triggering fatal React hydration errors (`#418` and `#423`) and dropping all DOM event listeners (navigation menu toggle, interactive filters, sliders).
2. **Subdirectory Path Failures:** Relative asset referencing (`./_next/...`) causes widespread `HTTP 404 Not Found` errors across subpages (`/about`, `/services`, `/work`, `/contact`).
3. **Dead 3D & Animation Subsystems:** The Three.js WebGL canvas and GSAP ScrollTrigger routines fail to bind to the DOM.
4. **Band-Aid Error Suppression:** The current codebase attempts to mask hydration crashes by intercepting `window.addEventListener('error')` and hijacking `console.error`, leaving the user interface completely non-interactive.

I am compiling this complete technical briefing to walk you through the entire story from the beginning to the end, detailing every extracted artifact, runtime failure, CMS schema, security violation, and architectural pathway so we can determine the optimal solution.

---

## 2. Forensic Analysis of the `/extracted/` Raw Data

The raw extraction dataset is partitioned into five primary page directories: `home`, `about`, `services`, `work`, and `contact`. Each directory contains six forensic telemetry files:

```
/extracted/
├── home/
│   ├── dom.html                  # Serialized pre-hydration DOM tree
│   ├── next-data.json            # Storyblok CMS pageProps payload (2,686 lines)
│   ├── scene-data.json           # Lottie/Canvas WebGL player detections
│   ├── gsap-animations.json      # GSAP & ScrollTrigger runtime status
│   ├── images.json               # Asset manifest (Storyblok CDN URLs)
│   └── console-errors.json       # CSP violations & runtime exceptions
├── about/                        # Same 6-file forensic structure
├── services/                     # Same 6-file forensic structure
├── work/
│   ├── discovered-case-links.json# 12 Case study route paths
│   └── [6 forensic files]
└── contact/                      # Same 6-file forensic structure
```

### 2.1 Storyblok Headless CMS Schema (`next-data.json`)
The site was originally built using **Storyblok CMS** serving structured JSON payloads via Next.js `getStaticProps` / `getServerSideProps`.

Key architectural findings from `next-data.json`:
* **Component Architecture:** Content is assembled using modular block components:
  * `intro_slide`: Hero showcase cards (`"Creates Culture"`, `"Changes Society"`, `"Invents the future"`).
  * `marquee`: Infinite horizontal ticker displays with custom typography.
  * `case_grid` / `featured_cases`: Dynamic multi-column project showcases referencing UUIDs (`872d42da-bd5b-4853-9841-8b34c89d76c4`).
  * `service_list`: Expandable accordion lists with localized Japanese subheadings.
  * `awards_module`: Timeline and grid of Cannes Lions / D&AD award recognitions.
  * `contact_form`: Multi-step interactive inquiry form.
* **Localization:** The platform is configured for multi-region routing (`/en-gb/`, `/en-us/`, `/ja-jp/`), with `/en-gb/` serving as the base locale in this extraction.
* **Asset CDN:** All media assets originate from Storyblok's AWS S3 image proxy: `https://a.storyblok.com/f/...`.

### 2.2 3D Scene Data & Lottie Players (`scene-data.json`)
* **3D Canvas Status:** `canvases: []` (Empty array). The WebGL canvas failed to mount during the extraction crawl because the React Three Fiber component tree failed prior to canvas attachment.
* **Lottie Player:** `globalsDetected: ["lottie"]`. The vector loader references `/lottie/loader-dc.json`, which contains the preloader path morphing sequence.
* **3D Model Files Available:**
  * `/assets/3d/Shapes/Bonsai.glb` (Organic branch sculpture)
  * `/assets/3d/Shapes/Enso.glb` (Zen circle loop)
  * `/assets/3d/Shapes/Pinwheel.glb` (Mechanical dynamic turbine)
  * `/assets/3d/Shapes/TsukiMoon.glb` (Textured celestial sphere)

### 2.3 GSAP & ScrollTrigger Status (`gsap-animations.json`)
* `gsapLoaded: false`, `scrollTriggerLoaded: false`, `scrollTriggers: []`.
* **Root Cause:** In the original Next.js architecture, GSAP was imported dynamically via `@gsap/shockingly` or ESM bundles inside React `useEffect` hooks. Because React hydration aborted on entry, the `useEffect` hooks never fired, preventing GSAP initialization.

### 2.4 Content Security Policy (CSP) & Telemetry Violations (`console-errors.json`)
The extracted logs across all pages reveal heavy CSP connect and image blocking:
1. **Google Analytics (GA4) Violations:**
   * Blocked endpoint: `https://www.google-analytics.com/g/collect` and `https://www.google.com/g/collect` (Measurement ID: `G-G9NKP3ZMT0`).
   * Reason: CSP header restricts `connect-src` to `https://region1.google-analytics.com` and lacks wildcard coverage for default Google Analytics endpoints.
2. **LinkedIn Insight Pixel Violations:**
   * Blocked endpoint: `https://www.linkedin.com/px/li_sync` (Pixel ID: `5270034`).
   * Reason: CSP `img-src` allows `px.ads.linkedin.com` but omits `www.linkedin.com`.
3. **SVG Rendering Warnings:**
   * `Error: <rect> attribute ry: Unexpected end of attribute. Expected length, "".`
   * Reason: Malformed SVG corner-radius attributes in the static pre-rendered icon sprites.

### 2.5 Discovered Case Studies (`discovered-case-links.json`)
The Work section links to 12 deep-dive case studies:
1. `/en-gb/cases/reverse-media-schedules`
2. `/en-gb/cases/game-on-ball`
3. `/en-gb/cases/pairing-portugal`
4. `/en-gb/cases/wardah-hear-in-hijab`
5. `/en-gb/cases/nutter-butter`
6. `/en-gb/cases/sato-2531`
7. `/en-gb/cases/nikka-whisky-no-labels`
8. `/en-gb/cases/crayola-campaign-for-creativity`
9. `/en-gb/cases/canal-historia-history-outnumbered`
10. `/en-gb/cases/interface-of-humanity`
11. `/en-gb/cases/garuda-rakshak`
12. `/en-gb/cases/unfreeze-my-rights`

---

## 3. The Runtime Environment & Failure Cascade

### 3.1 Step 1: The Static Ingestion
The workspace consists of extracted HTML files (`en-gb.html`, `en-gb/about.html`, `en-gb/services.html`, `en-gb/work.html`, `en-gb/contact.html`, and case study HTMLs in `en-gb/cases/`), accompanied by compiled CSS in `_next/static/css/` and Webpack bundles in `_next/static/chunks/`.

### 3.2 Step 2: The Minimal Express Server (`server.js`)
To run in standard Node.js environments (and Cloud Run container port 3000), a basic Express server was set up:
```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'en-gb.html'));
});

app.use(express.static(__dirname, { extensions: ['html', 'htm'] }));
app.use((req, res) => res.status(404).send('Not found'));
app.listen(port, '0.0.0.0');
```

### 3.3 Step 3: The Failure Modes in Detail

#### Failure Mode A: The React Hydration Trap
When `en-gb.html` loads:
1. The browser parses the static DOM (containing the pre-rendered UI).
2. The browser executes `_next/static/chunks/webpack-*.js`, `framework-*.js` (React 18), and `main-*.js`.
3. Next.js triggers `ReactDOM.hydrateRoot(document.getElementById('__next'), <App />)`.
4. React compares the existing DOM against its generated VDOM. Because runtime context (Storyblok preview bridge, cookies, screen dimensions, Next.js build IDs) is absent, hydration encounters a mismatch.
5. React throws **Minified Error #418** (*Hydration failed because the initial UI does not match what was rendered on the server*) and **Minified Error #423** (*There was a text content mismatch between client and server*).
6. React bails out, abandons event listener binding, and leaves all buttons, dropdowns, navigation menus, and form controls inert.

#### Failure Mode B: Relative Path 404s on Subpages
In `en-gb.html` (root), script and stylesheet tags use absolute paths (`/_next/static/...`).  
However, in `en-gb/about.html`, `en-gb/services.html`, etc., script tags use relative paths:
```html
<script src="./_next/static/chunks/webpack-7d991f5790b6da22.js" defer=""></script>
```
When navigating to `/en-gb/about.html`, the browser resolves this to `/en-gb/_next/...`, which does not exist on disk, resulting in cascading **HTTP 404 Not Found** errors for every script and style.

#### Failure Mode C: Navigation & Clean URLs
The Express server has no route aliasing. Users visiting `/about`, `/services`, `/work`, `/contact`, or `/cases/game-on-ball` receive immediate 404 responses because the files live in nested directories (`en-gb/about.html`, `en-gb/cases/game-on-ball.html`).

#### Failure Mode D: Console Suppression "Band-Aid"
To hide the red errors from the console, the previous developer injected interceptor scripts into `<head>`:
```html
<script>
  window.addEventListener('error', function(e) {
    if (e.message && e.message.includes('Minified React error #418')) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });
  const originalError = console.error;
  console.error = function(...args) {
    if (typeof args[0] === 'string' && (args[0].includes('#418') || args[0].includes('#423'))) return;
    originalError.apply(console, args);
  };
</script>
```
*Why this fails:* Muting the console does not fix the broken JavaScript execution thread. React still halts event listener binding, leaving the user interface completely frozen.

---

## 4. Architectural Comparison & Solution Paths

To transition this project from a broken static snapshot into a production-grade web platform, three primary architectural pathways exist:

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   ARCHITECTURAL PATHWAYS                                    │
├──────────────────────────────┬──────────────────────────────┬───────────────────────────────┤
│ Option 1: Clean Decoupled    │ Option 2: Native Next.js     │ Option 3: Modern Island       │
│ Web Standards (RECOMMENDED)  │ Full TS App Rebuild          │ Architecture (Astro/Vite)     │
├──────────────────────────────┼──────────────────────────────┼───────────────────────────────┤
│ • Strip broken Next hydration│ • Rebuild full React/Next    │ • Ingest static HTML/CSS into │
│   minified Webpack chunks    │   component tree from scratch│   Astro components            │
│ • Retain 100% pixel-perfect  │ • Wire dynamic Storyblok API │ • Hydrate only interactive    │
│   DOM & compiled CSS         │   or local JSON mock store   │   islands (Menu, 3D, Sliders) │
│ • Implement vanilla/ESM      │ • Integrate React Three Fiber│ • Retain zero JS for static   │
│   controllers (Menu, GSAP,   │   (R3F) for GLB scenes       │   content blocks              │
│   Three.js GLTF, Sliders)    │ • Configure Next App Router  │                               │
│                              │                              │                               │
│ Speed to Market: 1-2 Days    │ Speed to Market: 2-3 Weeks   │ Speed to Market: 4-5 Days     │
│ Runtime Stability: 100% Rock │ Runtime Stability: High      │ Runtime Stability: High       │
│ Maintenance Complexity: Low  │ Maintenance: Medium-High     │ Maintenance: Low-Medium       │
│ Performance (Lighthouse): 98+│ Performance (Lighthouse): 90+│ Performance (Lighthouse): 96+ │
│ Zero Build-Tool Lock-in: YES │ Zero Build-Tool Lock-in: NO  │ Zero Build-Tool Lock-in: NO   │
└──────────────────────────────┴──────────────────────────────┴───────────────────────────────┘
```

---

## 5. Recommended Implementation Blueprint: Option 1 (Clean Decoupled Architecture)

### 5.1 Step 1: Server Routing & Path Normalization (`server.js`)
Implement clean routing, asset resolution, and JSON API handling in Express:
* Route `/` $\rightarrow$ `en-gb.html`
* Route `/about` $\rightarrow$ `en-gb/about.html`
* Route `/services` $\rightarrow$ `en-gb/services.html`
* Route `/work` $\rightarrow$ `en-gb/work.html`
* Route `/contact` $\rightarrow$ `en-gb/contact.html`
* Route `/cases/:slug` $\rightarrow$ `en-gb/cases/:slug.html`
* Route `/_next/*` to root static assets regardless of referring subpage.
* Add POST `/api/contact` endpoint for inquiry form submission.

### 5.2 Step 2: Hydration Decoupling & Script Cleansing
* Remove all minified `_next/static/chunks/` script tags and console suppression hacks from `en-gb.html` and all subpages.
* Retain the complete, compiled CSS stylesheets (`_next/static/css/*.css`), ensuring 100% visual fidelity, typography, flexbox/grid alignments, and responsive media queries.
* Correct all relative links (`./_next/...` $\rightarrow$ `/_next/...`).

### 5.3 Step 3: Modular Client-Side Controllers (`/js/`)
Create lightweight, maintainable ES6/TypeScript controllers:

1. **`js/navigation.js` (Menu & Header Controller):**
   * Binds to the hamburger button (`[data-testid="menu-button"]` or `.Header_menuButton`).
   * Toggles the full-screen `MenuOverlay` with CSS transform / opacity transitions.
   * Handles scroll-lock on `document.body` when the menu is open.
   * Highlights the active route link based on `window.location.pathname`.

2. **`js/three-scene.js` (3D WebGL Canvas Engine):**
   * Initializes a Three.js `WebGLRenderer` in the background container `#canvas-container` or `.Hero_canvas`.
   * Loads the 4 GLB models (`Bonsai.glb`, `Enso.glb`, `Pinwheel.glb`, `TsukiMoon.glb`) via `GLTFLoader`.
   * Maps mouse cursor coordinates `(x, y)` to subtle mesh rotation and camera parallax.
   * Links scene rotation to scroll position using `requestAnimationFrame`.

3. **`js/animations.js` (GSAP & Scroll Interactions):**
   * Imports GSAP 3 and ScrollTrigger via ESM CDN or local bundle.
   * Animates hero headline line reveals, fade-ups on `.case_grid` cards, and horizontal marquee tickers.

4. **`js/loader.js` (Lottie Page Intro):**
   * Initializes `lottie-web` against `/lottie/loader-dc.json` for initial brand splash transition.

5. **`js/contact-form.js` (Form Validation & Submission):**
   * Validates form inputs (Name, Email, Message, Service selection).
   * Submits asynchronous POST request to `/api/contact` with visual success/error states.

### 5.4 Step 4: Digital Magnet Productions Rebranding
Update metadata, titles, and copy across all HTML pages and Storyblok JSON references to replace legacy Dentsu Creative placeholders with **Digital Magnet Productions**.

---

## 6. Execution Roadmap & Priority Checklist

| Phase | Module | Tasks | Priority |
|---|---|---|---|
| **Phase 1** | **Server & Routing** | Rewrite `server.js` with clean URL aliases, dynamic `/cases/:slug` routing, and global asset fallbacks. | 🔴 Immediate |
| **Phase 2** | **Asset & Markup Audit** | Fix relative `./_next/` paths in all HTML files; strip minified React hydration chunks and suppression hacks. | 🔴 Immediate |
| **Phase 3** | **Navigation & Interactivity** | Implement `js/navigation.js` for hamburger menu toggle, backdrop blur, and page transitions. | 🟡 High |
| **Phase 4** | **3D WebGL Scene** | Create `js/three-scene.js` with Three.js `GLTFLoader` to render `Bonsai.glb`, `Enso.glb`, `Pinwheel.glb`, `TsukiMoon.glb`. | 🟡 High |
| **Phase 5** | **GSAP & Scroll Engine** | Implement `js/animations.js` for scroll-triggered section entrances, case card reveals, and marquee ticker. | 🟢 Medium |
| **Phase 6** | **Contact API & Validation** | Build Express POST `/api/contact` endpoint and client-side validation handler in `js/contact-form.js`. | 🟢 Medium |
| **Phase 7** | **Rebranding & QA** | Update `metadata.json`, HTML meta tags, OpenGraph data, and run responsive testing across all viewports. | 🟢 Polish |

---

## 7. Questions & Strategic Decisions for the Senior Architect

1. **Architecture Route Confirmation:** Do you agree that **Option 1 (Clean Decoupled Web Standards)** is the most efficient and robust path to deliver a 100% functional, zero-hydration-bug experience, or do you have reasons to mandate **Option 2 (Full Next.js TypeScript Rebuild)**?
2. **3D Canvas Interaction Depth:** For the 3D shapes (`Bonsai.glb`, `Enso.glb`, `Pinwheel.glb`, `TsukiMoon.glb`), should we implement an interactive cursor-follow canvas or a scroll-linked camera rotation?
3. **Form Handling on Contact Page:** Should the `/contact` form submit to a server-side Express `/api/contact` endpoint (with email dispatch / Firestore storage) or connect to an external CRM webhook?

---
*Ready to begin execution immediately upon your review and feedback.*
