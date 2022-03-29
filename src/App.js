import "./App.css";
import { Homepage, VideoListingPage, WatchLater } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/videos" element={<VideoListingPage />}></Route>
        <Route path="/mock" element={<Mockman/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
