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
            <h3 className="location__name" key={location.name}>{location.name}</h3>
            <div className="location__name" key={location.employees.id}>{location.employees.length} Employees</div>
            <div className="location__name" key={location.animals.id}>{location.animals.length} Animals</div>
          </Link>
          </>
        );
      })}
    </section>
  );
};
