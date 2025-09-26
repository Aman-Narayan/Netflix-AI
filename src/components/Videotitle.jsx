import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent text-white flex flex-col justify-start md:justify-center px-6 md:px-24 py-12">
      {/* Title */}
      <h1 className="mt-32 ml-10 text-2xl md:text-6xl font-extrabold md:max-w-2xl md:ml-0 md:mt-0">
        {title}
      </h1>

      {/* Overview */}
      <p className="mt-4 ml-10 text-xs md:text-lg max-w-md md:max-w-lg opacity-80 md:ml-0">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-3 ml-10 md:ml-0">
        <button className="bg-white text-black text-sm md:text-lg font-semibold py-2 md:py-3 px-6 md:px-10 rounded-lg shadow hover:opacity-80 transition">
          ▷ Play
        </button>
        <button className="bg-gray-600/70 text-white text-sm md:text-lg font-semibold py-2 md:py-3 px-6 md:px-10 rounded-lg shadow hover:opacity-80 transition">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
