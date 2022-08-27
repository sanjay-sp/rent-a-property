import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/property/favoritesSlice";
import "./Card.css";

function Card({ property }) {
  const [isWishList, setisWishList] = useState(false);

  const { image, name, address, price, area, bathrooms, beds } = property;

  const dispatch = useDispatch();

  const toggleWishList = () => {
    setisWishList(!isWishList);
    console.log(isWishList);
  };

  useEffect(() => {
    if (isWishList) {
      dispatch(addFavorites(property));
    } else {
      dispatch(removeFavorites(property));
    }
  }, [isWishList]);

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
          <button onClick={toggleWishList}>
            {isWishList ? "Remove" : "Add"} to Wishlist
          </button>
        </div>
        <div className="prop-name">{name}</div>
        <div className="prop-address">{address}</div>
        <div className="prop-aminities">
          <div className="beds">{beds} Beds</div>
          <div className="baths">{bathrooms} Bathrooms</div>
          <div className="area">
            {area} m<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
