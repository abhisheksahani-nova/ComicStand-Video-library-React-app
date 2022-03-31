import React from "react";
import "./chip.css";
import { useVideosAndCategory } from "../../context/videos-context";

function Chips({ setSelectedCategory }) {
  const { category } = useVideosAndCategory();

  return (
    <div className="d-flex videolib-homepage-chip-cont">
      {category.map(({ categoryName, _id }) => {
        return (
          <button
            key={_id}
            className="btn videolib-homepage-chip-custom-sty"
            onClick={() => setSelectedCategory(categoryName)}
          >
            {categoryName}
          </button>
        );
      })}
    </div>
  );
}

export default Chips;
