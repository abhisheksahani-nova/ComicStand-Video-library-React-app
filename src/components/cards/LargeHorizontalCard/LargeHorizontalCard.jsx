import React from "react";
import "./largeHorizontalCard.css";
import { useLikedVideos } from "../../../context/likedVideos-context";
import { useHistoryVideos } from "../../../context/history-context";
import { usePlaylists } from "../../../context/playlist-context";
import { useLocation } from "react-router-dom";

function LargeHorizontalCard({ video, playlistId }) {
  const { _id, title, channelName, img, views, year, description } = video;
  const { removeFromHistory } = useHistoryVideos();
  const { deleteVideoFromPlaylist, getPlaylists } = usePlaylists();
  const token = localStorage.getItem("token");
  let location = useLocation();

  const { likedVideos, addToLikedVideos, removeFromLikedVideos } =
    useLikedVideos();

  function handleDeleteVideoFromPlaylist(playlistId, id, token) {
    deleteVideoFromPlaylist(playlistId, id, token);
    getPlaylists(token);
  }

  return (
    <div>
      <div className="Card-horizontalImage-textContainer videolib-hr-largecard-resize p-relative">
        <div className="Card-horizontalImage-text">
          <img
            className="card-img Card-horizontalImage-text-img  videolib-hr-largecard-imgresize"
            src={img}
            alt="plant image"
          />

          {location.pathname == "/historyVideos" ? (
            <i
              className="fa-solid fa-trash-can cart_card_closeicon"
              onClick={() => removeFromHistory(_id, token)}
            ></i>
          ) : location.pathname == "/likedVideos" ? (
            <i
              className="fa-solid fa-trash-can cart_card_closeicon"
              onClick={() => removeFromLikedVideos(_id, token)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-trash-can cart_card_closeicon"
              onClick={() =>
                handleDeleteVideoFromPlaylist(playlistId, _id, token)
              }
            ></i>
          )}

          <div className="">
            <h3 className="card-heading largeHorizontalCard-font-w">{title}</h3>

            <div className="d-flex flex-d-col">
              <small className="card-subHeading videolib-card-subheading videolib-card-subheading-common-sty">
                {channelName}
              </small>
              <small className="card-subHeading videolib-card-subheading-common-sty">
                {views} views . {year} years ago
              </small>

              <p className="card-subHeading videolib-card-subheading-common-sty f-size-small mt-1">
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
