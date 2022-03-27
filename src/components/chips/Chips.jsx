import React from "react";
import "./chip.css";

function Chips() {
  return (
    <div>
      <div class="d-flex videolib-homepage-chip-cont">
        <button class="btn videolib-homepage-chip-custom-sty">All</button>
        <button class="btn videolib-homepage-chip-custom-sty">Hiking</button>
        <button class="btn videolib-homepage-chip-custom-sty">Beaches</button>
        <button class="btn videolib-homepage-chip-custom-sty">Camping</button>
        <button class="btn videolib-homepage-chip-custom-sty">
          Mountain Climbing
        </button>
        <button class="btn videolib-homepage-chip-custom-sty">
          Off-road Biking
        </button>
        <button class="btn videolib-homepage-chip-custom-sty">
          Solo Travelling
        </button>
        <button class="btn videolib-homepage-chip-custom-sty">Surfing</button>
      </div>
    </div>
  );
}

export default Chips;
