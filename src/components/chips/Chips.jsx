import React from "react";
import "./chip.css";
import { useVideosAndCategory } from "../../context/videos-context";

function Chips() {
  const { category } = useVideosAndCategory();

  return (
    <div>
      <div className="d-flex videolib-homepage-chip-cont">
        {category.map(({ categoryName, _id }) => {
          return (
            <button key={_id} className="btn videolib-homepage-chip-custom-sty">
              {categoryName}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Chips;
