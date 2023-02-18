import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchProperty } from "../../../redux/property/propertySlice";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProperty(searchTerm));
  }, [searchTerm]);

  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-area">
      <div className="search-header">Search properties to rent</div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search with Search Bar"
        value={searchTerm}
        onChange={searchTermHandler}
      />
    </div>
  );
}

export default SearchBar;
