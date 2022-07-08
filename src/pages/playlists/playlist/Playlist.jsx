import React from "react";
import { useParams } from "react-router-dom";
import {
  Navbar,
  Sidebar,
  LargeHorizontalCard,
} from "../../../components/index";
import { usePlaylists } from "../../../context/playlist-context";
import { useVideosAndCategory } from "../../../context/videos-context";
import { useNavigate } from "react-router-dom";

function Playlist() {
  const { playlistId } = useParams();
  const { playlists, deletePlaylist } = usePlaylists();
  const { theme } = useVideosAndCategory();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const playlistData = playlists.find(({ _id }) => _id == playlistId);

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="right-side-container">
          {playlistData?.videos?.length > 0 && (
            <div className="d-flex j-space-between mb-2">
              <h2 className={`${theme == "dark" && "dark-theme-font-clr"}`}>
                My Playlists
              </h2>
              <button
                className="btn pri-cta-light-bg-clr"
                onClick={() => deletePlaylist(playlistId, token)}
              >
                Delete this Playlist
              </button>
            </div>
          )}

          <div className="likedVideos-outer-cont">
            {playlistData?.videos?.length > 0 ? (
              <div className="d-flex likedVideos-video-cont">
                {playlistData?.videos?.map((video) => {
                  return (
                    <LargeHorizontalCard
                      key={video._id}
                      video={video}
                      playlistId={playlistId}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="d-flex empty-video-container">
                <i className="fa-solid fa-video video-icon"></i>
                <button
                  className="btn pri-out-btn"
                  onClick={() => navigate("/")}
                >
                  Add Videos
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Playlist;
