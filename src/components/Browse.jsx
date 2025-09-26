import useComedyMovies from "../hooks/useComedyMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTVShows from "../hooks/useTVShows";
import BrowseHeader from "./BrowseHeader";
import GeminiSearch from "./GeminiSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGemini = useSelector((store) => store.gemini.showGemini);
  useNowPlayingMovies();
  usePopularMovies();
  useHorrorMovies();
  useTVShows();
  useComedyMovies();

  return (
    <div>
      <BrowseHeader />
      {showGemini ? (
        <GeminiSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
