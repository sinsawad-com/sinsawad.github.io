import React from 'react';
import {
  Link
} from "gatsby";
const Navbar = () => {
  return (
    <nav>
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
          <li><Link to="/products/"><div>ผลิตภัณฑ์</div></Link></li>
          <li><Link to="/categories/"><div>กลุ่มผลิตภัณฑ์</div></Link></li>
          <li><Link to="/keywords/"><div>คำค้น</div></Link></li>
          <li><Link to="/contact/"><div>ติดต่อเรา</div></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;;