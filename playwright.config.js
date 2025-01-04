// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  /**
   *  testDir: './tests' ==> test directory is selcting the test folder.
   */
  testDir: "./tests",
  /* Run tests in files in parallel */
  /* fullyParallel: true ==> runs parallel (paralel calistirmak icin)*/
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /*envrionement variables */
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  /* the benefit of increaseing the workers reduce the time of tests running 
  1 worker(browser)   100 tests 100sec
  5 workers(browsers) 100 tests  20sec
  workers calistirilmak istenen browser sayisini belirtir ve test case sayisina gore kendini duzenler
  2 test case var ve 1 workers varsa , 1 browser acilir.2 workers varsa, 2 test case icin 2 worker acilir.
  */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    /*
      headless:false ==> show browser while test runs
    */
    headless: true,
  },

  /* Configure projects for major browsers (enabling the browsers for the testing perspective)*/
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],

        viewport: { width: 1850, height: 1000 }, //set the size of the chrome window
      },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    /*
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
