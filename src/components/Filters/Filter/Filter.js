import React from "react";
import { useDispatch } from "react-redux";
import { filterProperty } from "../../../redux/property/propertySlice";
import { data } from "../../../data/data";
import "./Filter.css";

export default function Filter() {
  const date = new Date();
  console.log(date);
  const dispatch = useDispatch();

  const getFilterContent = (type) => {
    if (type == "location") {
      return [...new Set(data.map(({ location }) => location))];
    } else {
      return [...new Set(data.map(({ type }) => type))];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { location, type, price, date } = e.target;
    dispatch(
      filterProperty({
        locationValue: location.value,
        typeValue: type.value,
        dateValue: date.value.toString(),
        priceValue: price.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="filter-list">
        <div className="location-filter">
          <label>Location</label>
          <select name="location" className="location-select">
            <option value="Any Location">Any Location</option>
            {getFilterContent("location").map((location) => {
              return (
                <option
                  key={location}
                  value={location}
                  className="location-option"
                >
                  {location}
                </option>
              );
            })}
          </select>
        </div>
        <div className="date-filter">
          <label>When</label>
          <input name="date" type="date" min="2022-08-28" className="date" />
        </div>
        <div className="price-filter">
          <label>Price</label>
          <select name="price" className="price-option">
            <option value="Any Price">Any Price</option>
            <option value="<500">Less than $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-1500">$1000 - $1500</option>
            <option value="1500-2000">$1500 - $2000</option>
            <option value="2000-2500">$2000 - $2500</option>
            <option value="2500">$2500 +</option>
          </select>
        </div>
        <div className="type-filter">
          <label>Property Type</label>
          <select name="type" className="type-select">
            <option value="Any Type">Any Type</option>
            {getFilterContent("type").map((type) => {
              return (
                <option key={type} value={type} className="type-option">
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        <button className="search-button">Search</button>
      </div>
    </form>
  );
}
