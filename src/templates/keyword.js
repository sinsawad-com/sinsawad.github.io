import * as React from 'react';
import CompanyInfo from "../components/company-info";
import MetaSeo from "../components/meta-seo";
import ProductList from "../components/products-list";
import GenericLayout from "../layouts/generic";

const KeywordTemplate = (props) => {
  const { pageContext, location } = props;
  return (
    <GenericLayout
      title={pageContext.keyword}
      text="คำค้นผลิตภัณฑ์"
      heroClassName="banner-static banner-2" >
      <MetaSeo location={location} title={`คำค้นหา - ${pageContext.keyword}`} description={`คำค้นหา - ${pageContext.keyword}`} />
      <ProductList productList={pageContext.products} />
      <CompanyInfo />
    </GenericLayout>
  );
};

export default KeywordTemplate;