import * as React from 'react';
import GenericLayout from "../layouts/generic";
import CompanyInfo from "../components/company-info";
import MetaSeo from "../components/meta-seo";

const ProductTemplate = (props) => {
  console.log('product-props', props);
  const { pageContext, location } = props;
  const allImages = [{ src: pageContext.productImageUrl, alt: pageContext.productName }].concat(pageContext.images);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // const allImages = pageContext.images;

  return (
    <GenericLayout
      title={pageContext.productName}
      text="รายละเอียดผลิตภัณฑ์"
      heroClassName="banner-static banner-2" >

      <MetaSeo location={location} title={pageContext.productName} description={pageContext.productDescription} image={pageContext.productImageUrl} />
      <div className="content-area">
        <div className="left">

          {
            allImages.map((image, index) => {
              return (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedIndex(index);
                  }}
                  className="button-link"
                  key={index}
                >
                  <img src={image.src} alt={image.alt} />
                </button>
              );
            })
          }

        </div>

        <div className="center">
          <img src={allImages[selectedIndex].src} alt={allImages[selectedIndex].alt} />
        </div>

        <div className="right">

          <h2 className="text-primary">{pageContext.productName}</h2>

          <div>
            <p>{pageContext.productDescription}</p>
          </div>

          <div>
            <h3>
              หมวดหมู่ผลิตภัณฑ์
            </h3>
            <div>
              {
                pageContext.categories.map((category, index) => {
                  return (
                    <a className="button button-outline-primary mr" key={index} href={`/category/${category.key}`}>{category.categoryName}</a>
                  );
                })
              }
            </div>
          </div>

          <div>
            <h3>คำค้นผลิตภัณฑ์</h3>
            <div>
              {
                pageContext.keywords.map((keyword, index) => {
                  return (
                    <a className="button button-outline-primary mr" key={index} href={`/keyword/${keyword.key}`}>{keyword.keyword}</a>
                  );
                })
              }
            </div>
          </div>

        </div>
      </div>
      <CompanyInfo />
    </GenericLayout>
  );
};

export default ProductTemplate;
