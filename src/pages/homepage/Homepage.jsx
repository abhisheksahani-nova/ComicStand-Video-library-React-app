import React from "react";
import "./homepage.css";
import { Navbar, Sidebar, Chips, VerticalCard } from "../../components/index";

function Homepage() {
  return (
    <div>
      <Navbar />
      <section class="d-flex d-flex-gap">
        <Sidebar />
        <div>
          <Chips />

          <div class="d-flex videolib-banner-cont mb-2">
            <img
              class="videolib-banner-img"
              src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
              alt="banner"
            />
          </div>

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

export default Homepage;
