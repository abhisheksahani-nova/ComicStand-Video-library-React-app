import React from "react";
import { Navbar, HorizontalCard, Sidebar, LargeHorizontalCard} from "../../components/index";

function WatchLater() {
  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />
        <div>

          <div className="videolib-homepage-videos-cont">
            <LargeHorizontalCard/>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default WatchLater;
