import React from "react";

const VideoBackground = ({ trailerId }) => {
  if (!trailerId) return null;

  const embedUrl = `https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId}&showinfo=0&modestbranding=1`;

  return (
    <div className="relative md:top-0 md:left-0 w-screen h-screen overflow-hidden z-[-10]">
      <iframe
        className="size-min absolute top-1/4 md:top-1/2 lg:top-1/2 lg:left-1/2 md:left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 scale-[2.5] lg:scale-150"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
