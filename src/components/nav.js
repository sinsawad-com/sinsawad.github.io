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
          <li><Link to="/"><div>สินสวัสดิ์<span>ผู้จัดจำหน่ายผลิตภัณฑ์ยาง</span></div></Link></li>
          <li><Link to="/products/"><div>สินค้า</div></Link></li>
          <li><Link to="/categories/"><div>กลุ่มสินค้า</div></Link></li>
          <li><Link to="/keywords/"><div>คำค้น</div></Link></li>
          <li><Link to="/contact/"><div>ติดต่อเรา</div></Link></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;;