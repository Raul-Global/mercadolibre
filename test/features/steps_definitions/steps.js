
import puppeteer from "puppeteer";
import { Given, When, Then } from "@cucumber/cucumber"

let browser, page;
let productos = [];
let precios = [];
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

    const elemt =await page.waitForSelector("::-p-xpath(//span[contains(@class,'andes-dropdown__display-values')])"); 
    elemt.click ();
    const elemt2 = await page.waitForSelector("::-p-xpath(//li[contains(@class,'andes-list__item andes-list__item--size-medium')]//span[contains(text(),'Mayor')])"); 
    elemt2.click ();
  });

  Then("Obtain the name and the price of the first 5 products", async function () {

    var element = await page.waitForSelector("::-p-xpath((//a[contains(@class,'poly-component__title')])[1])");
    let name = await element.evaluate(el => el.textContent);
    productos.push(name); 
    var elementPrice = await page.waitForSelector("::-p-xpath((//div [contains(@class,'poly-content')]//div[contains(@class,'poly-content__column')]//div//span[contains(@class,'andes-money-amount__fraction')])[1])");
    var price = await elementPrice.evaluate(el => el.textContent);
    precios.push(price);
    console.log("-----------VALOR: "+name+"-----------------"+price);
    
    element =await page.waitForSelector("::-p-xpath((//a[contains(@class,'poly-component__title')])[2])");
    name = await element.evaluate(el => el.textContent);
    productos.push(name); 
    elementPrice = await page.waitForSelector("::-p-xpath((//div [contains(@class,'poly-content')]//div[contains(@class,'poly-content__column')]//div//span[contains(@class,'andes-money-amount__fraction')])[5])");
    price = await elementPrice.evaluate(el => el.textContent);
    precios.push(price);
    console.log("-----------VALOR: "+name+"-----------------"+price);

    element =await page.waitForSelector("::-p-xpath((//a[contains(@class,'poly-component__title')])[2])");
    name = await element.evaluate(el => el.textContent);
    productos.push(name); 
    elementPrice = await page.waitForSelector("::-p-xpath((//div [contains(@class,'poly-content')]//div[contains(@class,'poly-content__column')]//div//span[contains(@class,'andes-money-amount__fraction')])[7])");
    price = await elementPrice.evaluate(el => el.textContent);
    precios.push(price);
    console.log("-----------VALOR: "+name+"-----------------"+price);

    element =await page.waitForSelector("::-p-xpath((//a[contains(@class,'poly-component__title')])[2])");
    name = await element.evaluate(el => el.textContent);
    productos.push(name); 
    elementPrice = await page.waitForSelector("::-p-xpath((//div [contains(@class,'poly-content')]//div[contains(@class,'poly-content__column')]//div//span[contains(@class,'andes-money-amount__fraction')])[10])");
    price = await elementPrice.evaluate(el => el.textContent);
    precios.push(price);
    console.log("-----------VALOR: "+name+"-----------------"+price);

    element =await page.waitForSelector("::-p-xpath((//a[contains(@class,'poly-component__title')])[2])");
    name = await element.evaluate(el => el.textContent);
    productos.push(name); 
    elementPrice = await page.waitForSelector("::-p-xpath((//div [contains(@class,'poly-content')]//div[contains(@class,'poly-content__column')]//div//span[contains(@class,'andes-money-amount__fraction')])[12])");
    price = await elementPrice.evaluate(el => el.textContent);
    precios.push(price);
    console.log("-----------VALOR: "+name+"-----------------"+price);
    
  
  });

  
  Then("Print these products in the console", function () {
    // Write code here that turns the phrase above into concrete actions
    return productos.forEach((producto, index) => {
      console.log(`Producto ${index + 1}: ${producto} precio : ${precios[index]}`);

      });
  });

