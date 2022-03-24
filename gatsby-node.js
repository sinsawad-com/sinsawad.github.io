exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `type Keywords implements Node {
      product: Products @link(by: "hash")
    }`,
    `type Products implements Node {
      keywords: [Keywords] @link(by: "product.hash", from: "hash")
    }`,
    `type Categories implements Node {
      product: Products @link(by: "hash")
    }`,
    `type Products implements Node {
      categories: [Categories] @link(by: "product.hash", from: "hash")
    }`,
  ];
  createTypes(typeDefs);
};