import "./App.css";
import {
  Homepage,
  VideoListingPage,
  WatchLater,
  Login,
  Signup,
  LikedVideos,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/videos" element={<VideoListingPage />}></Route>
        <Route path="/watchLater" element={<WatchLater />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/likedVideos" element={<LikedVideos />}></Route>
        <Route path="/mock" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
