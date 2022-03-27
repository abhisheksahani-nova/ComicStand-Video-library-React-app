import React from "react";
import { Navbar, HorizontalCard, Sidebar} from "../../components/index";

function WatchLater() {
  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />
        <div>

          <div className="videolib-homepage-videos-cont">
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default WatchLater;
