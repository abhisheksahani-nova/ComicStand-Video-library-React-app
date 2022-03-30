function filteredVideosOnCategory(selectedCategory, videos) {
  let filterVideos = videos;

  if (selectedCategory == "All") {
    return filterVideos;
  } else if (selectedCategory == "International Comics") {
    filterVideos = filterVideos.filter(
      (video) => video.popularity == "International"
    );
  } else if (selectedCategory == "Indian Comics") {
    filterVideos = filterVideos.filter(
      (video) => video.nationality == "Indian"
    );
  } else {
    filterVideos = filterVideos.filter(
      (video) => video.genre == selectedCategory
    );
  }

  return filterVideos;
}

export default filteredVideosOnCategory;