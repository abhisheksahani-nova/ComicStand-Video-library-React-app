import React from "react";
import "./largeHorizontalCard.css";

function LargeHorizontalCard() {
  return (
    <div>
      <div className="card-basic Card-horizontalImage-textContainer videolib-hr-largecard-resize p-relative">
        <div className="Card-horizontalImage-text">
          <img
            className="card-img Card-horizontalImage-text-img  videolib-hr-largecard-imgresize"
            src="https://i.ytimg.com/vi/WmIS_icNcLk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKf25HoKWqAD4Wx6GuqOWMOWTuDA"
            alt="plant image"
          />

          <div className="">
            <h3 className="card-heading">
              Kevin Hart - I'm Scared Of Ostriches
            </h3>

            <div className="d-flex flex-d-col">
              <small className="card-subHeading videolib-card-subheading videolib-card-subheading-common-sty">
                The Quint
              </small>
              <small className="card-subHeading videolib-card-subheading-common-sty">
                389K views . 2 years ago
              </small>

              <p className="card-subHeading videolib-card-subheading-common-sty f-size-small mt-1">
                Comedy superstart #KevinHart ("Think Like A Man", "Ride Along",
                "Top Five") graced the Montreal stage at the Just for Laughs ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeHorizontalCard;
