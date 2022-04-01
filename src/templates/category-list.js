import * as React from 'react';
import GenericLayout from "../layouts/generic";
import ProductToggle from "../components/product-toggle";
import CompanyInfo from "../components/company-info";
import MetaSeo from "../components/meta-seo";

const CategoryListTemplate = (props) => {
  const { pageContext, location } = props;
  const categories = Object.keys(pageContext.categories).map(key => pageContext.categories[key]);

  return (
    <GenericLayout
      title={pageContext.categoryName}
      text="กลุ่มผลิตภัณฑ์"
      heroClassName="banner-static banner-1" >
      <MetaSeo location={location} description="กลุ่มผลิตภัณฑ์ของสินสวัสดิ์" />
      <div className="toggle-wrapper">
        {
          categories.map((category, index) => {
            return (
              <ProductToggle
                buttonName={category.categoryName}
                products={category.products}
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