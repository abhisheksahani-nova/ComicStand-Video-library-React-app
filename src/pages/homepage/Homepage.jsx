import React from "react";
import "./homepage.css";
import { Navbar, Sidebar, Chips, VerticalCard } from "../../components/index";
import { useVideosAndCategory } from "../../context/videos-context";

function Homepage() {
  const { videos } = useVideosAndCategory();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />
        <div>
          <Chips />

          <div className="d-flex videolib-banner-cont mb-2">
            <img
              className="videolib-banner-img"
              src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
              alt="banner"
            />
          </div>

          <div className="videolib-homepage-videos-cont">
            {videos.map((video) => {
              return <VerticalCard key={video._id} video={video} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
