import { test } from "@playwright/test";

test.describe("Locator Object Methods", () => {
  //creata before each for test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("check() method checks the radio buttons and checkboxes if they have not been checked yet", async ({
    page,
  }) => {
    // check() ==>radio button click
    let checkBoxesLink = page.locator("text='Checkboxes'");
    await checkBoxesLink.click();
    let checkBox1 = page.locator("#box1");
    await checkBox1.check();
  });

  test("uncheck() unchecks the radi btns and checkboxes if they have not been unchecked yet", async ({
    page,
  }) => {
    let checkBoxesLink = page.locator("text='Checkboxes'");
    await checkBoxesLink.click();
    let checkBox2 = page.locator("#box2");
    await checkBox2.uncheck();
  });

  test("selectOption() used for dropdowns", async ({ page }) => {
    //byvalue, byindex,byvisibletext

    await page.locator("text='Dropdown'").click();
    let simpleDropdown = page.locator("//select[@id='dropdown']");
    // wait for 3 seconds
    // select by visible text
    //simpleDropdown.selectOption("Option 1");
    simpleDropdown.selectOption({ label: "Option 1" });
    // select by value
    simpleDropdown.selectOption("2");

    // select by index
    simpleDropdown.selectOption({ index: 1 });
  });

  //Creating empty test
  test("innerText() retrives the visible text", async ({ page }) => {
    let headerElement = page.locator("//span[@class='h1y']");

    let actualText = await headerElement.innerText();

    console.log(actualText);
  });

  test("inputValue() only works with <input>, <textarea>,<select> tag element", async ({
    page,
  }) => {
    //await page.getByText("Inputs").click();

    // let inputsLink = page.locator("text='Inputs'");
    // await inputsLink.click();

    let inputsLink = page.getByText("Inputs");
    //  await inputsLink.scrollIntoViewIfNeeded();
    //    await inputsLink.click();

    let inputBox = page.locator("//input[@type='number']");
    await inputBox.click();
    await inputBox.fill("222");

    console.log(await inputBox.inputValue());
  });
});
