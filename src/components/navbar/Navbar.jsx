import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="nav-bar white mb-0">
        <div class="nav-innerContainer font-clr">
          <i class="fa-solid fa-bars"></i>
          <h2 class="nav-heading mr-4 font-resize videolib-nav-head">
            Travellers
          </h2>
        </div>

        <div class="nav-innerContainer font-clr width-auto">
          <input class="nav_searchBar" type="text" />
          <span class="searchBar_icon videolib-nav-search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <div class="nav-innerContainer nav-icon-container width-reset inherit-clr mr-1 videolib-nav-icon-cont-width-reset">
          <div class="flex-col-center">
            <a class="videolib-nav-icon-clr videolib-nav-user-icon" href="#">
              <i class="fa-regular fa-user"></i>
            </a>
          </div>

          <div class="flex-col-center">
            <a class="videolib-nav-icon-clr nav-icon" href="#">
              <i class="fa-regular fa-bell"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
