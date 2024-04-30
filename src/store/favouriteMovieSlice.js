import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: [],
};

const favMovieSlice = createSlice({
  name: "favMovies",
  initialState,
  reducers: {
    addMovie(state, action) {
      state.favs.push(action.payload);
    },
    removeMovie(state, action) {
      state.favs = state.favs.filter((mov) => mov.id != action.payload.id);
    },
  },
});

export const { addMovie, removeMovie } = favMovieSlice.actions;
export default favMovieSlice.reducer;
