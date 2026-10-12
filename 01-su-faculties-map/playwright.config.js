import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // За да бъдат всички снимки платформено независими. В противен случай ще имаме нето от рода на: faculties-list-chromium-linux.png
  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}{ext}',
  fullyParallel: true,
  reporter: 'line',
  use: {
    baseURL: 'http://localhost:5175',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run test:web-server',
    url: 'http://localhost:5175',
  },
});
