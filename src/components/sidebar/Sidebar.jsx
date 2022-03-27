import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <div class="videolib-drawer-container">
        <div class="videolib-list-container">
          <ul class="videolib-list">
            <li class="videolib-list-item">
              <i class="fa-solid fa-house videolib-drawer-icon"></i> Home
            </li>
            <li class="videolib-list-item">
              <i class="fa-brands fa-safari videolib-drawer-icon"></i> Explore
            </li>
            <li class="videolib-list-item">
              <i class="fa-brands fa-google-play videolib-drawer-icon"></i>
              Playlist
            </li>
          </ul>
        </div>

        <div class="videolib-list-container">
          <ul class="videolib-list">
            <li class="videolib-list-item">
              <i class="fa-solid fa-clock-rotate-left videolib-drawer-icon"></i>
              History
            </li>
            <li class="videolib-list-item">
              <i class="fa-solid fa-clock videolib-drawer-icon"></i> Watch later
            </li>
            <li class="videolib-list-item">
              <i class="fa-solid fa-thumbs-up videolib-drawer-icon"></i> Liked
              videos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
