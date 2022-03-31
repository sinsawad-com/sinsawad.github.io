import * as React from 'react';
import ProductList from "./products-list";

const ProductToggle = ({ buttonName, products }) => {

  const [active, setActive] = React.useState(false);
  console.log(products.length);
  return (
    <React.Fragment>
      <div className={`toggle-background ${active ? "active" : ""}`}>
        <a href="#top" className="button-link text-white" role="button" onClick={(e) => {
          e.preventDefault();
          setActive(current => !current);
        }}>
          <div className={`flex-content ${active ? "active" : ""}`}>
            <div>
              <h2>{buttonName}</h2>
              <h3 className="smaller">({products.length} ผลิตภัณฑ์)</h3>
            </div>
          </div>
        </a>
        <div className={`products ${active ? "active" : ""}`}>
          <ProductList productList={products} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductToggle;