import React from "react";
import "./chip.css";
import { useVideosAndCategory } from "../../context/videos-context";

function Chips({ setSelectedCategory }) {
  const { category, theme } = useVideosAndCategory();

  return (
    <div
      className={`d-flex videolib-homepage-chip-cont ${
        theme == "dark" && "chips-cont-border-bottom chips-cont-border-top"
      }`}
    >
      {category.map(({ categoryName, _id }) => {
        return (
          <button
            key={_id}
            className={`btn videolib-homepage-chip-custom-sty ${
              theme == "dark" && "dark-theme-font-clr dark-theme-light-bg-clr"
            }`}
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
