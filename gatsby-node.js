const path = require('path');

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `type Keyword implements Node {
      product: Product @link(by: "hash")
    }`,
    `type Product implements Node {
      keywords: [Keyword] @link(by: "product.hash", from: "hash")
    }`,
    `type Category implements Node {
      product: Product @link(by: "hash")
    }`,
    `type Product implements Node {
      categories: [Category] @link(by: "product.hash", from: "hash")
    }`,
  ];
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  console.log('**** createPages called');

  const categories = await graphql(`
  {
    allCategory {
      edges {
        node {
          key
          categoryName
          product {
            key
            productName
            productImageUrl
            keywords {
              key
              keyword
            }
            categories {
              categoryName
              key
            }          }
        }
      }
    }
    allProduct {
      edges {
        node {
          key
          productDescription
          productImageUrl
          productName
          images {
            src
            alt
          }
          keywords {
            key
            keyword
          }
          categories {
            categoryName
            key
          }
        }
      }
    }
    allKeyword {
      edges {
        node {
          key
          keyword
          product {
            key
            productName
            productImageUrl
            keywords {
              key
              keyword
            }
            categories {
              categoryName
              key
            }
          }
        }
      }
    }
}
`);

  // Handle errors
  if (categories.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each category
  const categoryPages = categories.data.allCategory.edges.reduce((t, { node }) => {
    return {
      ...t,
      [node.key]: {
        key: node.key,
        categoryName: node.categoryName,
        products: [
          ...t[node.key]?.products ?? [],
          node.product
        ]
      }
    };
  }, {});
  const categoryTemplate = path.resolve(`src/templates/category.js`);
  const categoryListTemplate = path.resolve(`src/templates/category-list.js`);
  createPage({
    path: '/categories/',
    component: categoryListTemplate,
    context: {
      categories: categoryPages
    }
  });

  Object.keys(categoryPages).forEach(key => {
    const node = categoryPages[key];
    createPage({
      path: `/category/${node.key}`,
      component: categoryTemplate,
      context: {
        key: node.key,
        categoryName: node.categoryName,
        products: node.products
      }
    });
  });

  const keywordPages = categories.data.allKeyword.edges.reduce((t, { node }) => {
    return {
      ...t,
      [node.key]: {
        key: node.key,
        keyword: node.keyword,
        products: [
          ...t[node.key]?.products ?? [],
          node.product
        ]
      }
    };
  }, {});
  const keywordTemplate = path.resolve(`src/templates/keyword.js`);
  const keywordListTemplate = path.resolve(`src/templates/keyword-list.js`);
  createPage({
    path: '/keywords/',
    component: keywordListTemplate,
    context: {
      keywords: keywordPages
    }
  });
  // console.log(keywordPages);
  Object.keys(keywordPages).forEach(key => {
    const node = keywordPages[key];
    // console.log(Object.keys(node));
    // console.log(node.products.length);
    createPage({
      path: `/keyword/${node.key}`,
      component: keywordTemplate,
      context: {
        key: node.key,
        keyword: node.keyword,
        products: node.products
      }
    });
  });

  const productPages = categories.data.allProduct.edges.reduce((t, { node }) => {
    return {
      ...t,
      [node.key]: {
        key: node.key,
        productName: node.productName,
        productImageUrl: node.productImageUrl,
        productDescription: node.productDescription,
        images: [
          ...t[node.key]?.images ?? [],
          ...node.images
        ],
        keywords: [
          ...t[node.key]?.keywords ?? [],
          ...node.keywords
        ],
        categories: [
          ...t[node.key]?.categories ?? [],
          ...node.categories
        ]
      }
    };
  }, {});

  const productTemplate = path.resolve(`src/templates/product.js`);
  const productListTemplate = path.resolve(`src/templates/product-list.js`);
  createPage({
    path: '/products/',
    component: productListTemplate,
    context: {
      products: productPages
    }
  });

  Object.keys(productPages).forEach(key => {
    const node = productPages[key];
    createPage({
      path: `/product/${node.key}`,
      component: productTemplate,
      context: {
        key: node.key,
        productName: node.productName,
        productImageUrl: node.productImageUrl,
        productDescription: node.productDescription,
        keywords: node.keywords,
        categories: node.categories,
        images: node.images
      }
    });
  });
};