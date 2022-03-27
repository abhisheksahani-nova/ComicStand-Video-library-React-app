import React from "react";
import "./chip.css";

function Chips() {
  return (
    <div>
      <div className="d-flex videolib-homepage-chip-cont">
        <button className="btn videolib-homepage-chip-custom-sty">All</button>
        <button className="btn videolib-homepage-chip-custom-sty">Hiking</button>
        <button className="btn videolib-homepage-chip-custom-sty">Beaches</button>
        <button className="btn videolib-homepage-chip-custom-sty">Camping</button>
        <button className="btn videolib-homepage-chip-custom-sty">
          Mountain Climbing
        </button>
        <button className="btn videolib-homepage-chip-custom-sty">
          Off-road Biking
        </button>
        <button className="btn videolib-homepage-chip-custom-sty">
          Solo Travelling
        </button>
        <button className="btn videolib-homepage-chip-custom-sty">Surfing</button>
      </div>
    </div>
  );
}

export default Chips;
