import { useEffect } from "react";
// import { options } from "../utils/constants";
import { Array1 } from "../utils/Mockdata4";
import { useDispatch, useSelector } from "react-redux";
import { addTVShowsMovies } from "../utils/movieSlice";

const useTVShows = () => {
  const dispatch = useDispatch();

  const getTVShows = () => {
    dispatch(addTVShowsMovies(Array1));
  };

  useEffect(() => {
    getTVShows();
  }, []);
};

export default useTVShows;
