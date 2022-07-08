import React, { useState } from "react";
import "./verticalCard.css";
import { useWatchLater } from "../../../context/watchLater-context";
import { useLikedVideos } from "../../../context/likedVideos-context";
import { useHistoryVideos } from "../../../context/history-context";
import { PlaylistDropdown } from "../../index";
import { useVideosAndCategory } from "../../../context/videos-context";

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
  const { theme } = useVideosAndCategory();
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);

  return (
    <div>
      <div
        className={`videolib-verticalcard-resize ${
          theme == "dark" && "dark-theme-font-clr"
        }`}
      >
        <div className="badge-container">
          <img
            onClick={() => addToHistory(video, token)}
            className="card-img videolib-verticalcard-img-resize"
            src={img}
            alt={title}
          />

          {watchLaterVideos?.find((item) => item._id === _id) ? (
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

          {showPlaylistDropdown ? (
            <PlaylistDropdown
              setShowPlaylistDropdown={setShowPlaylistDropdown}
              video={video}
              hideSaveToPlaylist={false}
            />
          ) : (
            ""
          )}

          <div className="badge-container">
            <h4
              className={`card-heading videolib-cardheading-resize ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
            >
              {title}
            </h4>

            <i
              onClick={() => setShowPlaylistDropdown((prev) => !prev)}
              className="fa-solid fa-file-circle-plus position-abs verticalCard-playlist-icon"
            ></i>

            <div className="d-flex flex-d-col">
              <small
                className={`card-subHeading videolib-card-subheading videolib-card-subheading-common-sty ${
                  theme == "dark" && "dark-theme-font-clr"
                }`}
              >
                {channelName}
              </small>
              <small
                className={`card-subHeading videolib-card-subheading-common-sty mb-1 ${
                  theme == "dark" && "dark-theme-font-clr"
                }`}
              >
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
