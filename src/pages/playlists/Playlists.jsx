import React, { useState } from "react";
import { Navbar, Sidebar } from "../../components/index";
import { usePlaylists } from "../../context/playlist-context";
import { useNavigate } from "react-router-dom";
import { PlaylistDropdown } from "../../components/index";
import { useVideosAndCategory } from "../../context/videos-context";
import "./playlists.css";

function Playlists() {
  const { playlists, deletePlaylist, getPlaylists } = usePlaylists();
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);
  const { theme } = useVideosAndCategory();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="right-side-container">
          {playlists?.length > 0 && (
            <div className="d-flex j-space-between mb-2">
              <h2 className={`${theme == "dark" && "dark-theme-font-clr"}`}>
                My Playlists
              </h2>
              <button
                className="btn pri-cta-light-bg-clr"
                onClick={() => setShowPlaylistDropdown((prev) => !prev)}
              >
                Create New Playlist
              </button>
            </div>
          )}

          {showPlaylistDropdown ? (
            <PlaylistDropdown
              setShowPlaylistDropdown={setShowPlaylistDropdown}
              video={{}}
              hideSaveToPlaylist={true}
            />
          ) : (
            ""
          )}

          {playlists?.length > 0 ? (
            <div className="videolib-homepage-videos-cont">
              {playlists.map((playlist) => {
                return (
                  <div
                    key={playlist._id}
                    className={`card-basic playlist-card ${
                      theme == "dark" &&
                      "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
                    }`}
                  >
                    <div className="badge-container">
                      <div>
                        <h3
                          className={`card-heading ${
                            theme == "dark" && "dark-theme-font-clr"
                          }`}
                        >
                          {playlist.title}
                        </h3>
                        <small
                          className={`card-subHeading ${
                            theme == "dark" && "dark-theme-font-clr"
                          }`}
                        >
                          {playlist.videos.length} videos
                        </small>
                      </div>

                      <i
                        className="fa-solid fa-trash-can cart_card_closeicon"
                        onClick={() => deletePlaylist(playlist._id, token)}
                      ></i>
                    </div>

                    <div className="card-footer">
                      <button
                        className="btn btn-ecommerce pri-cta-light-bg-clr"
                        onClick={() => navigate(`/playlists/${playlist._id}`)}
                      >
                        View Playlist
                      </button>
                    </div>
                  </div>
                );
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

export default Playlists;
