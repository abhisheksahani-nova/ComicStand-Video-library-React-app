import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideosProvider } from "./context/videos-context";
import { WatchLaterProvider } from "./context/watchLater-context";
import { LikedVideosProvider } from "./context/likedVideos-context";
import { HistoryProvider } from "./context/history-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideosProvider>
        <WatchLaterProvider>
          <HistoryProvider>
            <LikedVideosProvider>
              <App />
            </LikedVideosProvider>
          </HistoryProvider>
        </WatchLaterProvider>
      </VideosProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
