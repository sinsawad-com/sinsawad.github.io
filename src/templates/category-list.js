import * as React from 'react';
import GenericLayout from "../layouts/generic";
import ProductToggle from "../components/product-toggle";

const CategoryListTemplate = (props) => {
  const { pageContext } = props;
  console.log('pageContext', pageContext);
  const categories = Object.keys(pageContext.categories).map(key => pageContext.categories[key]);
  console.log('categories', categories);
  return (
    <GenericLayout
      title={pageContext.categoryName}
      text="กลุ่มผลิตภัณฑ์"
      heroClassName="banner-static banner-1" >
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
    </GenericLayout>
  );
};

export default CategoryListTemplate;