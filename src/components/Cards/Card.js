import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card-tile">
      <div className="prop-img">
        <img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg" />
      </div>
      <div className="prop-details">
        <div className="prop-price">
          $2500<span>/month</span>
        </div>
        <div className="prop-name">Palm Harbor</div>
        <div className="prop-address">2699 Green Valley, Highland Lake, FL</div>
        <div className="prop-aminities">
          <div className="beds">3 Beds</div>
          <div className="baths">2 Bathrooms</div>
          <div className="area">
            5 x 7 m<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
