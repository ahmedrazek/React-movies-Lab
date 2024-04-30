import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
};
const currSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCurrency } = currSlice.actions;
export default currSlice.reducer;
