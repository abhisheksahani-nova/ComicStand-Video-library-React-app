import React from "react";
import { Navbar, Sidebar, LargeHorizontalCard } from "../../components/index";
import { useHistoryVideos } from "../../context/history-context";
import "./history.css";

function HistoryVideos() {
  const { historyVideos, clearFullHistory } = useHistoryVideos();
  const token = localStorage.getItem("token");

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="likedVideos-outer-cont">
          {historyVideos.length > 0 ? (
            <div className="d-flex j-space-between mb-2">
              <h1>History</h1>
              <button className="btn pri-cta-bg-clr" onClick={() => clearFullHistory(token)}>
                Clear Full History
              </button>
            </div>
          ) : (
            ""
          )}

          <div className="d-flex likedVideos-video-cont">
            {historyVideos.map((video) => {
              return <LargeHorizontalCard key={video._id} video={video} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HistoryVideos;
