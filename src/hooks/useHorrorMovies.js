import { useEffect } from "react";
// import { options } from "../utils/constants";
import { Array } from "../utils/Mockdata3";
import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/movieSlice";

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  const PlayingHorrorMovies = useSelector((store) => store.movies.horrorMovies);
  const getHorrorMovies = () => {
    // const data = await fetch(
    //   "https://api.allorigins.win/get?url=https://api.themoviedb.org/3/movie/popular?page=1",
    //   options
    // );
    const Mockdata = Array;
    // console.log(Mockdata); // Array of movies
    dispatch(addHorrorMovies(Mockdata));
  };

  useEffect(() => {
    if (!PlayingHorrorMovies) {
      getHorrorMovies();
    }
  }, []);
};

export default useHorrorMovies;
