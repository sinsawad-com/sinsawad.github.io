import * as React from "react";
import { Helmet } from "react-helmet";
import CompanyInfo from "../components/company-info";
import Hero from "../components/hero";
import ProductList from "../components/products-list";
import MainLayout from "../layouts/main-layout";
import MetaSeo from "../components/meta-seo";

// markup
const IndexPage = (props) => {
  console.log('index page', props);
  return (
    <MainLayout>
      <MetaSeo location={props.location} />
      <Helmet title="สินสวัสดิ์" >
      </Helmet>
      <Hero header="สินสวัสดิ์" text="เราคือผู้จัดจำหน่าย ท่อยาง สายลมยาง" textOptional="ยางอุตสาหกรรม และยางซิลิโคน" className="" />
      <CompanyInfo />
      {/* <div className="white-space" /> */}
      <ProductList limit={3} />
      {/* <div className="white-space" /> */}
    </MainLayout>
  );
};

export default IndexPage;
