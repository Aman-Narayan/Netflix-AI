import React from "react";

const MovieCard = ({ title, posterImageUrl }) => {
  return (
    <div className="w-48 pr-4">
      <img
        className="object-cover w-[400px] h-[200px] md:w-[600px] md:h-[300px] rounded-md"
        alt="Movie card"
        src={posterImageUrl}
      />
      {/* <div
        className="font-serif absolute text-center -mt-8 text-[10px] m-1 py-1 px-2 w-[150px] rounded-lg bg-gray-800 bg-opacity-40
      "
      >
        {title}
      </div> */}
    </div>
  );
};

export default MovieCard;
