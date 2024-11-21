import { test as setup } from '@playwright/test';

setup('create new database', async ({ page }) => {
  console.log('creating new database...');
  await page.goto('https://toptruyenz.com/');
  // Initialize the database
});
