import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// Uncomment below to load environment variables (recommended for secret mgmt)
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * Playwright test configuration.
 * See: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in parallel within each file (not across files unless using sharding) */
  fullyParallel: true,

  /* Prevent accidental use of test.only in CI builds */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests on CI to handle flakiness */
  retries: process.env.CI ? 2 : 0,

  /* Limit to 1 worker on CI to avoid resource issues */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter options: you can combine reporters (e.g., HTML + Allure) */
  // reporter: [['list'], ['html'], ['allure-playwright']],
  reporter: [['allure-playwright']],

  /* Global test options */
  use: {
    /* Useful if you have a base URL (e.g., in staging or production env) */
    // baseURL: process.env.BASE_URL || 'http://localhost:3000',

    /* Automatically collect trace on retry to debug flaky tests */
    trace: 'on-first-retry',

    // Optional: enable video only on failure (helpful for debugging)
    // video: 'retain-on-failure',

    // Optional: enable screenshot on failure
    // screenshot: 'only-on-failure',
  },

  /* Define browser-specific projects */
  projects: [
  { name: 'Desktop Chrome', use: { browserName: 'chromium' } },
  { name: 'Desktop Edge', use: { channel: 'msedge' } },
  { name: 'Desktop Firefox', use: { browserName: 'firefox' } },
  { name: 'Desktop Safari', use: { browserName: 'webkit' } },
  { name: 'Mobile Chrome', use: devices['Pixel 5'] },
  { name: 'Mobile Safari', use: devices['iPhone 12'] },
],

  /* Optional: Start dev server before tests (E2E testing) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  // Suggestion: Enable test artifacts output folder (optional)
  // outputDir: 'test-results',
});
