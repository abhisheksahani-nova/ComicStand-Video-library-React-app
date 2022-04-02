import React from "react";
import { Navbar, Sidebar } from "../../components/index";
import { usePlaylists } from "../../context/playlist-context";
import { useNavigate } from "react-router-dom";
import "./playlists.css";

function Playlists() {
  const { playlists, deletePlaylist, getPlaylists } = usePlaylists();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

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
                    className="btn btn-ecommerce"
                    onClick={() => navigate(`/playlists/${playlist._id}`)}
                  >
                    View Playlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Playlists;
