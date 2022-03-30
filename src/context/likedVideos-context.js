import { createContext, useContext, useState } from "react";
import axios from "axios";

const LikedVideosContext = createContext();

const LikedVideosProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);

  const addToLikedVideos = async (video) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setLikedVideos(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromLikedVideos = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`/api/user/likes/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setLikedVideos(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LikedVideosContext.Provider
      value={{
        likedVideos,
        setLikedVideos,
        addToLikedVideos,
        removeFromLikedVideos,
      }}
    >
      {children}
    </LikedVideosContext.Provider>
  );
};

const useLikedVideos = () => useContext(LikedVideosContext);

export { LikedVideosProvider, useLikedVideos };
