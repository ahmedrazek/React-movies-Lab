import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./languageSlice";
import favMoviesReducer from "./favouriteMovieSlice";
import moviesSlice from "./moviesSlice";

export const store = configureStore({
  reducer: {
    language: langReducer,
    favMovies: favMoviesReducer,
    movies: moviesSlice,
  },
});
