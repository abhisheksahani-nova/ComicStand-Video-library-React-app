import { createContext, useContext, useState } from "react";

const LikedVideosContext = createContext();

const LikedVideosProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);

  return (
    <LikedVideosContext.Provider value={{ likedVideos, setLikedVideos }}>
      {children}
    </LikedVideosContext.Provider>
  );
};

const useLikedVideos = () => useContext(LikedVideosContext);

export { LikedVideosProvider, useLikedVideos };
