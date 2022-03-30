import * as React from 'react';
import ProductList from "../components/products-list";
import GenericLayout from "../layouts/generic";

const KeywordTemplate = (props) => {
  const { pageContext } = props;
  console.log('pageContext', pageContext);
  return (
    <GenericLayout
      title={pageContext.keyword}
      text="คำค้นผลิตภัณฑ์"
      heroClassName="banner-static banner-2" >
      <ProductList productList={pageContext.products} />
    </GenericLayout>
  );
};

export default KeywordTemplate;