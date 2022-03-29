import * as React from 'react';

const CategoryTemplate = (props) => {
  const { pageContext } = props;
  console.log('pageContext', pageContext);
  return (
    <div>CategoryTemplate

      {/* {pageContext.products.map((product, index) => (
        <div key={`product-${index}`}>
          {product.productName}
        </div>
      ))} */}
    </div>
  );
};

export default CategoryTemplate;