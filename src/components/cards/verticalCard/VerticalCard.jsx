import React from "react";
import "./verticalCard.css";
import { useWatchLater } from "../../../context/watchLater-context";
import axios from "axios";

function VerticalCard({ video }) {
  const { _id, title, channelName, img, videoViews, year } = video;
  const { watchLaterVideos, setWatchLaterVideos } = useWatchLater();
  const token = localStorage.getItem("token");

  const handleAddToWatchLater = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setWatchLaterVideos(response.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromWatchLater = async (id) => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setWatchLaterVideos(response.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="videolib-verticalcard-resize">
        {console.log(watchLaterVideos)}
        <div className="badge-container">
          <img
            className="card-img videolib-verticalcard-img-resize"
            src={img}
          />
          {watchLaterVideos.find((item) => item._id === _id) ? (
            <i
              className="fa-solid fa-clock position-abs verticalCard-watchLater-icon-position "
              onClick={() => handleRemoveFromWatchLater(_id)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-clock position-abs verticalCard-watchLater-icon-position verticalCard-watchLater-icon-select-clr"
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
            <i className="fa-regular fa-thumbs-up position-abs verticalCard-like-icon-position"></i>
            <i className="fa-regular fa-thumbs-down position-abs verticalCard-dislike-icon-position"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
