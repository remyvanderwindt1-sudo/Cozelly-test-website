import puppeteer from 'puppeteer';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pageUrl = `file:///${resolve(__dirname, 'cozelly_landing.html').replace(/\\/g, '/')}`;

const browser = await puppeteer.launch();

// Desktop screenshot (1440px wide, full page)
const desktopPage = await browser.newPage();
await desktopPage.setViewport({ width: 1440, height: 900 });
await desktopPage.goto(pageUrl, { waitUntil: 'networkidle0' });
await desktopPage.screenshot({ path: 'screenshot_desktop.png', fullPage: true });
console.log('✓ screenshot_desktop.png');

// Mobile screenshot (390px wide, full page)
const mobilePage = await browser.newPage();
await mobilePage.setViewport({ width: 390, height: 844 });
await mobilePage.goto(pageUrl, { waitUntil: 'networkidle0' });
await mobilePage.screenshot({ path: 'screenshot_mobile.png', fullPage: true });
console.log('✓ screenshot_mobile.png');

await browser.close();
console.log('Done.');
