import { useEffect } from "react";
// import { options } from "../utils/constants";
import { Array } from "../utils/mockdata";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getPopularMovies = async () => {
    // const data = await fetch(
    //   "https://api.allorigins.win/get?url=https://api.themoviedb.org/3/movie/popular?page=1",
    //   options
    // );
    const Mockdata = Array;
    // console.log(Mockdata); // Array of movies
    dispatch(addNowPlayingMovies(Mockdata));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useNowPlayingMovies;
