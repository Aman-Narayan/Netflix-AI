import { useEffect } from "react";
// import { options } from "../utils/constants";
import { Array1 } from "../utils/Mockdata5";
import { useDispatch, useSelector } from "react-redux";
import { addComedyMovies } from "../utils/movieSlice";

const useComedyMovies = () => {
  const dispatch = useDispatch();

  const getComedyMovies = () => {
    dispatch(addComedyMovies(Array1));
  };

  useEffect(() => {
    getComedyMovies();
  }, []);
};

export default useComedyMovies;
