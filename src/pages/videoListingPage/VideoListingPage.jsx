import React from "react";
import { Navbar, Sidebar, Chips, VerticalCard } from "../../components/index";

function VideoListingPage() {
  return (
    <div>
      <Navbar />
      <section class="d-flex d-flex-gap">
        <Sidebar />
        <div>
          <Chips />

          <div class="videolib-homepage-videos-cont">
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
