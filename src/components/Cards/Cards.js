import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { getAllProperties } from "../../redux/property/propertySlice";
import "./Cards.css";

function Cards() {
  const properties = useSelector(getAllProperties);
  return (
    <div className="cards-list">
      {properties.map((property) => {
        return <Card key={property.address} property={property} />;
      })}
    </div>
  );
}

export default Cards;
