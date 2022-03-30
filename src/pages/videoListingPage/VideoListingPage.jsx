import React from "react";
import { Navbar, Sidebar, Chips, VerticalCard } from "../../components/index";
import { useVideosAndCategory } from "../../context/videos-context";

function VideoListingPage() {
  const { videos } = useVideosAndCategory();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />
        <div>
          <Chips />

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

export default VideoListingPage;
