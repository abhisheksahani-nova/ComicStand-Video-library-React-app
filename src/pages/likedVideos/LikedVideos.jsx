import React from "react";
import { Navbar, Sidebar, LargeHorizontalCard } from "../../components/index";
import { useLikedVideos } from "../../context/likedVideos-context";
import "./likedVideos.css";

function LikedVideos() {
  const { likedVideos } = useLikedVideos();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="right-side-container">
          <div className="d-flex likedVideos-video-cont">
            {likedVideos.map((video) => {
              return <LargeHorizontalCard key={video._id} video={video} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LikedVideos;
