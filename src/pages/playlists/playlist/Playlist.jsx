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
  const { playlists } = usePlaylists();

  const playlistData = playlists.find(({ _id }) => _id == playlistId);

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />

        <div className="likedVideos-outer-cont">
          <div className="d-flex likedVideos-video-cont">
            {playlistData?.videos?.map((video) => {
              return <LargeHorizontalCard key={video._id} video={video} playlistId={playlistId} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Playlist;
