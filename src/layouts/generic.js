import React from 'react';
import MainLayout from "./main-layout";
import Hero from "../components/hero";
const GenericLayout = ({ children, title = "", text = "", heroClassName }) => {
  return (
    <MainLayout>
      <Hero header={title} text={text} className={heroClassName} />
      {children}
    </MainLayout>
  );
};

export default GenericLayout;