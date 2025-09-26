import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  const randomNumber = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomNumber];

  if (!mainMovie) {
    return <div className="text-red-500">No movie available</div>;
  }

  const {
    title = "Untitled",
    overview = "No overview available",
    trailerId,
  } = mainMovie;

  return (
    <div className="">
      <Videotitle title={title} overview={overview} />
      {trailerId ? (
        <VideoBackground trailerId={trailerId} />
      ) : (
        <div className="text-gray-400">Trailer not available</div>
      )}
    </div>
  );
};

export default MainContainer;
