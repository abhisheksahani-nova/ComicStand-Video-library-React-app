import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useVideosAndCategory } from "../../context/videos-context";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { theme, setTheme } = useVideosAndCategory();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <nav className="nav-bar white mb-0">
        <div className="nav-innerContainer font-clr">
          <i className="fa-solid fa-bars"></i>
          <h2
            className={`nav-heading mr-4 font-resize videolib-nav-head ${
              theme == "dark" && "dark-theme-font-clr"
            }`}
          >
            ComicStand
          </h2>
        </div>

        <div className="nav-innerContainer font-clr width-auto">
          <input
            className={`nav_searchBar ${
              theme == "dark" &&
              "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
            }`}
            type="text"
          />
          <span
            className={`searchBar_icon videolib-nav-search-icon ${
              theme == "dark" &&
              "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
            }`}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <div
          className={`nav-innerContainer nav-icon-container width-reset inherit-clr mr-1 videolib-nav-icon-cont-width-reset ${
            theme == "dark" && "dark-theme-font-clr"
          }`}
        >
          <div
            className="d-flex theme-icon-cont flex-d-col videolib-banner-cont align-items-center"
            onClick={() =>
              setTheme((prev) => (prev == "light" ? "dark" : "light"))
            }
          >
            <i
              className={`fa-solid ${theme == "light" ? "fa-moon" : "fa-sun"}`}
            ></i>
            <small> {theme == "light" ? "dark" : "light"} </small>
          </div>

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
