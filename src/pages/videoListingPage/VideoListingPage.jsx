import React, {useState, useEffect} from "react";
import { Navbar, Sidebar, Chips, VerticalCard } from "../../components/index";
import { useVideosAndCategory } from "../../context/videos-context";
import filteredVideosOnCategory from "../../utils/filterVideo";

function VideoListingPage() {
  const { videos } = useVideosAndCategory();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setSelectedCategory("All");
  },[])  

  const filteredVideos = filteredVideosOnCategory(selectedCategory, videos);

  return (
    <div>
      <Navbar />
      <section className="d-flex d-flex-gap">
        <Sidebar />
        <div>
          <Chips setSelectedCategory={setSelectedCategory} />

          <div className="videolib-homepage-videos-cont">
            {filteredVideos.map((video) => {
              return <VerticalCard key={video._id} video={video} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoListingPage;
