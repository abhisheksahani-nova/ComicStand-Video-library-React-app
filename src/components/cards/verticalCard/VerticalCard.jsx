import React, { useState } from "react";
import "./verticalCard.css";
import { useWatchLater } from "../../../context/watchLater-context";
import { useLikedVideos } from "../../../context/likedVideos-context";
import { useHistoryVideos } from "../../../context/history-context";
import { usePlaylists } from "../../../context/playlist-context";

function VerticalCard({ video }) {
  const { _id, title, channelName, img, views, year } = video;
  const token = localStorage.getItem("token");
  const {
    watchLaterVideos,
    handleAddToWatchLater,
    handleRemoveFromWatchLater,
  } = useWatchLater();

  const { likedVideos, addToLikedVideos, removeFromLikedVideos } =
    useLikedVideos();

  const { addToHistory } = useHistoryVideos();
  const { playlists } = usePlaylists();
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);
  const [showPlaylistInput, setShowPlaylistInput] = useState(false);
  const [playListInfo, setPlaylistInfo] = useState({
    title: "",
    description: "",
  });

  function handleClosePlaylistDropdown() {
    setShowPlaylistDropdown((prev) => !prev);
    setShowPlaylistInput(false);
  }

  return (
    <div>
      <div className="videolib-verticalcard-resize">
        <div className="badge-container">
          <img
            className="card-img videolib-verticalcard-img-resize"
            src={img}
          />
          {watchLaterVideos.find((item) => item._id === _id) ? (
            <i
              className="fa-solid fa-clock position-abs verticalCard-watchLater-icon verticalCard-watchLater-icon-select-clr"
              onClick={() => handleRemoveFromWatchLater(_id, token)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-clock position-abs verticalCard-watchLater-icon"
              onClick={() => handleAddToWatchLater(video, token)}
            ></i>
          )}

          <i
            onClick={() => setShowPlaylistDropdown((prev) => !prev)}
            class="fa-solid fa-file-circle-plus position-abs verticalCard-playlist-icon"
          ></i>

          {showPlaylistDropdown ? (
            <ul class="stacked-list list-style-none playlist-stacklist">
              <li class="d-flex li-item playlist-li-item j-space-between">
                <h5>Save to </h5>
                <i
                  class="fa-solid fa-rectangle-xmark"
                  onClick={() => handleClosePlaylistDropdown()}
                ></i>
              </li>

              {playlists.map((playlist) => {
                return (
                  <li
                    key={playlist._id}
                    class="d-flex li-item playlist-li-item"
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
                  <button className="btn">Create</button>
                </li>
              ) : (
                ""
              )}
            </ul>
          ) : (
            ""
          )}

          <div className="badge-container">
            <h4 className="card-heading videolib-cardheading-resize">
              {title}
            </h4>
            <i
              onClick={() => addToHistory(video, token)}
              class="fa-solid fa-circle-play position-abs verticalCard-play-icon"
            ></i>

            <div className="d-flex flex-d-col">
              <small className="card-subHeading videolib-card-subheading videolib-card-subheading-common-sty">
                {channelName}
              </small>
              <small className="card-subHeading videolib-card-subheading-common-sty mb-1">
                {views} views . {year} years ago
              </small>
            </div>
            {likedVideos.find((item) => item._id == _id) ? (
              <i
                onClick={() => removeFromLikedVideos(_id, token)}
                className="fa-solid fa-thumbs-up position-abs verticalCard-like-icon"
              ></i>
            ) : (
              <i
                onClick={() => addToLikedVideos(video, token)}
                className="fa-solid fa-thumbs-up position-abs verticalCard-like-icon"
              ></i>
            )}
            <i className="fa-solid fa-thumbs-down position-abs verticalCard-dislike-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
