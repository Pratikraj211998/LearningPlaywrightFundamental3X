import {test, expect, Locator} from '@playwright/test';

test("Choose an element from the table and click the preceding checkbox", async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    //table[@aria-label='Employee Management System table']/tbody/tr[3]/td[1]

    const firstSection = "//table[@aria-label='Employee Management System table']/tbody/tr[";
    const secondSection = "]/td[";
    const thirdSection = "]";

    const rows = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr").count();
    const cols = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[3]/td").count();

    for (let i = 1; i <= rows; i++) {

        for (let j = 1; j <= cols; j++) {

            const tempPath = `${firstSection}${i}${secondSection}${j}${thirdSection}`;
            console.log(tempPath);
            const data = await page.locator(tempPath).innerText();      
            console.log(data);

            if (data.includes('Rohan.Mehta')) {
                const userName = `${tempPath}/preceding-sibling::td[1]/input[@type='checkbox']`;
                await page.locator(userName).click();
                console.log(`Checkbox for ${data} is clicked.`);
                   
            
            await page.pause();
            }
        }
    }
});