import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

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
          {token ? (
            <button
              className="btn pri-cta-light-bg-clr"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          ) : (
            <button
              className="btn pri-cta-light-bg-clr"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
