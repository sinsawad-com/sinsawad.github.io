import * as React from 'react';
import GenericLayout from "../layouts/generic";
import ProductToggle from "../components/product-toggle";

const CategoryListTemplate = (props) => {
  const { pageContext } = props;
  console.log('pageContext', pageContext);
  const keywords = Object.keys(pageContext.keywords).map(key => pageContext.keywords[key]);
  console.log('keywords', keywords);
  return (
    <GenericLayout
      title={pageContext.categoryName}
      text="คำค้นผลิตภัณฑ์"
      heroClassName="banner-static banner-2" >
      <div className="toggle-wrapper">
        {
          keywords.map((keyword, index) => {
            return (
              <ProductToggle
                buttonName={keyword.keyword}
                products={keyword.products}
                key={index} />
            );
          })
        }
      </div>
    </GenericLayout>
  );
};

export default CategoryListTemplate;