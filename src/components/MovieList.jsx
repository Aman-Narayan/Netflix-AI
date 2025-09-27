import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ ListId, title, movies }) => {
  if (!movies) return null;
  return (
    <div id={ListId} className="w-screen px-6 text-white">
      <h1 className="text-3xl py-4 font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie, idx) => (
            <Link key={idx} to={`/movie/${movies[idx]?.trailerId}`}>
              <MovieCard
                posterImageUrl={movies[idx]?.posterImageUrl}
                title={movies[idx]?.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
