import { createSlice, current } from "@reduxjs/toolkit";
import { data } from "../../data/data";

const initialState = {
  properties: data,
};

const trimNames = (name) => {
  return name.replace(" ", "").toLowerCase();
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    searchProperty: (state, { payload }) => {
      if (payload === "") {
        return { ...state, properties: data };
      } else {
        return {
          ...state,
          properties: data.filter((property) => {
            return trimNames(property.name).includes(trimNames(payload));
          }),
        };
      }
    },
    filterProperty: (state, { payload }) => {
      const { locationValue, locationName } = payload.location;
      const { typeValue, typeName } = payload.type;
      var duplicateState = [...state.properties];
      if (locationName == "location") {
        if (locationValue !== "Any Location") {
          duplicateState = data.filter(
            ({ location }) => location == locationValue
          );
        }
      }
      if (typeName == "type") {
        console.log("type entered");
        if (typeValue !== "Any Type") {
          duplicateState = duplicateState.filter(
            ({ type }) => type == typeValue
          );
        }
        return {
          ...state,
          properties: duplicateState,
        };
      }
    },
  },
});

export const { searchProperty, filterProperty } = propertySlice.actions;
export const getAllProperties = (state) => state.properties.properties;
export default propertySlice.reducer;
