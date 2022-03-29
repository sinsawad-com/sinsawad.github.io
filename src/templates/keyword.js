import * as React from 'react';

const KeywordTemplate = (props) => {
  const { pageContext } = props;
  console.log('pageContext', pageContext);
  return (
    <div>KeywordTemplate {pageContext.keyword}

      {/* {pageContext.products.map((product, index) => (
        <div key={`product-${index}`}>
          {product.productName}
        </div>
      ))} */}
    </div>
  );
};

export default KeywordTemplate;