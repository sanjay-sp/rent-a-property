import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: ["hello"],
};

const favoriteSlice = createSlice({
  name: "favoriteState",
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
  },
});

export const { addFavorites } = favoriteSlice.actions;
export const getAllFavorites = (state) => state.favorite.favorites;
export default favoriteSlice.reducer;
