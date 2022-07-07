import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategory(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <VideosContext.Provider value={{ videos, category, theme, setTheme }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideosAndCategory = () => useContext(VideosContext);

export { VideosProvider, useVideosAndCategory };
