import React from "react";
import { useSelector } from "react-redux";
import { getAllFavorites } from "../../redux/property/favoritesSlice";

function Favorites() {
  const favs = useSelector(getAllFavorites);
  console.log(favs);
  return <div>Favorites</div>;
}

export default Favorites;
