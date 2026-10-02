import { chromium } from "playwright";
async function multiUserTest() {
    let browser = await chromium.launch({ headless: false });
    // Admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: on login page");

    // Viewer
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer: on login page");

    
    await adminContext.close();
    await viewerContext.close();
    await browser.close();

}
multiUserTest();

/* Ans:
Ran the mentioned code, and it successfully launched two separate browser contexts for Admin and Viewer, both navigating to the login page of the specified URL. The console output confirms that both users are on the login page.
Admin: on login page
Viewer: on login page */