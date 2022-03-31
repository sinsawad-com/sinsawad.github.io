import React from 'react';
import {
  Link
} from "gatsby";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="sidebar-header"></div>
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="sidebar-spinner sidebar-diagonal sidebar-part-1"></div>
        <div className="sidebar-spinner sidebar-horizontal"></div>
        <div className="sidebar-spinner sidebar-diagonal sidebar-part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li><Link to="/">สินสวัสดิ์<span>ผู้จัดจำหน่ายผลิตภัณฑ์ยาง</span></Link></li>
          <li><Link to="/products/" >สินค้า</Link></li>
          <li><Link to="/categories/" >กลุ่มสินค้า</Link></li>
          <li><Link to="/keywords/" >คำค้น</Link></li>
          <li><Link to="/contact/" >ติดต่อเรา</Link></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;;