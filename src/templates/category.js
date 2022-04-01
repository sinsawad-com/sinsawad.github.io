import * as React from 'react';
import CompanyInfo from "../components/company-info";
import MetaSeo from "../components/meta-seo";
import ProductList from "../components/products-list";
import GenericLayout from "../layouts/generic";

const CategoryTemplate = (props) => {
  const { pageContext, location } = props;
  return (
    <GenericLayout
      title={pageContext.categoryName}
      text="กลุ่มผลิตภัณฑ์"
      heroClassName="banner-static banner-1" >
      <MetaSeo location={location} description={`กลุ่มผลิตภัณฑ์ - ${pageContext.categoryName}`} />
      <ProductList productList={pageContext.products} />
      <CompanyInfo />
    </GenericLayout>
  );
};

export default CategoryTemplate;