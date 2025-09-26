import React from "react";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  LogoURl,
  ProfileURL,
  ProfileURL2,
  ProfileURL3,
  Supported_lan,
} from "../utils/constants";
import { toggleGeminiSearchView } from "../utils/geminiSlice";
import { changeLanguage } from "../utils/configSlice";

const BrowseHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const ShowGemini = useSelector((store) => store.gemini.showGemini);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGeminiBtn = () => {
    //toggle GBT seach
    dispatch(toggleGeminiSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  // The fix: Add a conditional check to handle the case where the user is null
  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-black to-transparent text-white fixed top-0 w-full h-16 px-6 z-50">
      {/* Left Logo */}
      <div className="flex items-center space-x-6">
        <img src={LogoURl} alt="Logo" className="w-32 md:w-40 z-10" />

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm lg:text-base font-medium opacity-80">
          <a
            className="hover:text-gray-300 cursor-pointer"
            href="#TVShows"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("TVShows")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            TV Shows
          </a>
          <a
            className="hover:text-gray-300 cursor-pointer"
            href="#ComedyMovies"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("ComedyMovies")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Comedy Movies
          </a>
        </nav>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        {ShowGemini && (
          <select
            className="px-2 py-1 md:px-3 md:py-1.5 rounded-md border border-gray-600 bg-gray-800 text-white 
                     text-[9px] md:text-sm lg:text-sm  shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
            onChange={handleLanguageChange}
          >
            {Supported_lan.map((lang) => (
              <option
                key={lang.indetifier}
                value={lang.indetifier}
                className="bg-gray-800 text-white"
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        {/* gemini button */}
        <div className="flex items-center justify-center h-7">
          <button
            className="px-2 py-1 md:px-4 md:py-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
             text-[8px] md:text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 
             transition-transform duration-300"
            onClick={handleGeminiBtn}
          >
            {!ShowGemini ? "Gemini-Search" : "Home Page"}
          </button>
        </div>

        {/* <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" /> */}

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src={user.photoURL}
              alt="profile"
              className="h-4 w-4 md:w-6 md:h-6 rounded"
            />
            <ChevronDown className="w-4 h-4" />
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 
            rounded-md shadow-lg z-20"
            >
              <ul className="py-2 text-sm">
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer flex items-center space-x-2">
                  <img src={ProfileURL} alt="ami" className="w-6 h-6 rounded" />
                  <span>ami</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer flex items-center space-x-2">
                  <img
                    src={ProfileURL3}
                    alt="kids"
                    className="w-6 h-6 rounded"
                  />
                  <span>Kids</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Transfer Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Help Center
                </li>
                <hr className="border-gray-700 my-1" />
                <button className="w-full" onClick={handleSignOut}>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer text-center">
                    Sign out of Netflix
                  </li>
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
