/**
 * Digital Magnet Productions — Reference Site Extraction Script
 * Captures: DOM structure, GSAP/ScrollTrigger configs, Next.js content data,
 * image inventory, and canvas/Three.js/Lottie scene metadata — per page.
 *
 * Runs inside GitHub Actions (see .github/workflows/extract-site-data.yml)
 * or locally with: npm install puppeteer && node extract.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.dentsucreative.com';
const OUTPUT_DIR = './extracted';

// Core pages to extract. Add discovered case-study paths here after the
// first run (see discovered-case-links.json written under work/).
const PAGES = [
  { name: 'home', path: '/en-gb' },
  { name: 'about', path: '/en-gb/about' },
  { name: 'services', path: '/en-gb/services' },
  { name: 'work', path: '/en-gb/work' },
  { name: 'contact', path: '/en-gb/contact' },
  // { name: 'case-game-on-ball', path: '/en-gb/cases/game-on-ball' },
  // { name: 'case-pairing-portugal', path: '/en-gb/cases/pairing-portugal' },
  // { name: 'case-reverse-media-schedules', path: '/en-gb/cases/reverse-media-schedules' },
];

const VIEWPORT = { width: 1920, height: 1080 };
const SETTLE_DELAY_MS = 2500;      // let GSAP/Lottie/Three finish mounting after load
const SCROLL_STEP_PX = 400;        // increment for the pre-capture scroll pass
const SCROLL_STEP_DELAY_MS = 150;  // pause between scroll steps (lets IntersectionObservers fire)

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Scrolls the full page height in small steps, then returns to top.
 *  Forces lazy-mounted elements and scroll-triggered animations to register
 *  before we query ScrollTrigger.getAll(). */
async function forceFullPageMount(page) {
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < pageHeight; y += SCROLL_STEP_PX) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await wait(SCROLL_STEP_DELAY_MS);
  }
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await wait(SETTLE_DELAY_MS);
  await page.evaluate(() => window.scrollTo(0, 0));
  await wait(500);
}

async function extractPage(browser, pageConfig) {
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  const consoleErrors = [];
  page.on('pageerror', (err) => consoleErrors.push(err.toString()));
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  const url = BASE_URL + pageConfig.path;
  console.log(`Extracting: ${pageConfig.name} (${url})`);

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await wait(SETTLE_DELAY_MS);

  // Force lazy content / scroll-triggered elements to mount before we
  // read animation state, then return to resting position.
  await forceFullPageMount(page);

  // ---------- 1. DOM STRUCTURE (resting state, scroll = 0) ----------
  const domSnapshot = await page.evaluate(() => document.documentElement.outerHTML);

  // ---------- 2. GSAP / SCROLLTRIGGER ANIMATION CONFIGS ----------
  const gsapData = await page.evaluate(() => {
    const result = { gsapLoaded: false, scrollTriggerLoaded: false, scrollTriggers: [] };
    try {
      result.gsapLoaded = typeof gsap !== 'undefined';
      result.scrollTriggerLoaded = typeof ScrollTrigger !== 'undefined';

      if (result.scrollTriggerLoaded) {
        result.scrollTriggers = ScrollTrigger.getAll().map((st, i) => {
          let animationVars = null;
          let animationChildren = null;
          try {
            animationVars = st.animation ? st.animation.vars : null;
            animationChildren =
              st.animation && st.animation.getChildren
                ? st.animation.getChildren().map((child) => ({
                    vars: child.vars,
                    duration: child.duration(),
                    startTime: child.startTime(),
                  }))
                : null;
          } catch (e) {
            /* some tweens don't expose getChildren — skip silently */
          }

          return {
            index: i,
            triggerTag: st.trigger ? st.trigger.tagName : null,
            triggerId: st.trigger ? st.trigger.id : null,
            triggerClasses: st.trigger ? st.trigger.className : null,
            start: st.start,
            end: st.end,
            pin: !!st.pin,
            pinSpacing: st.vars ? st.vars.pinSpacing : null,
            scrub: st.vars ? st.vars.scrub : null,
            toggleActions: st.vars ? st.vars.toggleActions : null,
            markers: st.vars ? st.vars.markers : null,
            animationVars,
            animationChildren,
          };
        });
      }
    } catch (e) {
      result.error = e.toString();
    }
    return result;
  });

  // ---------- 3. NEXT.JS CONTENT DATA ----------
  const nextData = await page.evaluate(() => {
    const el = document.getElementById('__NEXT_DATA__');
    if (!el) return null;
    try {
      return JSON.parse(el.textContent);
    } catch (e) {
      return { parseError: e.toString() };
    }
  });

  // ---------- 4. IMAGE INVENTORY (rendered <img> + CSS background-image) ----------
  const images = await page.evaluate(() => {
    const seen = new Map();

    document.querySelectorAll('img').forEach((img) => {
      const src = img.currentSrc || img.src;
      if (!src) return;
      seen.set(src, {
        src,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight,
        classes: img.className,
        type: 'img',
      });
    });

    document.querySelectorAll('*').forEach((el) => {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('http')) {
        const match = bg.match(/url\(["']?(.*?)["']?\)/);
        if (match && match[1]) {
          seen.set(match[1], { src: match[1], classes: el.className, type: 'background-image' });
        }
      }
    });

    return Array.from(seen.values());
  });

  // ---------- 5. CANVAS / THREE.JS / LOTTIE SCENE METADATA ----------
  const sceneData = await page.evaluate(() => {
    const result = { canvases: [], lottiePlayers: [], globalsDetected: [] };

    document.querySelectorAll('canvas').forEach((c, i) => {
      result.canvases.push({
        index: i,
        id: c.id,
        classes: c.className,
        width: c.width,
        height: c.height,
        parentClasses: c.parentElement ? c.parentElement.className : null,
        parentId: c.parentElement ? c.parentElement.id : null,
      });
    });

    document.querySelectorAll('lottie-player, [data-lottie], .lottie').forEach((l, i) => {
      result.lottiePlayers.push({
        index: i,
        tag: l.tagName,
        src: l.getAttribute('src') || l.getAttribute('data-src'),
        classes: l.className,
      });
    });

    ['THREE', 'gsap', 'ScrollTrigger', 'Lottie', 'lottie'].forEach((g) => {
      if (typeof window[g] !== 'undefined') result.globalsDetected.push(g);
    });

    return result;
  });

  // ---------- Bonus: discover case-study links from the work page ----------
  if (pageConfig.name === 'work') {
    const caseLinks = await page.evaluate(() => {
      const links = new Set();
      document.querySelectorAll('a[href*="/cases/"]').forEach((a) => links.add(a.getAttribute('href')));
      return Array.from(links);
    });
    const workOutDir = path.join(OUTPUT_DIR, 'work');
    fs.mkdirSync(workOutDir, { recursive: true });
    fs.writeFileSync(path.join(workOutDir, 'discovered-case-links.json'), JSON.stringify(caseLinks, null, 2));
    console.log(`  -> Discovered ${caseLinks.length} case study links. Add them to PAGES[] and re-run.`);
  }

  // ---------- Write outputs ----------
  const outDir = path.join(OUTPUT_DIR, pageConfig.name);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'dom.html'), domSnapshot);
  fs.writeFileSync(path.join(outDir, 'gsap-animations.json'), JSON.stringify(gsapData, null, 2));
  fs.writeFileSync(path.join(outDir, 'next-data.json'), JSON.stringify(nextData, null, 2));
  fs.writeFileSync(path.join(outDir, 'images.json'), JSON.stringify(images, null, 2));
  fs.writeFileSync(path.join(outDir, 'scene-data.json'), JSON.stringify(sceneData, null, 2));
  fs.writeFileSync(path.join(outDir, 'console-errors.json'), JSON.stringify(consoleErrors, null, 2));

  console.log(
    `  -> Done. ScrollTriggers: ${gsapData.scrollTriggers.length} | Images: ${images.length} | Canvases: ${sceneData.canvases.length} | Lottie: ${sceneData.lottiePlayers.length}`
  );

  await page.close();
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'], // required on GitHub Actions runners
  });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const pageConfig of PAGES) {
    try {
      await extractPage(browser, pageConfig);
    } catch (err) {
      console.error(`FAILED: ${pageConfig.name} — ${err.toString()}`);
    }
  }

  await browser.close();
  console.log('\nExtraction complete. Output in ./extracted/');
})();
