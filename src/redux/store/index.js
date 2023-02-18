import { configureStore } from "@reduxjs/toolkit";
import favorites from "../property/favoritesSlice";
import property from "../property/propertySlice";

export const store = configureStore({
  reducer: {
    favorite: favorites,
    properties: property,
  },
});
