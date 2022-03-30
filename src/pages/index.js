import * as React from "react";
import CompanyInfo from "../components/company-info";
import Hero from "../components/hero";


// markup
const IndexPage = () => {

  return (
    <div>
      <Hero header="สินสวัสดิ์" text="เราคือผู้จัดจำหน่าย ท่อยาง สายลมยาง" textOptional="ยางอุตสาหกรรม และยางซิลิโคน" />
      <CompanyInfo />
    </div>
  );
};

export default IndexPage;
