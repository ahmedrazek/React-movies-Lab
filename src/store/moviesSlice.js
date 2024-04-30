import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async (page, thunkApi) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a10829400bf3f46b60a2157a82ac46ea&page=${page}`
      );
      return res.data.results;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
};
const moviesSLice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.isError = true;
        state.movies = action.payload;
      });
  },
});

export default moviesSLice.reducer;
