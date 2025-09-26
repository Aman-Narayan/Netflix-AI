import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="text-white absolute bg-black -mt-80 md:-mt-0">
      <div className="-mt-32 relative z-10">
        <MovieList
          ListId="nowPlaying"
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          ListId="popular"
          title={"Popular"}
          movies={movies.popularMovies}
        />
        <MovieList
          ListId="horror"
          title={"Horror"}
          movies={movies.horrorMovies}
        />
        <MovieList
          ListId="TVShows"
          title={"TV Shows"}
          movies={movies.Tvshows}
        />
        <MovieList
          ListId="ComedyMovies"
          title={"Comedy Movies"}
          movies={movies.comedyMovies}
        />
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default SecondaryContainer;
