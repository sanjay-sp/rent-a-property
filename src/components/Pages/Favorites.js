import React from "react";
import { useSelector } from "react-redux";
import { getAllFavorites } from "../../redux/property/favoritesSlice";
import Card from "../Cards/Card";
import "./Favorites.css";

function Favorites() {
  const favs = useSelector(getAllFavorites);

  return (
    <div className="favorites-page">
      <h3 className="favorites-header">Favorites</h3>
      <div className="favorites-listing">
        {favs.length > 0 ? (
          favs.map((fav) => {
            return <Card property={fav} />;
          })
        ) : (
          <h3 className="not-found">No Favorites Added</h3>
        )}
      </div>
    </div>
  );
}

export default Favorites;
