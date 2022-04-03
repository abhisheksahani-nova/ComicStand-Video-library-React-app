import React from "react";
import { Navbar, Sidebar, LargeHorizontalCard } from "../../components/index";
import { useWatchLater } from "../../context/watchLater-context";

function WatchLater() {
  const { watchLaterVideos } = useWatchLater();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="right-side-container">
          <div className="d-flex likedVideos-video-cont">
            {watchLaterVideos.map((video) => {
              return <LargeHorizontalCard key={video._id} video={video} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WatchLater;
