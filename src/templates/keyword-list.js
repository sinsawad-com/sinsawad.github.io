import * as React from 'react';
import GenericLayout from "../layouts/generic";
import ProductToggle from "../components/product-toggle";
import CompanyInfo from "../components/company-info";
import MetaSeo from "../components/meta-seo";

const CategoryListTemplate = (props) => {
  const { pageContext, location } = props;
  const keywords = Object.keys(pageContext.keywords).map(key => pageContext.keywords[key]);
  return (
    <GenericLayout
      title={pageContext.categoryName}
      text="คำค้นผลิตภัณฑ์"
      heroClassName="banner-static banner-2" >
      <MetaSeo location={location} title="คำค้นหาผลิตภัณฑ์ของสินสวัสดิ์" description="คำค้นหาผลิตภัณฑ์ของสินสวัสดิ์" />
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