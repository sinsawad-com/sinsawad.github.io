import * as React from 'react';
import CompanyInfo from "../components/company-info";
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
      heroClassName="banner-static banner-3" >
      <ProductList productList={products} />
      <CompanyInfo />
    </GenericLayout>
  );
};

export default ProductListTemplate;