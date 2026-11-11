const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const results = {};

  // 1. Test viewports for horizontal overflow
  const testViewports = [
    { name: '360px', width: 360, height: 740 },
    { name: '375px', width: 375, height: 667 },
    { name: '390px', width: 390, height: 844 },
    { name: '393px', width: 393, height: 852 },
    { name: '412px', width: 412, height: 915 },
    { name: '430px', width: 430, height: 932 },
    { name: '768px', width: 768, height: 1024 },
  ];

  for (const vp of testViewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    
    // Check horizontal overflow
    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const bodyScrollWidth = document.body.scrollWidth;
      
      const elements = Array.from(document.querySelectorAll('*'));
      const overflowing = [];
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.right > docWidth + 1 || rect.left < -1) {
          overflowing.push({
            tag: el.tagName,
            cls: typeof el.className === 'string' ? el.className.slice(0, 50) : '',
            id: el.id,
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width)
          });
        }
      }
      return {
        docWidth,
        scrollWidth,
        bodyScrollWidth,
        hasHorizontalScroll: scrollWidth > docWidth || bodyScrollWidth > docWidth,
        overflowCount: overflowing.length,
        overflowing: overflowing.slice(0, 5)
      };
    });

    results[vp.name] = overflow;
    await page.close();
  }

  // 2. In-depth inspection & screenshots at 390px
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  // A. Nav at top
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_01_nav_top.png') });

  // B. Scroll to second page (#integrations) -> compact nav pill with boxy radius
  await page.evaluate(() => {
    const el = document.getElementById('integrations');
    if (el) window.scrollTo(0, el.offsetTop + 20);
    else window.scrollTo(0, 700);
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_02_nav_scrolled.png') });

  // Verify compact nav pill size and border-radius
  const navPillRect = await page.evaluate(() => {
    const pill = document.querySelector('.mobile-nav-root [role="button"]');
    if (!pill) return null;
    const r = pill.getBoundingClientRect();
    const style = window.getComputedStyle(pill);
    return {
      width: Math.round(r.width),
      height: Math.round(r.height),
      right: Math.round(r.right),
      top: Math.round(r.top),
      borderRadius: style.borderRadius
    };
  });

  // C. Open mobile menu
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  const menuTrigger = await page.$('.mobile-nav-root [role="button"]');
  if (menuTrigger) {
    await menuTrigger.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_03_menu_open.png') });
    // Close menu by clicking Close button
    const closeBtn = await page.$('button[aria-label="Close menu"]');
    if (closeBtn) {
      await closeBtn.click();
    } else {
      await page.keyboard.press('Escape');
    }
    await page.waitForTimeout(400);
  }

  // D. Hero section
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_04_hero.png') });

  // E. Layers section (#integrations)
  const layersSec = await page.$('#integrations');
  if (layersSec) {
    await layersSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_05_layers_stack.png') });
  }

  // F. Advantage section (#features)
  const advSec = await page.$('#features');
  if (advSec) {
    await advSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_06_advantage.png') });
  }

  // G. Client Story
  const clientSec = await page.$('section:has(.client-story-quote)');
  if (clientSec) {
    await clientSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_07_client_story.png') });
  }

  // H. Pricing section
  const pricingSec = await page.$('#pricing');
  if (pricingSec) {
    await pricingSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_08_pricing.png') });
  }

  // I. Guarantee section
  const guarSec = await page.$('#guarantee');
  if (guarSec) {
    await guarSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_09_guarantee.png') });
  }

  // J. Envelope section
  const envSec = await page.$('#mobile-envelope-section');
  if (envSec) {
    await envSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_10_envelope.png') });
  }

  // K. FAQ section
  const faqSec = await page.$('#faq');
  if (faqSec) {
    await faqSec.scrollIntoViewIfNeeded();
    // Click first FAQ to show accordion expansion
    const firstFaqBtn = await page.$('#faq button');
    if (firstFaqBtn) await firstFaqBtn.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_11_faq.png') });
  }

  // L. Call Booking section
  const bookSec = await page.$('#booking');
  if (bookSec) {
    await bookSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_12_booking_cta.png') });
  }

  // M. Footer
  const footer = await page.$('footer');
  if (footer) {
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_13_footer.png') });
  }

  // Measure gaps between visible sections
  const gapMetrics = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section, footer'))
      .filter(el => window.getComputedStyle(el).display !== 'none');
    const gaps = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const currRect = sections[i].getBoundingClientRect();
      const nextRect = sections[i + 1].getBoundingClientRect();
      const styleCurr = window.getComputedStyle(sections[i]);
      const styleNext = window.getComputedStyle(sections[i + 1]);
      
      const gap = nextRect.top - currRect.bottom;
      gaps.push({
        from: sections[i].id || sections[i].tagName,
        to: sections[i + 1].id || sections[i + 1].tagName,
        currPaddingBottom: styleCurr.paddingBottom,
        nextPaddingTop: styleNext.paddingTop,
        computedGap: Math.round(gap)
      });
    }
    return gaps;
  });

  await page.close();

  // 3. Check desktop at 1280px to verify desktop is 100% pixel-identical light theme
  const pageDesk = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await pageDesk.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await pageDesk.screenshot({ path: path.join(ARTIFACTS_DIR, 'verify_14_desktop_1280.png') });
  
  const desktopThemeCheck = await pageDesk.evaluate(() => {
    const bg = window.getComputedStyle(document.body).backgroundColor;
    const nav = document.querySelector('nav');
    const navBg = nav ? window.getComputedStyle(nav).backgroundColor : null;
    const heroH1 = document.querySelector('h1');
    const h1Color = heroH1 ? window.getComputedStyle(heroH1).color : null;
    const h1Size = heroH1 ? window.getComputedStyle(heroH1).fontSize : null;
    return {
      bodyBg: bg,
      navBg,
      h1Color,
      h1Size
    };
  });

  await pageDesk.close();
  await browser.close();

  console.log(JSON.stringify({
    results,
    navPillRect,
    gapMetrics,
    desktopThemeCheck
  }, null, 2));
}

run().catch(console.error);
