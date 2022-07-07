import React, { useState } from "react";
import "./playlistDropdown.css";
import { usePlaylists } from "../../../context/playlist-context";
import { useVideosAndCategory } from "../../../context/videos-context";

function PlaylistDropdown({
  setShowPlaylistDropdown,
  video,
  hideSaveToPlaylist,
}) {
  const [showPlaylistInput, setShowPlaylistInput] = useState(false);

  const [playListInfo, setPlaylistInfo] = useState({
    title: "",
    description: "",
  });

  const { playlists, createNewPlaylist, addNewVideoToPlaylist, getPlaylists } =
    usePlaylists();

  const token = localStorage.getItem("token");
  const { theme } = useVideosAndCategory();

  function handleClosePlaylistDropdown() {
    setShowPlaylistDropdown((prev) => !prev);
    setShowPlaylistInput(false);
  }

  function handleCreateNewPlaylist() {
    createNewPlaylist(playListInfo, token);
    setShowPlaylistDropdown(false);
  }

  function handleAddNewVideoToPlaylist(video, playlistId, token) {
    addNewVideoToPlaylist(video, playlistId, token);
    getPlaylists(token);
    setShowPlaylistDropdown((prev) => !prev);
  }

  return (
    <div className="playlist-dropdown-container">
      <ul
        className={`stacked-list list-style-none playlist-stacklist ${
          theme == "dark" && "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
        }`}
      >
        <li className="d-flex li-item playlist-li-item j-space-between">
          {!hideSaveToPlaylist ? <h5>Save to </h5> : <h5>Add</h5>}
          <i
            className="fa-solid fa-rectangle-xmark cursor-p"
            onClick={() => handleClosePlaylistDropdown()}
          ></i>
        </li>

        {!hideSaveToPlaylist &&
          playlists?.map((playlist) => {
            return (
              <li
                key={playlist._id}
                className="d-flex li-item playlist-li-item cursor-p"
                onClick={() =>
                  handleAddNewVideoToPlaylist(video, playlist._id, token)
                }
              >
                <h5>{playlist.title}</h5>
              </li>
            );
          })}

        {!showPlaylistInput ? (
          <li
            className="d-flex li-item playlist-li-item cursor-p"
            onClick={() => setShowPlaylistInput(true)}
          >
            <i className="fa-solid fa-plus playlist-add-icon"></i>
            <h5>Create New Playlist</h5>
          </li>
        ) : (
          ""
        )}

        {showPlaylistInput ? (
          <li className="d-flex li-item playlist-li-item">
            <input
              type="text"
              placeholder="title"
              className={`playlist-dropdown-inp ${
                theme == "dark" && "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
              }`}
              value={playListInfo.title}
              onChange={(e) =>
                setPlaylistInfo({
                  ...playListInfo,
                  title: e.target.value,
                })
              }
            />
          </li>
        ) : (
          ""
        )}

        {showPlaylistInput ? (
          <li className="d-flex li-item playlist-li-item">
            <input
              type="text"
              placeholder="description"
              className={`playlist-dropdown-inp ${
                theme == "dark" && "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
              }`}
              value={playListInfo.description}
              onChange={(e) =>
                setPlaylistInfo({
                  ...playListInfo,
                  description: e.target.value,
                })
              }
            />
          </li>
        ) : (
          ""
        )}

        {showPlaylistInput ? (
          <li className="d-flex li-item playlist-li-item j-content-right">
            <button
              className="btn pri-cta-bg-clr playlist-create-btn-resize"
              onClick={() => handleCreateNewPlaylist()}
            >
              Create
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default PlaylistDropdown;
