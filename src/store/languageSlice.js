import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
};

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.lang = state.lang == "ar" ? "en" : "ar";
    },
  },
});

export const { toggleLanguage } = langSlice.actions;
export default langSlice.reducer;
