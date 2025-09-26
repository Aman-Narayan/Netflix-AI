import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ ListId, title, movies }) => {
  if (!movies) return null;
  return (
    <div id={ListId} className="w-screen px-6 text-white">
      <h1 className="text-3xl py-4 font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie, idx) => (
            <MovieCard
              key={idx}
              posterImageUrl={movies[idx]?.posterImageUrl}
              title={movies[idx]?.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
