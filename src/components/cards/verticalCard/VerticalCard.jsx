import React from "react";
import "./verticalCard.css";

function VerticalCard() {
  return (
    <div>
      <div className="videolib-verticalcard-resize">
        <div className="badge-container">
          <img
            className="card-img videolib-verticalcard-img-resize"
            src="https://i.ytimg.com/vi/JN11JClxdA4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKOKn4160XzBcxOA5UZbcHiqwNKg"
          />

          <div>
            <h4 className="card-heading videolib-cardheading-resize">
              Into The Wild
            </h4>
            <div className="d-flex flex-d-col">
              <small className="card-subHeading videolib-card-subheading videolib-card-subheading-common-sty">
                Rick Steves' Europe
              </small>
              <small className="card-subHeading videolib-card-subheading-common-sty mb-1">
                14M views . 4 years ago
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
