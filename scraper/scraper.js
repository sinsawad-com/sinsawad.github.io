const playwright = require('playwright');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const LISTING_PAGE = "https://www.rubbertubesinsawad.com/catalog/brand/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%20%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C%20%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94";

const OUTPUT_PATH = path.join(__dirname, '../src/data');

async function main() {
  const browser = await playwright.firefox.launch({
    headless: false // setting this to true will not run the UI
  });


  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto(LISTING_PAGE);

  const products = (await page.$$eval('.wg-catalog-list li.catalog-list-item', items => {
    // return items;
    const data = [];
    items.forEach(item => {

      const productUrl = item.querySelector('.wg-listview-box .wg-listview-img a').href;
      const productImageUrl = item.querySelector('.wg-listview-box .wg-listview-img a img').src;

      const productName = item.querySelector('.catalog-listview-title a').textContent.replace(/\s+/g, ' ').trim();

      const productDescription = item.querySelector('.catalog-listview-title p:nth-child(n+0)').textContent.replace(/\s+/g, ' ').trim();

      // const productId = productUrl.split('-').pop();

      data.push({
        // productId,
        hash: '',
        key: decodeURIComponent(productUrl).split('/').pop(),
        // slug: productUrl.split('/').pop(),
        productUrl, productImageUrl, productName, productDescription,
        // keywords: [], categories: []
      });
    });
    return data;
  }))
    .map(product => ({ ...product, hash: crypto.createHash('md5').update(product.productUrl).digest('hex') }));

  let productCategories = (await page.$$eval('.wg-catalog-list li.catalog-list-item .catalog-listview-title p:nth-child(n+1) a', (a => {
    // return Object.entries(a.reduce((t, v) => ({ ...t, [v.textContent.replace(/\s+/g, ' ').trim()]: { url: v.href, products: [] } }), {}));
    return a.map(v => ({
      categoryName: v.textContent.replace(/\s+/g, ' ').trim(),
      key: decodeURIComponent(v.href).split('/').pop(),
      categoryUrl: v.href,
      productUrls: []
    }));
  })))
    .map(v => ({
      ...v,
      // slug: v.categoryName,
      key: v.key,
      hash: crypto.createHash('md5').update(v.categoryUrl).digest('hex')
    }));
  productCategories = [... new Map(productCategories.map(v => [v.hash, v])).values()];

  // console.log(productCategories);


  let keywords = (await page.$$eval(".catalog-keywords .wg-catalog-box div a", (elements => {
    return elements.map(element => ({
      keyword: element.textContent.replace(/\s+/g, ' ').trim(),
      key: decodeURIComponent(element.href).split('/').pop(),
      keywordUrl: element.href,
      productUrls: []
    }));
  })))
    // create hash for each product
    .map(e => ({
      ...e,
      // slug: e.keyword,
      key: e.key,
      hash: crypto.createHash('md5').update(e.keywordUrl).digest('hex')
    }));
  keywords = [... new Map(keywords.map(v => [v.hash, v])).values()];


  // await page.waitForTimeout(5000); // wait for 5 seconds



  // get list of products from each keyword
  // let productUrlsByKeyword = [];
  for (keyword of keywords) {
    // console.log(keyword);
    await page.goto(keyword.keywordUrl);
    keyword.productUrls = await page.$$eval('.wg-catalog-list li.catalog-list-item', items => {
      const data = [];
      items.forEach(item => {
        const productUrl = item.querySelector('.wg-listview-box .wg-listview-img a').href;
        data.push(productUrl);
      });
      return data;
    });
  };
  // put keywords into product
  // for (keyword of keywords) {
  //   for (product of products) {
  //     if (keyword.productUrls.includes(product.productUrl)) {
  //       product.keywords = [...product.keywords, { keyword: keyword.keyword, url: keyword.url }];
  //     }
  //   }
  // }

  // put productUrl into productCategories
  for (category of productCategories) {
    // list products in each productCategories
    await page.goto(category.categoryUrl);
    category.productUrls = await page.$$eval('.catalog-listview-title > a.btn-request-rfq', items => {
      const data = [];
      items.forEach(item => {
        const productUrl = item.href;
        data.push(productUrl);
      });
      return data;
    });
  };


  // convert keywords to rows
  const keywordsRows = keywords.map(keyword => {
    return keyword.productUrls.map(productUrl => ({
      hash: keyword.hash,
      // slug: keyword.slug,
      keyword: keyword.keyword,
      key: keyword.key,
      keywordUrl: keyword.keywordUrl,
      productUrl: productUrl,
      product: crypto.createHash('md5').update(productUrl).digest('hex')
    }));
  }).reduce((t, v) => [...t, ...v], []);

  // convert productCategories to rows
  const productCategoriesRows = productCategories.map(category => {
    return category.productUrls.map(productUrl => ({
      hash: category.hash,
      // slug: category.slug,
      key: category.key,
      categoryName: category.categoryName,
      categoryUrl: category.categoryUrl,
      productUrl: productUrl,
      product: crypto.createHash('md5').update(productUrl).digest('hex')
    }));
  }).reduce((t, v) => [...t, ...v], []);

  // put product data into each category.products
  // for (const category of productCategories) {

  //   for (const product of category.products) {

  //     for (const prod of products) {
  //       if (prod.productUrl === product.productUrl) {
  //         prod.categories = [...prod.categories, { category: category.categoryName, url: category.url }];
  //         product.id = prod.productId;
  //         product.name = prod.productName;
  //         product.imageUrl = prod.imageUrl;
  //         product.productDescription = prod.productDescription;
  //       }
  //     }
  //   }
  // }

  for await (let product of products) {
    await page.goto(product.productUrl);
    product.images = await page.$$eval(`.wrap-gallery li>img`, images => {
      let data = [];
      images.forEach(image => {
        // data.push(image.src);
        data.push({ src: image.src, alt: image.alt });
      });
      return data;
    });
  }



  // save to file
  fs.writeFileSync(path.join(OUTPUT_PATH, 'product.json'), JSON.stringify(products));

  // save keywords to file
  // fs.writeFileSync(path.join(OUTPUT_PATH, 'keywords', 'keywords-old.json'), JSON.stringify(keywords));
  fs.writeFileSync(path.join(OUTPUT_PATH, 'keyword.json'), JSON.stringify(keywordsRows));

  // save product categories to file
  // fs.writeFileSync(path.join(OUTPUT_PATH, 'categories', 'categories-old.json'), JSON.stringify(productCategories));
  fs.writeFileSync(path.join(OUTPUT_PATH, 'category.json'), JSON.stringify(productCategoriesRows));


  await browser.close();
}

main();