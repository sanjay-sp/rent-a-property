import React from "react";
import Filter from "../Filters/Filter/Filter";
import SearchBar from "../Filters/SearchBar/SearchBar";
import Cards from "../Cards/Cards";

function Rent() {
  return (
    <div>
      <SearchBar />
      <Filter />
      <Cards />
    </div>
  );
}

export default Rent;
