import React from "react";
import { Navbar, Sidebar, Chips, VerticalCard } from "../../components/index";

function VideoListingPage() {
  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />
        <div>
          <Chips />

          <div className="videolib-homepage-videos-cont">
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoListingPage;
