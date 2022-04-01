import * as React from 'react';
import CompanyInfo from "../components/company-info";
import ProductList from "../components/products-list";
import GenericLayout from "../layouts/generic";

const CategoryTemplate = (props) => {
  const { pageContext } = props;
  return (
    <GenericLayout
      title={pageContext.categoryName}
      text="กลุ่มผลิตภัณฑ์"
      heroClassName="banner-static banner-1" >
      <ProductList productList={pageContext.products} />
      <CompanyInfo />
    </GenericLayout>
  );
};

export default CategoryTemplate;