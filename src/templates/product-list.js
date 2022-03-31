import * as React from 'react';
import ProductList from "../components/products-list";
import GenericLayout from "../layouts/generic";

const ProductListTemplate = (props) => {
  const { pageContext } = props;
  console.log('pageContext', pageContext);
  const products = Object.keys(pageContext.products).map(key => pageContext.products[key]);
  console.log('products', products);
  return (
    <GenericLayout
      title={pageContext.categoryName}
      text="รายการสินค้า"
      heroClassName="banner-static banner-1" >
      <ProductList productList={products} />
    </GenericLayout>
  );
};

export default ProductListTemplate;