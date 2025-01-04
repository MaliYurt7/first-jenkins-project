import { test } from '@playwright/test';

test.describe("-Test Group1 or User Story-", () => {
    // benefit of "test.describe"
    // 1) run all tests in one click on the left side of "test.describe("user story",() =>"
    // 2) hooks helps us to setup and teardown tests

    test.beforeAll(async () => {
        console.log("Before all is executed");
    });

    test.afterAll(async () => {
        console.log("After all is executed");

    });

    test.beforeEach(async () => {
        console.log("BeforeEach is executed");
    });

    test.afterEach(async () => {
        console.log("AfterEach is executed");
    });



    test("Test Case 1", async ({ page }) => {
        console.log("test case 1 started");
    });

    test("Test Case 2", async ({ page }) => {
        console.log("test case 2 started");
    });


    test("Test Case 3", async ({ page }) => {
        console.log("test case 3 started");
    });



});

