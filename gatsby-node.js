const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

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

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   // console.log(node.internal.type);
//   const { createNodeField } = actions;

//   if (['Products', 'Categories', 'Keywords'].includes(node.internal.type)) {
//     const basePath = `/${node.internal.type.toLowerCase()}/${node.key}`;
//     const response = createNodeField({
//       node,
//       name: `slug`,
//       value: basePath
//     });

//     // console.log(
//     //   'response',
//     //   response
//     // );
//   }
// };

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
            productDescription
          }
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
            productDescription
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
  const categoryTemplate = path.resolve(`src/templates/category.js`);
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

  Object.keys(categoryPages).forEach(key => {
    // console.log(categoryPages[key]);
    const node = categoryPages[key];
    // categoryPages.forEach(({ node }) => {
    // console.log('node', node);
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

  const keywordTemplate = path.resolve(`src/templates/keyword.js`);
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
  });
  Object.keys(keywordPages).forEach(key => {
    const node = keywordPages[key];
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

  const productTemplate = path.resolve(`src/templates/product.js`);
  const productPages = categories.data.allProduct.edges.reduce((t, { node }) => {
    return {
      ...t,
      [node.key]: {
        key: node.key,
        productName: node.productName,
        productImageUrl: node.productImageUrl,
        productDescription: node.productDescription,
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
  }
    , {});
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
        categories: node.categories
      }
    });
  });
};