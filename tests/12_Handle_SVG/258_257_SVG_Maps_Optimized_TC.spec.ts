import {test, expect, Locator} from '@playwright/test';

const simpleMaps = "https://simplemaps.com/svg/country/in";

test.describe('SVG Maps Handling', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(simpleMaps);   
        
    });



    test('Verify the SVG Maps', async ({ page }) => {

        let allStates = await page.locator('path').all();
        for(const state of allStates) {
            const className = await state.getAttribute('class');
            if(className){
                console.log(className);
            }
            

            if(className?.endsWith("TN")) {
                await state.click();
                console.log("Clicked on TN state");
            }
        }
    

    
        await page.pause();
    });


});