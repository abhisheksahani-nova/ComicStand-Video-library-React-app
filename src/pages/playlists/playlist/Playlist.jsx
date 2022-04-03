import React from "react";
import { useParams } from "react-router-dom";
import {
  Navbar,
  Sidebar,
  LargeHorizontalCard,
} from "../../../components/index";
import { usePlaylists } from "../../../context/playlist-context";

function Playlist() {
  const { playlistId } = useParams();
  const { playlists, deletePlaylist } = usePlaylists();

  const token = localStorage.getItem("token");

  const playlistData = playlists.find(({ _id }) => _id == playlistId);

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="right-side-container">
          <div className="d-flex j-space-between mb-2">
            <h2>My Playlists</h2>
            <button
              className="btn pri-cta-bg-clr"
              onClick={() => deletePlaylist(playlistId, token)}
            >
              Delete this Playlist
            </button>
          </div>

          <div className="likedVideos-outer-cont">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Playlist;
