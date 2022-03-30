import React from 'react';
import MainLayout from "./main-layout";

const GenericLayout = ({ children, title = "", heroClassName }) => {
  return (
    <MainLayout>
      <Hero header="สินสวัสดิ์" text={title} textOptional="ยางอุตสาหกรรม และยางซิลิโคน" className={heroClassName} />
      <CompanyInfo />
      {children}
    </MainLayout>
  );
};

export default GenericLayout;