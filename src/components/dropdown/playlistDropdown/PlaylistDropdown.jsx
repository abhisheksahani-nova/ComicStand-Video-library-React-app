import React, { useState } from "react";
import "./playlistDropdown.css";
import { usePlaylists } from "../../../context/playlist-context";

function PlaylistDropdown({ setShowPlaylistDropdown, video }) {
  const [showPlaylistInput, setShowPlaylistInput] = useState(false);

  const [playListInfo, setPlaylistInfo] = useState({
    title: "",
    description: "",
  });

  const { playlists, createNewPlaylist, addNewVideoToPlaylist, getPlaylists } =
    usePlaylists();

  const token = localStorage.getItem("token");

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
  }

  return (
    <ul class="stacked-list list-style-none playlist-stacklist">
      <li class="d-flex li-item playlist-li-item j-space-between">
        <h5>Save to </h5>
        <i
          class="fa-solid fa-rectangle-xmark"
          onClick={() => handleClosePlaylistDropdown()}
        ></i>
      </li>

      {playlists?.map((playlist) => {
        return (
          <li
            key={playlist._id}
            class="d-flex li-item playlist-li-item"
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
          class="d-flex li-item playlist-li-item"
          onClick={() => setShowPlaylistInput(true)}
        >
          <i class="fa-solid fa-plus"></i>
          <h5>Create New Playlist</h5>
        </li>
      ) : (
        ""
      )}

      {showPlaylistInput ? (
        <li class="d-flex li-item playlist-li-item">
          <input
            type="text"
            placeholder="title"
            className="playlist-dropdown-inp"
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
        <li class="d-flex li-item playlist-li-item">
          <input
            type="text"
            placeholder="description"
            className="playlist-dropdown-inp"
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
        <li class="d-flex li-item playlist-li-item">
          <button className="btn" onClick={() => handleCreateNewPlaylist()}>
            Create
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}

export default PlaylistDropdown;
