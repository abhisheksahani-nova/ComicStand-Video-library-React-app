import React from "react";
import { Navbar, Sidebar, LargeHorizontalCard } from "../../components/index";
import { useLikedVideos } from "../../context/likedVideos-context";
import "./likedVideos.css";
import { useNavigate } from "react-router-dom";

function LikedVideos() {
  const { likedVideos } = useLikedVideos();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="right-side-container">
          {likedVideos?.length > 0 ? (
            <div className="d-flex likedVideos-video-cont">
              {likedVideos.map((video) => {
                return <LargeHorizontalCard key={video._id} video={video} />;
              })}
            </div>
          ) : (
            <div className="d-flex empty-video-container">
              <i className="fa-solid fa-video video-icon"></i>
              <button className="btn pri-out-btn" onClick={() => navigate("/")}>
                Add Videos
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default LikedVideos;
