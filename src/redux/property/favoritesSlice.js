import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favoriteState",
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      return { ...state, favorites: [...state.favorites, payload] };
    },
    removeFavorites: (state, { payload }) => {
      return {
        ...state,
        favorites: [...state.favorites].filter((fav) => {
          return fav.name !== payload.name;
        }),
      };
    },
  },
});

export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export const getAllFavorites = (state) => state.favorite.favorites;
export default favoriteSlice.reducer;
