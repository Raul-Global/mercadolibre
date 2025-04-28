
import puppeteer from "puppeteer";
import { Given, When, Then } from "@cucumber/cucumber";

let browser, page;
let productos = [];
let p1;
Given  ('Enter the website', async function () {
browser = await puppeteer.launch({ headless: false });
page = await browser.newPage();

await page.goto("https://www.mercadolibre.com/");
});

When ("Select Mexico as a country", async function () {
await page.click("a#MX.ml-site-link");   
});

 Then("Search for the term playstation 5", async function () {
await page.waitForSelector("input#cb1-edit.nav-search-input",{Timeout:  5000});
await page.locator("input#cb1-edit.nav-search-input").fill("playstation 5");
await page.keyboard.press("Enter");
  });




  Then("Filter by condition Nuevos", async function () {  

    
    await page.locator("::-p-xpath((//span[contains(text(),'Nuevo')])[2])").click ()  ; 


  });



  Then("Filter by location Cdmx", async function () {
    await page.locator("::-p-xpath(//span[contains(text(),'Distrito')])").click () ; 

  });

  
  Then("Order by mayor a menor precio", async function () {

    await page.locator("::-p-xpath(//span[contains(@class,'andes-dropdown__display-values')])").click () ; 
    await page.locator("::-p-xpath(//li[contains(@class,'andes-list__item andes-list__item--size-medium')]//span[contains(text(),'Mayor')])").click () ; 

  });

  Then("Obtain the name and the price of the first 5 products", async function () {

    //await page.locator("::-p-xpath((//div[contains(@class,'poly-card__content')]//h3)[1])").textContent();
     p1=await page.locator("::-p-xpath((//a[contains(@class,'poly-component__title')])[1])");
     

    
     console.log("-----------VALOR: "+p1.innerHTML+"-----------------");

   /* productos.push(await page.locator("::-p-xpath((//div[contains(@class,'poly-card__content')]//h3)[2])"));
    console.log(await page.locator("::-p-xpath((//div[contains(@class,'poly-card__content')]//h3)[2])"));

    productos.push(await page.locator("::-p-xpath((//div[contains(@class,'poly-card__content')]//h3)[3])"));
    console.log(await page.locator("::-p-xpath((//div[contains(@class,'poly-card__content')]//h3)[3])"));

    productos.push(await page.locator("::-p-xpath((//div[contains(@class,'poly-card__content')]//h3)[4])"));
    console.log(await page.locator("::-p-xpath((//div[contains(@class,'poly-card__content')]//h3)[4])"));

    productos.push(await page.locator("::-p-xpath((//div[contains(@class,'poly-card__content')]//h3)[5])"));
    console.log(await page.locator("::-p-xpath((//div[contains(@class,'poly-card__content')]//h3)[5])"));
*/
 
  });

  
  Then("Print these products in the console", function () {
    // Write code here that turns the phrase above into concrete actions
    return productos.forEach((producto, index) => {
      console.log(`Producto ${index + 1}: ${producto.innerHTML}`);
    });
  });

