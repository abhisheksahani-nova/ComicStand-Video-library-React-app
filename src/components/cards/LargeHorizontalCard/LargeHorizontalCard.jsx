import React from "react";
import "./largeHorizontalCard.css";
import {useLikedVideos} from "../../../context/likedVideos-context";

function LargeHorizontalCard({ video }) {
  const {_id, title, channelName, img, videoViews, year, description} = video

  const { likedVideos, addToLikedVideos, removeFromLikedVideos } =
    useLikedVideos();

  return (
    <div>
      <div className="Card-horizontalImage-textContainer videolib-hr-largecard-resize p-relative">
        <div className="Card-horizontalImage-text">
          <img
            className="card-img Card-horizontalImage-text-img  videolib-hr-largecard-imgresize"
            src={img}
            alt="plant image"
          />

          <div className="">
            <h3 className="card-heading largeHorizontalCard-font-w">
              {title}
            </h3>

            <div className="d-flex flex-d-col">
              <small className="card-subHeading videolib-card-subheading videolib-card-subheading-common-sty">
                {channelName}
              </small>
              <small className="card-subHeading videolib-card-subheading-common-sty">
                {videoViews} views . {year} years ago
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
