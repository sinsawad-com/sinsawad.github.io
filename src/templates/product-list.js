import * as React from 'react';
import CompanyInfo from "../components/company-info";
import MetaSeo from "../components/meta-seo";
import ProductList from "../components/products-list";
import GenericLayout from "../layouts/generic";

const ProductListTemplate = (props) => {
  const { pageContext, location } = props;
  const products = Object.keys(pageContext.products).map(key => pageContext.products[key]);
  return (
    <GenericLayout
      title="ผลิตภัณฑ์"
      heroClassName="banner-static banner-3" >
      <MetaSeo location={location} title="ผลิตภัณฑ์ของสินสวัสดิ์" description="ผลิตภัณฑ์ของสินสวัสดิ์" />
      <ProductList productList={products} />
      <CompanyInfo />
    </GenericLayout>
  );
};

export default ProductListTemplate;