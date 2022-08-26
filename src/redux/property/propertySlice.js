import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";

const initialState = {
  properties: data,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
});

export const getAllProperties = (state) => state.properties.properties;
export default propertySlice.reducer;
