
const puppeteer = require('puppeteer');

async function run(){

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://www.utoronto.ca/news');
    //await page.pdf({path: 'example.pdf', format:'A4'});
    //const html = await page.content();
const links = await page.evaluate(()=> Array.from(document.querySelectorAll('a'), (e)=>e.href));
console.log(links);
    await browser.close();

}

run();