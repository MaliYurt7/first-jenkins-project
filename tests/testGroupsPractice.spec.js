import { test } from "@playwright/test";

test.describe("Test Group Practice", () => {
  //Create a beforeEach function
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });

  //Create a afterEach function
  test.afterEach(async ({ page }) => {});

  test("Getting the title of the page", async ({ page }) => {
    console.log(await page.title());
  });

  test("Getting the current URL of the page", async ({ page }) => {
    console.log(page.url());
  });

  //test('Set the window size', async ({ page }) => {
  // no need to set the window size as we already set in playwright.cofig.js
  //   });
});

test.describe("@smoke Test Group Practice-2", () => {
  //Create a beforeEach function
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });

  //Create a afterEach function
  test.afterEach(async ({ page }) => {});

  test("Getting the title of the page", async ({ page }) => {
    console.log(await page.title());
  });

  test("Getting the current URL of the page", async ({ page }) => {
    console.log(page.url());
  });

  test("clg", async ({ page }) => {
    console.log("@smoke");
  });
});

test.describe("Test Group Practice-3", () => {
  //Create a beforeEach function
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });

  //Create a afterEach function
  test.afterEach(async ({ page }) => {});

  test("Getting the title of the page", async ({ page }) => {
    console.log(await page.title());
  });

  test("Getting the current URL of the page", async ({ page }) => {
    console.log(page.url());
  });

  test("@sanity clg", async ({ page }) => {
    console.log("@sanity");
  });
});
