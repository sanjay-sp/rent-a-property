import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { getAllProperties } from "../../redux/property/propertySlice";
import "./Cards.css";

function Cards() {
  const properties = useSelector(getAllProperties);
  const [toastClass, setToastClass] = useState("");

  const toastHandler = () => {
    setToastClass("add");
    setTimeout(() => {
      setToastClass("");
    }, 1000);
  };
  return (
    <div className="cards-list">
      {properties.length > 0 ? (
        properties.map((property) => {
          return (
            <Card
              key={property.name}
              property={property}
              handler={toastHandler}
            />
          );
        })
      ) : (
        <h3 className="not-found">No Properties Found</h3>
      )}
      <div id="toast-msg" className={toastClass}>
        Added to Favorites
      </div>
    </div>
  );
}

export default Cards;
