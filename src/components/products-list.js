import { graphql, useStaticQuery } from "gatsby";
import React from 'react';

const ProductList = ({ limit = Infinity }) => {
  const productsResult = useStaticQuery(graphql`
  query  {
    allProduct{
      nodes {
        key
        productImageUrl
        productName
        keywords {
          key
          keyword
        }
        categories {
          categoryName
          key
        }
      }
    }
  }
  `).allProduct.nodes.slice(0, limit);

  return (
    <div>
      {
        productsResult.map((product, idx) => (
          <div key={product.key} className="product-listing">
            <div className="product-image">
              <img src={product.productImageUrl} alt={product.productName} />
            </div>
            <div className="product-info">
              <h2>{product.productName}</h2>
              {/* <div className="button">Test</div> */}
              {/* <div className="button button-primary">Test</div> */}
              <p><span className="mr">กลุ่มสินค้า:</span>{product.categories.map(category => (
                <a key={category.key} className="button button-primary mr" href={`/category/${category.key}`}>{category.categoryName}</a>
              ))}</p>
              <p><span className="mr">คำค้น:</span>{product.keywords.map(keyword => (
                <a key={keyword.key} className="button button-primary mr" href={`/keyword/${keyword.key}`}>{keyword.keyword}</a>
              ))}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProductList;