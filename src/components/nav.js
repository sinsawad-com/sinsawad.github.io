import React from 'react';

const Navbar = () => {
  return (
    <React.Fragment>
      <div class="sidebar-header"></div>
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" class="sidebarIconToggle">
        <div class="sidebar-spinner sidebar-diagonal sidebar-part-1"></div>
        <div class="sidebar-spinner sidebar-horizontal"></div>
        <div class="sidebar-spinner sidebar-diagonal sidebar-part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
          <li>สินสวัสดิ์<span>ผู้จัดจำหน่ายผลิตภัณฑ์ยาง</span></li>
          <li><a href="https://vanila.io" target="_blank" rel="noreferrer">สินค้า</a></li>
          <li><a href="https://instagram.com/plavookac" target="_blank" rel="noreferrer">กลุ่มสินค้า</a></li>
          <li><a href="https://twitter.com/plavookac" target="_blank" rel="noreferrer">คำค้น</a></li>
          <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank" rel="noreferrer">ติดต่อเรา</a></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;;