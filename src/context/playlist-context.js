import { createContext, useContext, useState } from "react";
import axios from "axios";

const PlaylistsContext = createContext();

const PlaylistsProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  const createNewPlaylist = async (token, playlist) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: playlist },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewVideoToPlaylist = async (token, video) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlaylist = async (playlistId, token) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: token,
        },
      });
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideoFromPlaylist = async (playlistId, videoId, token) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlaylistsContext.Provider
      value={{
        playlists,
        setPlaylists,
        createNewPlaylist,
        deletePlaylist,
        addNewVideoToPlaylist,
        deleteVideoFromPlaylist,
      }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
