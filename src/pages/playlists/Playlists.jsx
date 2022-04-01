import React from "react";
import { Navbar, Sidebar } from "../../components/index";
import { usePlaylists } from "../../context/playlist-context";

function Playlists() {
  const { playlists } = usePlaylists();

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="videolib-homepage-videos-cont">
          {playlists.map((playlist) => {
            return (
              <div className="card-basic">
                <div className="badge-container">
                  <div>
                    <h3 className="card-heading">Our Changing Planet</h3>
                    <small className="card-subHeading">by Kurt Wagner</small>
                  </div>
                  <i class="fa-solid fa-trash-can cart_card_closeicon"></i>
                </div>

                <div className="card-footer">
                  <button className="btn btn-ecommerce">View Playlist</button>
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
