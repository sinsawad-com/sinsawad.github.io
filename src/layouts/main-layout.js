import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div style={{ outline: 'none' }}>
      <div className="main-layout" >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;