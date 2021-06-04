import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { Link } from "react-router-dom";
import "./Location.css";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext);
  

  //useEffect - reach out to the world for something
  useEffect(() => {
    
    getLocations();
  }, []);

  return (
    <section className="locations">
      {console.log("LocationList: Render", locations)}
      {locations.map((location) => {
        return (
          <>
          <Link to={`/locations/detail/${location.id}`} className="location"  key={location.id}>
            <h3 className="location__name">Name: {location.name}</h3>
          </Link>
          </>
        );
      })}
    </section>
  );
};
