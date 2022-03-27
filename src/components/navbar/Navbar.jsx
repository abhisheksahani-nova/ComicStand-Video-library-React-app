import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="nav-bar white mb-0">
        <div className="nav-innerContainer font-clr">
          <i className="fa-solid fa-bars"></i>
          <h2 className="nav-heading mr-4 font-resize videolib-nav-head">
            Travellers
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
            <a className="videolib-nav-icon-clr videolib-nav-user-icon" href="#">
              <i className="fa-regular fa-user"></i>
            </a>
          </div>

          <div className="flex-col-center">
            <a className="videolib-nav-icon-clr nav-icon" href="#">
              <i className="fa-regular fa-bell"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
