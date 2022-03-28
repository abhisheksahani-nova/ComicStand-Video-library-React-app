import React from "react";
import "./horizontalCard.css";

function HorizontalCard() {
  return (
    <div>
      <div className="Card-horizontalImage-textContainer videolib-card-resize p-relative">
        <div className="Card-horizontalImage-text">
          <img
            className="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce videolib-card-imgresize"
            src="https://i.ytimg.com/vi/k4Do3JSBflc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBX9CQ6v0SGwxOEvYV5IwXdYl3HIQ"
            alt="plant image"
          />

          <div className="cart_card_content mb-2">
            <h4 className="card-heading videolib-cardheading-resize">
              Unemployment in India: Engineers Struggling Due to skill gap...
            </h4>
            <div className="d-flex flex-d-col">
              <small className="card-subHeading videolib-card-subheading videolib-card-subheading-common-sty">
                The Quint
              </small>
              <small className="card-subHeading videolib-card-subheading-common-sty">
                389K views . 2 years ago
              </small>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default HorizontalCard;
