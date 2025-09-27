import React from "react";
import { useParams, Link } from "react-router-dom";
import BrowseHeader from "./BrowseHeader";
import VideoBackground from "./VideoBackground";
import { useYoutubeData } from "../hooks/useYoutube";
import { AiOutlineLike } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import Shimmer from "./Simmer";

const MovieDetail = () => {
  const { id } = useParams();
  const data = useYoutubeData(id);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-400">
        <Shimmer />
      </div>
    );
  }

  const { title, description, likeCount, viewCount } = data;

  return (
    <div className="relative w-full h-screen">
      <BrowseHeader />
      {/* Video Background */}
      {id ? (
        <VideoBackground trailerId={id} />
      ) : (
        <div className="text-gray-400">Trailer not available</div>
      )}

      {/* Overlay Content */}
      <div className="z-30 absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-center items-center text-center p-8 mt-60 md:mt-32 lg:mt-32">
        <Link to="/browse">
          <button className="my-3 px-4 py-2 text-black bg-white font-bold rounded-2xl">
            Home Page
          </button>
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-3xl mb-6 line-clamp-5">
          {description}
        </p>
        <div className="flex space-x-6 text-gray-300 text-sm md:text-base">
          <span className="flex items-center gap-1">
            <AiOutlineLike />
            {likeCount}
          </span>
          <span className="flex items-center gap-1">
            <BiShowAlt /> {viewCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
