const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8000/');
    await page.screenshot({path: 'test1.png'});

    const filePath = path.relative(process.cwd(), '../images/uploads-1462948453043.png');
    const input = await page.$('input[name=upload]');
    await input.uploadFile(filePath);
    await page.waitFor(4000)

    await page.screenshot({path: 'test2.png'});

    await browser.close();
})();
