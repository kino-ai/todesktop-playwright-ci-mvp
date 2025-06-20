const path = require('path');
const { _electron: electron } = require('playwright');
const { test, expect } = require('@playwright/test');

// This test demonstrates basic Electron automation with Playwright.
// It launches the local Electron application, grabs the first window, and verifies the window title.

test('Launch Electron app and verify title', async () => {
  // Path to the Electron app root (project directory)
  const appDir = path.join(__dirname, '..');

  // Launch the Electron application.
  const electronApp = await electron.launch({ args: [appDir] });

  // Acquire the first BrowserWindow that is opened by the app.
  const window = await electronApp.firstWindow();

  // Assert that the window title includes the product name.
  await expect(window).toHaveTitle(/Hello World!/i);

  // Close the Electron application when done.
  await electronApp.close();
}); 