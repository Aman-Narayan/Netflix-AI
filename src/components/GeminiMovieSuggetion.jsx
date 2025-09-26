import React, { useState } from "react";

export default function GeminiMovieSuggetion({ movies }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-center items-center mt-7 p-4 m-4 opacity-80">
      {movies.length != 0 && (
        <div className="w-full max-w-xl mx-auto ">
          <div className="bg-black text-white text-center py-5 relative z-10 rounded-2xl">
            <h2 className="font-bold text-lg">Movies you should watch!!</h2>
          </div>

          <div className="bg-white  shadow-2xl p-6 -mt-3 rounded-b-2xl">
            <ul>
              {movies.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center p-3 my-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "bg-[#ef4444] text-white shadow-md" // Active state styles
                      : "text-gray-600 hover:bg-gray-100" // Default state styles
                  }`}
                >
                  <span className="font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
