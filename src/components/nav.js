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
          <li>สินสวัสดิ์<span>ผู้จัดจำหน่ายผลิตภัณฑ์ยาง</span></li>
          <li><Link to="/products" target="_blank" rel="noreferrer">สินค้า</Link></li>
          <li><Link to="/categories" target="_blank" rel="noreferrer">กลุ่มสินค้า</Link></li>
          <li><Link to="/keywords" target="_blank" rel="noreferrer">คำค้น</Link></li>
          <li><Link to="/contact" target="_blank" rel="noreferrer">ติดต่อเรา</Link></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;;