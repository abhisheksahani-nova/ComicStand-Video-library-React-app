import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="videolib-drawer-container">
        <div className="videolib-list-container">
          <ul className="videolib-list">
            <li className="videolib-list-item">
              <i className="fa-solid fa-house videolib-drawer-icon"></i> Home
            </li>
            <li className="videolib-list-item">
              <i className="fa-brands fa-safari videolib-drawer-icon"></i> Explore
            </li>
            <li className="videolib-list-item">
              <i className="fa-brands fa-google-play videolib-drawer-icon"></i>
              Playlist
            </li>
          </ul>
        </div>

        <div className="videolib-list-container">
          <ul className="videolib-list">
            <li className="videolib-list-item">
              <i className="fa-solid fa-clock-rotate-left videolib-drawer-icon"></i>
              History
            </li>
            <li className="videolib-list-item">
              <i className="fa-solid fa-clock videolib-drawer-icon"></i> Watch later
            </li>
            <li className="videolib-list-item">
              <i className="fa-solid fa-thumbs-up videolib-drawer-icon"></i> Liked
              videos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
