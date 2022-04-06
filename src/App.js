import "./App.css";
import {
  Homepage,
  VideoListingPage,
  WatchLater,
  Login,
  Signup,
  LikedVideos,
  HistoryVideos,
  Playlists,
  Playlist,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/videos" element={<VideoListingPage />}></Route>
        <Route path="/watchLater" element={<WatchLater />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/likedVideos" element={<LikedVideos />}></Route>
        <Route path="/historyVideos" element={<HistoryVideos />}></Route>
        <Route path="/playlists" element={<Playlists />}></Route>
        <Route path="/playlists/:playlistId" element={<Playlist />}></Route>
        <Route path="/mock" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
