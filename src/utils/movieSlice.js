import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addTVShowsMovies: (state, action) => {
      state.Tvshows = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addHorrorMovies,
  addTVShowsMovies,
  addComedyMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
