import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/property/favoritesSlice";
import { getAllFavorites } from "../../redux/property/favoritesSlice";
import like from "../../public/like.png";
import dislike from "../../public/dislike.png";
import bedIcon from "../../public/bed.png";
import bathIcon from "../../public/bath.png";
import areaIcon from "../../public/area.png";
import "./Card.css";

function Card({ property, handler }) {
  const dispatch = useDispatch();
  const favoritesList = useSelector(getAllFavorites);

  const { image, name, address, price, area, bathrooms, beds } = property;

  var isFavorite = favoritesList.includes(property);

  const toggleWishList = () => {
    if (isFavorite) {
      dispatch(removeFavorites(property));
    } else {
      dispatch(addFavorites(property));
      handler();
    }
  };

  return (
    <div className="card-tile">
      <div className="prop-img">
        <img src={image} />
      </div>
      <div className="prop-details">
        <div className="row-1">
          <div className="prop-price">
            ${price}
            <span>/month</span>
          </div>
          <img
            className="favorite-button"
            src={isFavorite ? like : dislike}
            onClick={toggleWishList}
          />
        </div>
        <div className="prop-name">{name}</div>
        <div className="prop-address">{address}</div>
        <div className="prop-aminities">
          <div className="beds">
            <img className="bed-icon" src={bedIcon} /> {beds} Beds
          </div>
          <div className="baths">
            <img className="bath-icon" src={bathIcon} />
            {bathrooms} Bathrooms
          </div>
          <div className="area">
            <img className="area-icon" src={areaIcon} /> {area} m<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
