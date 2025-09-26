import { useEffect } from "react";
// import { options } from "../utils/constants";
import { Array } from "../utils/Mockdata2";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = () => {
    // const data = await fetch(
    //   "https://api.allorigins.win/get?url=https://api.themoviedb.org/3/movie/popular?page=1",
    //   options
    // );
    const Mockdata = Array;
    // console.log(Mockdata); // Array of movies
    dispatch(addPopularMovies(Mockdata));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
