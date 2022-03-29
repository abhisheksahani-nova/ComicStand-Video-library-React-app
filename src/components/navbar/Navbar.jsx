import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav-bar white mb-0">
        <div className="nav-innerContainer font-clr">
          <i className="fa-solid fa-bars"></i>
          <h2 className="nav-heading mr-4 font-resize videolib-nav-head">
            ComicStand
          </h2>
        </div>

        <div className="nav-innerContainer font-clr width-auto">
          <input className="nav_searchBar" type="text" />
          <span className="searchBar_icon videolib-nav-search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <div className="nav-innerContainer nav-icon-container width-reset inherit-clr mr-1 videolib-nav-icon-cont-width-reset">
          <div className="flex-col-center">
            <NavLink to="login" className="videolib-nav-icon-clr videolib-nav-user-icon">
              <i className="fa-regular fa-user"></i>
            </NavLink>
          </div>

          <div className="flex-col-center">
            <NavLink to="/signup" className="videolib-nav-icon-clr nav-icon">
              <i className="fa-regular fa-bell"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
