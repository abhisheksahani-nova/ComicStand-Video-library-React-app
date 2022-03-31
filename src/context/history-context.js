import { createContext, useContext, useState } from "react";
import axios from "axios";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyVideos, setHistoryVideos] = useState([]);

  const addToHistory = async (video, token) => {
    try {
      const response = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setHistoryVideos(response.data.history);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromHistory = async (id, token) => {
    try {
      const response = await axios.delete(`/api/user/history/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setHistoryVideos(response.data.history);
    } catch (error) {
      console.log(error);
    }
  };

  const clearFullHistory = async (token) => {
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: {
          authorization: token,
        },
      });
      setHistoryVideos(response.data.history);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        historyVideos,
        setHistoryVideos,
        addToHistory,
        removeFromHistory,
        clearFullHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistoryVideos = () => useContext(HistoryContext);

export { HistoryProvider, useHistoryVideos };
