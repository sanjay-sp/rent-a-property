import React from "react";
import "./Filter.css";

export default function Filter() {
  return (
    <div className="filter-list">
      <div className="location-filter">
        <label>Location</label>
        <select name="location">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="date-filter">
        <label>When</label>
        <select name="location">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="price-filter">
        <label>Price</label>
        <select name="location">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="type-filter">
        <label>Property Type</label>
        <select name="location">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <button className="search-button">Search</button>
    </div>
  );
}
