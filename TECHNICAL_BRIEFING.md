# Project Technical Briefing & Architectural Deep-Dive
**Document:** Project Situation Report & Technical Strategy  
**Project:** Digital Magnet Productions (Interactive Agency Web Platform)  
**Author:** Full-Stack Web Development Lead  
**Target Audience:** Senior Solutions Architect / Principal Engineer  
**Date:** August 2026  
**Status:** In-Depth Architecture Audit & Action Plan  

---

## 1. Executive Summary & Context

### 1.1 The Premise
We have taken over a client engagement for **Digital Magnet Productions** to deliver a high-end, responsive, award-winning creative agency web platform. 

Upon receiving the initial repository and inspecting the workspace, we found that the current codebase is an **extracted, pre-rendered static snapshot of an enterprise Next.js application** (originally architected for *Dentsu Creative*). It is currently being served via a minimal Node.js/Express static wrapper on port `3000`.

While the visual foundation, typography, CSS stylesheets, and 3D WebGL assets (`.glb` models) are exceptionally high in production value, the underlying runtime is in a **semi-functional, hybrid state**:
1. It relies on minified, static-rendered HTML coupled with legacy Next.js client-side webpack chunks.
2. It suffers from React hydration mismatches (React errors `#418` and `#423`).
3. It has broken asset paths on subpages due to relative `./_next/` referencing.
4. It lacks a true build pipeline and dynamic routing mechanism.

This document breaks down the entire history, exact file-system structure, failure modes, and concrete architectural strategies to transform this project into a robust, high-performance, maintainable web product.

---

## 2. Chronological Breakdown: From Ingestion to Current State

### Step 1: The Source Origin & Extraction
* **The Original System:** The source project was built with **Next.js (Pages Router)** using **Storyblok CMS** for headless content distribution, dynamic catch-all routing (`[[...slug]].js`), **GSAP (GreenSock)** for scroll-driven micro-interactions, **Lottie** for JSON vector animations, and **Three.js / WebGL** for interactive 3D model scenes.
* **The Static Export:** A static crawl/export was generated. This produced:
  * Static HTML files containing pre-rendered DOM trees (`en-gb.html`, `en-gb/about.html`, `en-gb/services.html`, `en-gb/work.html`, `en-gb/contact.html`, and case studies in `en-gb/cases/`).
  * Bundled CSS assets in `/_next/static/css/` (e.g., `599d8305be7ea574.css`, `f227213fd29ee750.css`, `bf1346dba453b112.css`).
  * Minified Webpack/React chunk bundles in `/_next/static/chunks/` (Framework, Polyfills, Main, Page chunks).
  * 3D assets in `/assets/3d/Shapes/` (`Bonsai.glb`, `Enso.glb`, `Pinwheel.glb`, `TsukiMoon.glb`).
  * Animation JSON files in `/lottie/` (`loader-dc.json`).

### Step 2: The Minimal Express Server Wrapper
To serve the files locally and in cloud container environments, a basic `server.js` was introduced:
```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'en-gb.html'));
});

app.use(express.static(__dirname, {
  extensions: ['html', 'htm']
}));

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
```

### Step 3: The "Symptom Suppressor" Band-Aids
When the pre-rendered HTML loaded in the browser, the Next.js runtime chunks attempted to execute React hydration over static markup. Because the static snapshot had slight DOM variations, missing server runtime state, and missing Storyblok dynamic data endpoints (`_next/data/3c5f...`), React threw hydration mismatch exceptions:
* **Minified React Error #418:** Hydration failed because the initial UI does not match what was rendered on the server.
* **Minified React Error #423:** There was a text content mismatch between client and server.
* **GSAP Warnings:** `GSAP target could not be loaded` / null element references.

To prevent the browser console from blowing up, custom suppression scripts were injected at the top of `<head>` in `en-gb.html`:
```html
<script>
  window.addEventListener('error', function(e) {
    if (e.message && e.message.includes('Minified React error #418')) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });
</script>
<script>
  const originalError = console.error;
  console.error = function(...args) {
    if (typeof args[0] === 'string' && (args[0].includes('Minified React error #418') || args[0].includes('Minified React error #423'))) return;
    originalError.apply(console, args);
  };
  const originalWarn = console.warn;
  console.warn = function(...args) {
    if (typeof args[0] === 'string' && (args[0].includes('GSAP target') || args[0].includes('could not be loaded'))) return;
    originalWarn.apply(console, args);
  };
</script>
```
*Why this is problematic:* Suppressing the console log hides the errors from developers, but the JavaScript execution thread still halts or aborts React hydration, leaving the site in a "dead" or partially frozen state where interactive navigation overlays (`MenuOverlay`), sliders, 3D Canvas bindings, and dynamic page routing do not initialize reliably.

---

## 3. Comprehensive File-System & Architectural Audit

```
├── README.md                      # Root project readme
├── package.json                   # Express dependency & scripts
├── server.js                      # Express static file server
├── en-gb.html                     # Main landing page (Homepage)
├── en-gb/                         # Localized page views
│   ├── about.html                 # About Us page
│   ├── services.html              # Services overview
│   ├── work.html                  # Portfolio / Work archive
│   ├── contact.html               # Contact & Inquiry page
│   └── cases/                     # Case Studies
│       ├── game-on-ball.html
│       ├── pairing-portugal.html
│       └── reverse-media-schedules.html
├── _next/                         # Next.js static asset artifacts
│   ├── static/
│   │   ├── css/                   # Extracted CSS stylesheets
│   │   ├── chunks/                # Minified Webpack & React chunks
│   │   └── 3c5f.../               # Build manifests
│   └── data/                      # Static JSON page props from build
├── assets/
│   └── 3d/
│       └── Shapes/                # 3D GLB Models (Bonsai, Enso, Pinwheel, TsukiMoon)
├── lottie/
│   └── loader-dc.json             # Lottie preloader animation data
├── js/
│   └── components/                # Currently empty component directory
└── css/                           # Currently empty global CSS directory
```

---

## 4. In-Depth Technical Breakdown of the Failure Modes

### 4.1 Root Cause 1: Broken React Hydration & Dead Event Handlers
When Next.js loads on the client:
1. `webpack-...js` boots the runtime.
2. `framework-...js` (React 18) initiates `ReactDOM.hydrateRoot(document.getElementById('__next'))`.
3. React walks the pre-rendered DOM and compares it with the virtual DOM generated by `_app.js` and `[[...slug]].js`.
4. Because the bundle expects dynamic runtime context (Storyblok bridge, client window dimensions, cookie states, localized route paths), the comparison fails.
5. React throws Error #418/#423, triggers client-side bailout / re-render, and clears or skips event listener attachment.
6. **Result:** The hamburger menu button, modal dialogs, case study filters, and custom cursor animations fail to respond to click/touch events.

### 4.2 Root Cause 2: Subdirectory Relative Asset Path 404s
* On `en-gb.html` (root), CSS/JS references are written as absolute paths: `/_next/static/...`. These resolve correctly to `http://localhost:3000/_next/static/...`.
* In `en-gb/about.html`, `en-gb/services.html`, etc., the script tags are written with relative paths:
  ```html
  <script src="./_next/static/chunks/webpack-7d991f5790b6da22.js" defer=""></script>
  ```
* When a user visits `/en-gb/about.html` or `/en-gb/about`, the browser requests:
  `http://localhost:3000/en-gb/_next/static/chunks/webpack-7d991f5790b6da22.js`
* Because `_next` exists only at `/` and not inside `/en-gb/`, the server returns **HTTP 404 Not Found** for every single JavaScript and CSS file on subpages.

### 4.3 Root Cause 3: Express Routing & URL Canonicalization Deficiencies
The current `server.js` only explicitly routes `/` to `en-gb.html`.
* Navigating to clean URLs like `/about`, `/services`, `/work`, `/contact`, or `/cases/game-on-ball` fails with a 404 error because they reside inside the `en-gb/` folder and `en-gb/cases/` folder.
* There is no URL rewriting, locale redirection (e.g. `/` -> default view), or fallback error page handling.

### 4.4 Root Cause 4: Three.js WebGL Canvas Initialization Failure
The project includes premium 3D models (`Bonsai.glb`, `Enso.glb`, `Pinwheel.glb`, `TsukiMoon.glb`). 
* In the original Next.js bundle, these were loaded via dynamic React Three Fiber / Three.js modules tied to scroll position and hover states.
* Because the React lifecycle breaks during hydration, the WebGL `<canvas>` either never initializes or hangs on the initial loader screen.

---

## 5. Architectural Evaluation & Strategic Options

To take this platform to production quality, we have three technical routes:

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   STRATEGIC PATHWAYS                                        │
├──────────────────────────────┬──────────────────────────────┬───────────────────────────────┤
│ Option 1: Clean Decoupled    │ Option 2: Native Next.js     │ Option 3: Surgical Patch &    │
│ Web Standards (RECOMMENDED)  │ Full Modern Rebuild          │ Next Static Repair (Band-Aid) │
├──────────────────────────────┼──────────────────────────────┼───────────────────────────────┤
│ • Decouple from broken React │ • Initialize clean Next.js   │ • Fix Express routing paths   │
│   minified hydration chunks  │   App/Pages router project   │ • Replace `./_next` with      │
│ • Keep rich static HTML/CSS  │ • Reconstruct React component│   `/_next` across all files   │
│ • Implement vanilla/ESM      │   hierarchy from scratch     │ • Mock `_next/data` JSON      │
│   controllers (GSAP, Three,  │ • Integrate Tailwind/PostCSS │ • Retain legacy minified      │
│   Navigation, Sliders)       │ • Migrate GLB models to R3F  │   chunks and suppressed logs  │
│                              │                              │                               │
│ Speed to Market: FAST        │ Speed to Market: SLOW        │ Speed to Market: IMMEDIATE    │
│ Stability: 100% BULLETPROOF  │ Stability: HIGH              │ Stability: FRAGILE / BRITTLE  │
│ Maintainability: EXCELLENT   │ Maintainability: ENTERPRISE  │ Maintainability: POOR         │
│ Performance: MAXIMUM         │ Performance: HIGH            │ Performance: MEDIUM           │
└──────────────────────────────┴──────────────────────────────┴───────────────────────────────┘
```

### Deep Dive: Strategy 1 — The Clean Decoupled Modernization (Recommended)
**Concept:** 
The HTML markup and CSS extracted from the original build are exceptionally high fidelity, responsive, and cross-browser tested. The only broken layer is the minified Next.js client-side hydration bridge.

**Execution Steps:**
1. **Remove Next.js Hydration Overhead:** Strip out the minified `<script src="/_next/static/chunks/..." defer>` bundles from `en-gb.html` and subpages.
2. **Preserve Complete Styling:** Keep the compiled CSS in `_next/static/css/` (or consolidate into a clean `css/style.css` bundle) ensuring 100% pixel-perfect desktop and mobile rendering.
3. **Build Modular Frontend Controllers (`js/`):**
   * `js/navigation.js`: Handles hamburger toggle, full-screen menu overlay transitions, active page indicators, and smooth scrolling.
   * `js/three-scene.js`: Initializes a clean Three.js WebGL scene to load and animate `Bonsai.glb`, `Enso.glb`, `Pinwheel.glb`, `TsukiMoon.glb` with mouse parallax and scroll rotation.
   * `js/animations.js`: Lightweight GSAP ScrollTrigger setup for section reveals, fade-ups, and text reveals.
   * `js/loader.js`: Lottie player parsing `lottie/loader-dc.json` for smooth page entry.
4. **Configure Express Routing & Clean URLs:**
   * Update `server.js` with clean route mapping:
     * `/` -> `en-gb.html`
     * `/about` -> `en-gb/about.html`
     * `/services` -> `en-gb/services.html`
     * `/work` -> `en-gb/work.html`
     * `/contact` -> `en-gb/contact.html`
     * `/cases/:slug` -> `en-gb/cases/:slug.html`
   * Implement 404 fallback page and static asset caching headers.
5. **Brand Refinement:** Finalize all metadata, titles, and text strings to reflect **Digital Magnet Productions**.

---

## 6. Immediate Action Items & Implementation Plan

| Phase | Milestone | Actions | Priority |
|---|---|---|---|
| **Phase 1** | **Server Routing & Path Normalization** | Fix `server.js` clean route aliases, resolve relative `./_next/` paths in all HTML files, and test HTTP 200 responses across all pages. | 🔴 High |
| **Phase 2** | **Hydration Decoupling & Error Removal** | Strip dead React runtime chunks, remove error suppression hacks, and verify clean browser console execution. | 🔴 High |
| **Phase 3** | **Interactive UI Controllers** | Write clean, modular ES6/TypeScript controllers for Navigation Menu (`MenuOverlay`), Case Study Sliders, and Form validation. | 🟡 Medium |
| **Phase 4** | **3D WebGL & Animation Engine** | Implement standalone Three.js GLTF loader for GLB shapes and bind GSAP scroll animations. | 🟡 Medium |
| **Phase 5** | **Performance & Production Polish** | Optimize asset delivery, verify responsive viewports, and run automated lint/compilation checks. | 🟢 Polish |

---

## 7. Questions for Senior Colleague / Technical Guidance

1. **Architecture Preference:** Do you prefer keeping the decoupled static HTML + vanilla modern ES6/GSAP architecture (Option 1 - zero build dependencies, ultra-fast TTFB), or do you want to refactor the entire system into a full native Next.js 14/15 TypeScript application (Option 2)?
2. **3D Assets & Interaction:** For the 3D shapes (`Bonsai.glb`, `Enso.glb`, `Pinwheel.glb`, `TsukiMoon.glb`), should we implement an interactive cursor-follow canvas or a scroll-linked camera rotation?
3. **Form Handling on Contact Page:** Should the `/contact` form submit to a server-side Express `/api/contact` endpoint (with email dispatch / Firestore storage) or connect to an external CRM webhook?

---
*Ready to proceed with execution based on direction.*
