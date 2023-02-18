import { createSlice } from "@reduxjs/toolkit";
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
      var duplicateState = [...state.properties];

      const { locationValue, typeValue, priceValue, dateValue } = payload;
      if (locationValue !== "Any Location") {
        duplicateState = data.filter(
          ({ location }) => location == locationValue
        );
      } else {
        duplicateState = [...data];
      }
      if (dateValue !== "") {
        duplicateState = duplicateState.filter(
          ({ availability }) => availability >= dateValue
        );
      }
      if (priceValue !== "Any Price") {
        console.log(priceValue);
        switch (priceValue) {
          case "<500":
            duplicateState = duplicateState.filter(({ price }) => price <= 500);
            break;
          case "500-1000":
            duplicateState = duplicateState.filter(
              ({ price }) => price >= 500 && price <= 1000
            );
            break;
          case "1000-1500":
            duplicateState = duplicateState.filter(
              ({ price }) => price >= 1000 && price <= 1500
            );
            break;
          case "1500-2000":
            duplicateState = duplicateState.filter(
              ({ price }) => price >= 1500 && price <= 2000
            );
            break;
          case "2000-2500":
            duplicateState = duplicateState.filter(
              ({ price }) => price >= 2000 && price <= 2500
            );
            break;
          case "2500":
            duplicateState = duplicateState.filter(
              ({ price }) => price >= 2500
            );
            break;
          default:
            break;
        }
      }
      if (typeValue !== "Any Type") {
        duplicateState = duplicateState.filter(({ type }) => type == typeValue);
      }
      return {
        ...state,
        properties: duplicateState,
      };
    },
  },
});

export const { searchProperty, filterProperty } = propertySlice.actions;
export const getAllProperties = (state) => state.properties.properties;
export default propertySlice.reducer;
