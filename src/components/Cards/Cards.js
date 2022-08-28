import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { getAllProperties } from "../../redux/property/propertySlice";
import "./Cards.css";

function Cards() {
  const properties = useSelector(getAllProperties);
  return (
    <div className="cards-list">
      {properties.length > 0 ? (
        properties.map((property) => {
          return <Card key={property.name} property={property} />;
        })
      ) : (
        <h3 className="not-found">No Properties Found</h3>
      )}
    </div>
  );
}

export default Cards;
