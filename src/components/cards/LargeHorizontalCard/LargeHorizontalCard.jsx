import React from "react";
import "./largeHorizontalCard.css";
import { useLikedVideos } from "../../../context/likedVideos-context";
import { useHistoryVideos } from "../../../context/history-context";
import { usePlaylists } from "../../../context/playlist-context";
import { useWatchLater } from "../../../context/watchLater-context";
import { useVideosAndCategory } from "../../../context/videos-context";
import { useLocation } from "react-router-dom";

function LargeHorizontalCard({ video, playlistId }) {
  const { _id, title, channelName, img, views, year, description } = video;
  const { removeFromHistory, addToHistory } = useHistoryVideos();
  const { deleteVideoFromPlaylist, getPlaylists } = usePlaylists();
  const { handleRemoveFromWatchLater } = useWatchLater();
  const token = localStorage.getItem("token");
  const { theme } = useVideosAndCategory();
  let location = useLocation();

  const { removeFromLikedVideos } = useLikedVideos();

  function handleDeleteVideoFromPlaylist(playlistId, id, token) {
    deleteVideoFromPlaylist(playlistId, id, token);
    getPlaylists(token);
  }

  return (
    <div>
      <div className="Card-horizontalImage-textContainer videolib-hr-largecard-resize p-relative">
        <div className="Card-horizontalImage-text">
          <img
            onClick={() => addToHistory(video, token)}
            className="card-img Card-horizontalImage-text-img  videolib-hr-largecard-imgresize"
            src={img}
            alt={title}
          />

          {location.pathname == "/historyVideos" ? (
            <i
              className={`fa-solid fa-trash-can cart_card_closeicon ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
              onClick={() => removeFromHistory(_id, token)}
            ></i>
          ) : location.pathname == "/likedVideos" ? (
            <i
              className={`fa-solid fa-trash-can cart_card_closeicon ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
              onClick={() => removeFromLikedVideos(_id, token)}
            ></i>
          ) : location.pathname == "/watchLater" ? (
            <i
              className={`fa-solid fa-trash-can cart_card_closeicon ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
              onClick={() => handleRemoveFromWatchLater(_id, token)}
            ></i>
          ) : (
            <i
              className={`fa-solid fa-trash-can cart_card_closeicon ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
              onClick={() =>
                handleDeleteVideoFromPlaylist(playlistId, _id, token)
              }
            ></i>
          )}

          <div>
            <h3
              className={`card-heading largeHorizontalCard-font-w ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
            >
              {title}
            </h3>

            <div className="d-flex flex-d-col">
              <small
                className={`card-subHeading videolib-card-subheading videolib-card-subheading-common-sty ${
                  theme == "dark" && "dark-theme-font-clr"
                }`}
              >
                {channelName}
              </small>
              <small
                className={`card-subHeading videolib-card-subheading-common-sty ${
                  theme == "dark" && "dark-theme-font-clr"
                }`}
              >
                {views} views . {year} years ago
              </small>

              <p
                className={`card-subHeading videolib-card-subheading-common-sty f-size-small mt-1 ${
                  theme == "dark" && "dark-theme-font-clr"
                }`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeHorizontalCard;
