import React, { useState } from "react";
import { Navbar, Sidebar } from "../../components/index";
import { usePlaylists } from "../../context/playlist-context";
import { useNavigate } from "react-router-dom";
import { PlaylistDropdown } from "../../components/index";
import "./playlists.css";

function Playlists() {
  const { playlists, deletePlaylist, getPlaylists } = usePlaylists();
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="right-side-container">
          <div className="d-flex j-space-between mb-2">
            <h2>My Playlists</h2>
            <button
              className="btn pri-cta-light-bg-clr"
              onClick={() => setShowPlaylistDropdown((prev) => !prev)}
            >
              Create New Playlist
            </button>
          </div>

          {showPlaylistDropdown ? (
            <PlaylistDropdown
              setShowPlaylistDropdown={setShowPlaylistDropdown}
              video={{}}
              hideSaveToPlaylist={true}
            />
          ) : (
            ""
          )}

          <div className="videolib-homepage-videos-cont">
            {playlists.map((playlist) => {
              return (
                <div key={playlist._id} className="card-basic playlist-card">
                  <div className="badge-container">
                    <div>
                      <h3 className="card-heading">{playlist.title}</h3>
                      <small className="card-subHeading">
                        {playlist.videos.length}
                      </small>
                    </div>

                    <i
                      className="fa-solid fa-trash-can cart_card_closeicon"
                      onClick={() => deletePlaylist(playlist._id, token)}
                    ></i>
                  </div>

                  <div className="card-footer">
                    <button
                      className="btn pri-cta-light-bg-clr"
                      onClick={() => navigate(`/playlists/${playlist._id}`)}
                    >
                      View Playlist
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Playlists;
