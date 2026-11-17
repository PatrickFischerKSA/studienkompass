import assert from 'node:assert/strict';
import { chromium } from 'playwright';

assert.equal(process.platform, 'win32');
const browser = await chromium.launch({channel: 'msedge'});
try {
  const context = await browser.newContext({viewport:{width:1366,height:768}});
  const page = await context.newPage();
  await page.goto('https://patrickfischerksa.github.io/studienkompass/#beratung');
  assert.match(await page.evaluate(() => navigator.userAgent), /Edg\//);
  const choice = value => page.locator('#career-questions [data-choice]').and(page.locator(`[data-choice="${value}"]`));
  await choice('education').click();
  await choice('study').click();
  await choice('teach').click();
  await page.locator('#career-back').click();
  assert.equal(await choice('teach').getAttribute('aria-pressed'), 'true');
  await choice('language').click();
  await choice('patient').click();
  await choice('listen').click();
  await choice('all').click();
  await choice('').click();
  assert.match(await page.locator('.shortlist-table').innerText(), /Logopädie/);
  const link = page.locator('.shortlist-table a[target="_blank"]').first();
  const popupPromise = page.waitForEvent('popup');
  await link.click();
  const popup = await popupPromise;
  await popup.close();
  assert.match(await page.locator('.shortlist-table').innerText(), /Logopädie/);
  console.log(`Microsoft Edge ${browser.version()} on Windows: back, changed answer, results, external tab passed`);
} finally {
  await browser.close();
}
