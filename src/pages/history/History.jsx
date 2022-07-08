import React from "react";
import { Navbar, Sidebar, LargeHorizontalCard } from "../../components/index";
import { useHistoryVideos } from "../../context/history-context";
import { useVideosAndCategory } from "../../context/videos-context";
import "./history.css";
import { useNavigate } from "react-router-dom";

function HistoryVideos() {
  const { historyVideos, clearFullHistory } = useHistoryVideos();
  const { theme } = useVideosAndCategory();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="likedVideos-outer-cont">
          {historyVideos.length > 0 ? (
            <div className="d-flex j-space-between mb-2">
              <h1 className={`${theme == "dark" && "dark-theme-font-clr"}`}>
                History
              </h1>
              <button
                className="btn pri-cta-light-bg-clr"
                onClick={() => clearFullHistory(token)}
              >
                Clear Full History
              </button>
            </div>
          ) : (
            ""
          )}

          {historyVideos?.length > 0 ? (
            <div className="d-flex likedVideos-video-cont">
              {historyVideos.map((video) => {
                return <LargeHorizontalCard key={video._id} video={video} />;
              })}
            </div>
          ) : (
            <div className="d-flex empty-video-container">
              <i className="fa-solid fa-video video-icon"></i>
              <button className="btn pri-out-btn" onClick={() => navigate("/")}>
                Watch Videos
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default HistoryVideos;
