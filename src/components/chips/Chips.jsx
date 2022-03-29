import React from "react";
import "./chip.css";

function Chips() {
  return (
    <div>
      <div className="d-flex videolib-homepage-chip-cont">
        <button className="btn videolib-homepage-chip-custom-sty">All</button>
        <button className="btn videolib-homepage-chip-custom-sty">
          International Comics
        </button>
        <button className="btn videolib-homepage-chip-custom-sty">
          Indian Comics
        </button>
        <button className="btn videolib-homepage-chip-custom-sty">
          Satire
        </button>
        <button className="btn videolib-homepage-chip-custom-sty">
          Improv
        </button>
        <button className="btn videolib-homepage-chip-custom-sty">
          Dark Comedy
        </button>
        <button className="btn videolib-homepage-chip-custom-sty">
          Anecdotal Comedy
        </button>
        <button className="btn videolib-homepage-chip-custom-sty">
          Observational Comedy
        </button>
      </div>
    </div>
  );
}

export default Chips;
