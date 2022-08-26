import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-area">
      <div className="search-header">Search properties to rent</div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search with Search Bar"
      />
    </div>
  );
}

export default SearchBar;
