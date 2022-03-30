import * as React from "react";
import CompanyInfo from "../components/company-info";
import Hero from "../components/hero";
import ProductList from "../components/products-list";
import MainLayout from "../layouts/main-layout";


// markup
const IndexPage = () => {
  return (
    <MainLayout>
      <Hero header="สินสวัสดิ์" text="เราคือผู้จัดจำหน่าย ท่อยาง สายลมยาง" textOptional="ยางอุตสาหกรรม และยางซิลิโคน" />
      <CompanyInfo />
      {/* <div className="white-space" /> */}
      <ProductList limit={3} />
      {/* <div className="white-space" /> */}
    </MainLayout>
  );
};

export default IndexPage;
