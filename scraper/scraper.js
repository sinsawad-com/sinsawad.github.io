const playwright = require('playwright');

const LISTING_PAGE = "https://www.rubbertubesinsawad.com/catalog/brand/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%20%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C%20%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94";

async function main() {
  const browser = await playwright.chromium.launch({
    headless: false // setting this to true will not run the UI
  });

  const page = await browser.newPage();
  await page.goto(LISTING_PAGE);

  const products = await page.$$eval('.wg-catalog-list li.catalog-list-item', items => {
    // return items;
    const data = [];
    items.forEach(item => {
      // const name = item.querySelector('.wg-catalog-list-item-name').textContent;
      // const price = item.querySelector('.wg-catalog-list-item-price').textContent;
      const productUrl = item.querySelector('.wg-listview-box .wg-listview-img a').href;
      const imageUrl = item.querySelector('.wg-listview-box .wg-listview-img a img').src;

      const productName = item.querySelector('.catalog-listview-title a').textContent.replace(/\s+/g, ' ').trim();

      const productDescription = item.querySelector('.catalog-listview-title p:nth-child(n+0)').textContent.replace(/\s+/g, ' ').trim();

      data.push({ productUrl, imageUrl, productName, productDescription });
    });
    return data;
  });


  // console.log(products);
  const productCategories = await page.$$('.wg-catalog-list li.catalog-list-item .catalog-listview-title a', (a => {
    // return a.reduce((t, v) => ({ ...t, [v.textContent.replace(/\s+/g, ' ').trim()]: v.href }), {});
    // return a.map(v => v.href);
    let data = [];
    a.forEach(v=>{
      data.push(v.innerHtml)
    });
    return data;
  }));

  console.log(productCategories);
  // await page.waitForTimeout(5000); // wait for 5 seconds
  await browser.close();
}

main();