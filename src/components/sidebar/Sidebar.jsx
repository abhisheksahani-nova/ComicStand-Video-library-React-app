import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { useVideosAndCategory } from "../../context/videos-context";

function Sidebar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { theme } = useVideosAndCategory();

  return (
    <div>
      <div
        className={`videolib-drawer-container ${
          theme == "dark" && "dark-theme-font-clr"
        }`}
      >
        <div
          className={`videolib-list-container ${
            theme == "dark" && "chips-cont-border-bottom"
          }`}
        >
          <ul className="videolib-list">
            <li className="videolib-list-item" onClick={() => navigate("/")}>
              <i className="fa-solid fa-house videolib-drawer-icon"></i> Home
            </li>
            <li
              className="videolib-list-item"
              onClick={() => navigate("/videos")}
            >
              <i className="fa-brands fa-safari videolib-drawer-icon"></i>{" "}
              Explore
            </li>
            <li
              className="videolib-list-item"
              onClick={() =>
                token ? navigate("/playlists") : navigate("/login")
              }
            >
              <i className="fa-brands fa-google-play videolib-drawer-icon"></i>
              Playlists
            </li>
          </ul>
        </div>

        <div
          className={`videolib-list-container ${
            theme == "dark" && "chips-cont-border-bottom"
          }`}
        >
          <ul className="videolib-list">
            <li
              className="videolib-list-item"
              onClick={() =>
                token ? navigate("/historyVideos") : navigate("/login")
              }
            >
              <i className="fa-solid fa-clock-rotate-left videolib-drawer-icon"></i>
              History
            </li>
            <li
              className="videolib-list-item"
              onClick={() =>
                token ? navigate("/watchLater") : navigate("/login")
              }
            >
              <i className="fa-solid fa-clock videolib-drawer-icon"></i> Watch
              later
            </li>
            <li
              className="videolib-list-item"
              onClick={() =>
                token ? navigate("/likedVideos") : navigate("/login")
              }
            >
              <i className="fa-solid fa-thumbs-up videolib-drawer-icon"></i>{" "}
              Liked videos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
