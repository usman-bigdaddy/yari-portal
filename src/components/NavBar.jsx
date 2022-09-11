import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const mystyle = {
    textSize: "30px",
  };
  return (
    <aside
      id="layout-menu"
      class="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div class="app-brand demo">
        <a href="#" className="app-brand-link">
          Yari Portal
        </a>

        <a
          href="asdfx"
          class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div class="menu-inner-shadow"></div>

      <ul class="menu-inner py-1">
        <li class="menu-item">
          <Link to="/dashboard" class="menu-link">
            <i class="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </Link>
        </li>
        <li class="menu-item">
          <Link to="/supporters" class="menu-link">
            <i class="menu-icon tf-icons bx bx-user-circle"></i>
            <div data-i18n="Analytics">View Supporters</div>
          </Link>
        </li>
        <li class="menu-item">
          <Link to="/supporters/add" class="menu-link">
            <i class="menu-icon tf-icons bx bx-user-circle"></i>
            <div data-i18n="Analytics"> Add Supporters</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default NavBar;
