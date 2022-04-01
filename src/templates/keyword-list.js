import * as React from 'react';
import GenericLayout from "../layouts/generic";
import ProductToggle from "../components/product-toggle";
import CompanyInfo from "../components/company-info";

const CategoryListTemplate = (props) => {
  const { pageContext } = props;
  const keywords = Object.keys(pageContext.keywords).map(key => pageContext.keywords[key]);
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
      <CompanyInfo />
    </GenericLayout>
  );
};

export default CategoryListTemplate;