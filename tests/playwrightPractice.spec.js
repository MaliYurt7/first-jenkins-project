import { test } from "@playwright/test";

test("Youtube Search", async ({ page }) => {
  //if "async" word is NOT used and "await" word is used, THEN IT GIVES -SYNTAXERROR-
  // If "await" word will be used, then "async" word has to be used.
  await page.goto("http://www.youtube.com");

  let rejectAll = page.locator("//span[text()='Reject all']");

  await rejectAll.click();

  let searchBox = page.locator(
    "//input[@name='search_query' and @id='search']"
  );
  await searchBox.click();

  await searchBox.fill("Cydeo");

  await searchBox.press("Enter");

  let firstVideo = page.locator(
    "//yt-formatted-string[contains(., 'Free SDET Training Series')]"
  );
  await firstVideo.click();
});
