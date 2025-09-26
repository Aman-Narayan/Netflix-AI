import React, { useState } from "react";
import GeminiSearchBar from "./geminiSearchBar";
import GeminiMovieSuggetion from "./GeminiMovieSuggetion";
import Footer from "./Footer";

const GeminiSearch = () => {
  const [movies, setMovies] = useState([]); // store API result here

  return (
    <div className="">
      <div className="absolute w-screen -z-10">
        <img
          src="/SearchLogo.png"
          alt="BackgroundImage"
          className="w-screen h-screen object-cover"
        />
      </div>

      {/* pass setter down */}
      <GeminiSearchBar setMovies={setMovies} />
      {/* pass data down */}
      <GeminiMovieSuggetion movies={movies} />
      <Footer />
    </div>
  );
};

export default GeminiSearch;
