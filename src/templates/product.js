import * as React from 'react';
import GenericLayout from "../layouts/generic";

const ProductTemplate = (props) => {
  const { pageContext } = props;
  console.log('pageContext', pageContext);
  return (
    <GenericLayout
      title={pageContext.productName}
      text="รายละเอียดผลิตภัณฑ์"
      heroClassName="banner-static banner-2" >
    </GenericLayout>
  );
};

export default ProductTemplate;