import React from "react";
import "./verticalCard.css";

function VerticalCard({ video }) {
  const { title, channelName, img, videoViews, year } = video;

  return (
    <div>
      <div className="videolib-verticalcard-resize">
        <div className="badge-container">
          <img
            className="card-img videolib-verticalcard-img-resize"
            src={img}
          />
          <i class="fa-solid fa-clock position-abs verticalCard-watchLater-icon-position"></i>

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
            <i class="fa-regular fa-thumbs-up position-abs verticalCard-like-icon-position"></i>
            <i class="fa-regular fa-thumbs-down position-abs verticalCard-dislike-icon-position"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
