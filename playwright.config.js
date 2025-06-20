const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  reporter: [[ 'list' ], [ 'html', { outputFolder: 'playwright-report', open: 'never' } ]],
}); 