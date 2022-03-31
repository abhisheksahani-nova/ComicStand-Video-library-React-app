function filteredVideosOnCategory(selectedCategory, videos) {
  let filterdVideos = videos;

  if (selectedCategory == "All") {
    return filterdVideos;
  } else if (selectedCategory == "International Comics") {
    filterdVideos = filterdVideos.filter(
      (video) => video.popularity == "International"
    );
  } else if (selectedCategory == "Indian Comics") {
    filterdVideos = filterdVideos.filter(
      (video) => video.nationality == "Indian"
    );
  } else {
    filterdVideos = filterdVideos.filter(
      (video) => video.genre == selectedCategory
    );
  }

  return filterdVideos;
}

export default filteredVideosOnCategory;
