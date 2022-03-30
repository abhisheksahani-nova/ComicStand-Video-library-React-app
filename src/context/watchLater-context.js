import { createContext, useContext, useState } from "react";
import axios from "axios";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  const handleAddToWatchLater = async (video) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setWatchLaterVideos(response.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromWatchLater = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setWatchLaterVideos(response.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterVideos,
        setWatchLaterVideos,
        handleAddToWatchLater,
        handleRemoveFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
