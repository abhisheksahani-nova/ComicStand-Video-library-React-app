import React from "react";
import "./verticalCard.css";
import { useWatchLater } from "../../../context/watchLater-context";
import { useLikedVideos } from "../../../context/likedVideos-context";

function VerticalCard({ video }) {
  const { _id, title, channelName, img, videoViews, year } = video;
  const {
    watchLaterVideos,
    handleAddToWatchLater,
    handleRemoveFromWatchLater,
  } = useWatchLater();

  const { likedVideos, addToLikedVideos, removeFromLikedVideos } =
    useLikedVideos();

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
              className="fa-solid fa-clock position-abs verticalCard-watchLater-icon-position verticalCard-watchLater-icon-select-clr"
              onClick={() => handleRemoveFromWatchLater(_id)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-clock position-abs verticalCard-watchLater-icon-position"
              onClick={() => handleAddToWatchLater(video)}
            ></i>
          )}

          <div className="badge-container">
            <h4 className="card-heading videolib-cardheading-resize">
              {title}
            </h4>
            <div className="d-flex flex-d-col">
              <small className="card-subHeading videolib-card-subheading videolib-card-subheading-common-sty">
                {channelName}
              </small>
              <small className="card-subHeading videolib-card-subheading-common-sty mb-1">
                {videoViews} views . {year} years ago
              </small>
            </div>
            {likedVideos.find((item) => item._id == _id) ? (
              <i
                onClick={() => removeFromLikedVideos(_id)}
                className="fa-solid fa-thumbs-up position-abs verticalCard-like-icon-position"
              ></i>
            ) : (
              <i
                onClick={() => addToLikedVideos(video)}
                className="fa-solid fa-thumbs-up position-abs verticalCard-like-icon-position"
              ></i>
            )}
            <i className="fa-solid fa-thumbs-down position-abs verticalCard-dislike-icon-position"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
