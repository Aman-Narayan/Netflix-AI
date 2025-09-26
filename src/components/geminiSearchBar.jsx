import React, { useRef } from "react";
import { lang } from "../utils/langaugeConstant";
import { useSelector } from "react-redux";

const GeminiSearchBar = ({ setMovies }) => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearch = async () => {
    const API_KEY = process.env.REACT_APP_NGPT_API;
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query " +
      searchText.current.value +
      " only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar,Soley,Don,Golmal,Koi Mil Gaya";

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openrouter/auto",
            messages: [{ role: "user", content: query }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const result = data.choices[0].message.content.split(",");
      setMovies(result); // ✅ update parent state
    } catch (error) {
      console.error("Error fetching completion:", error);
    }
  };

  return (
    <div className="flex justify-center items-center pt-10 sm:pt-8 md:pt-12">
      <form
        className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 bg-black bg-opacity-70 grid grid-cols-12 gap-3 p-3 sm:p-5 rounded-xl shadow-lg mt-20 sm:mt-24 md:mt-28 lg:mt-28"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-8 sm:col-span-9 p-2 sm:p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-[12px] md:text-sm"
          placeholder={lang[langkey].placeHolder}
        />
        <button
          className="col-span-4 sm:col-span-3 py-2 px-3 sm:px-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition duration-200"
          onClick={handleGptSearch}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
