import * as React from 'react';
import ProductList from "../components/products-list";
import GenericLayout from "../layouts/generic";

const CategoryTemplate = (props) => {
  const { pageContext } = props;
  console.log('pageContext', pageContext);
  return (
    <GenericLayout
      title={pageContext.categoryName}
      text="กลุ่มผลิตภัณฑ์"
      heroClassName="banner-static banner-1" >
      <ProductList productList={pageContext.products} />
    </GenericLayout>
  );
};

export default CategoryTemplate;