import React from 'react';
import Helmet from "react-helmet";
import Navbar from "../components/nav";

const MainLayout = ({ children }) => {
  return (
    <div style={{ outline: 'none' }}>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Helmet>
      <div className="main-layout" >
        {children}
      </div>
      <Navbar />
    </div>
  );
};

export default MainLayout;