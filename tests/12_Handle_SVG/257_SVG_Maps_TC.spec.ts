import {test, expect, Locator} from '@playwright/test';

const simpleMaps = "https://simplemaps.com/svg/country/in";

test.describe('SVG Maps Handling', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(simpleMaps);   
        
    });



    test('Verify the SVG Maps', async ({ page }) => {
        const states = await page.locator("//*[local-name()='svg']//*[local-name()='path' and contains(@class,'sm_state')]",).all();

        for(const state of states) {
            const classState = await state.getAttribute('class');
            console.log(classState);

            if(classState?.includes("INUP")) {
                state.click();

        }
    }

    
        await page.pause();
    });


});
























//       //div[@id='admin1_map_inner']//*[name()='svg']//*name()='path' and contains(@class,'sm_state')]