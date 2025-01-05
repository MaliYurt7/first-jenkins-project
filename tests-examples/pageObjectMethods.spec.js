import { expect, test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  //goto https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com");
  let actualTitle = await page.title();
  console.log(actualTitle);
  expect(actualTitle).toBe("Practice");
  console.log("second assertion");
  //expect(actualTitle).toBe("Practices");
});

test("Getting the current URL of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com");
  let currentUrl = page.url("https://practice.cydeo.com");
  console.log(currentUrl);
  expect(currentUrl).toBe("https://practice.cydeo.com/");
});

test("Set the window size", async ({ page }) => {
  await page.setViewportSize({ width: 1700, height: 900 });

  await page.goto("https://practice.cydeo.com");

  await page.setViewportSize({ width: 1700, height: 900 });
});
