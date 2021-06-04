import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useParams } from "react-router-dom";

export const LocationDetail = () => {
  const { locations } = useContext(LocationContext);
  
  const [location, setLocation] = useState({
    employees: [],
    animals: [],
  });

  /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */

  const { locationId } = useParams();

  useEffect(() => {
    const thisLocation = locations.find(
      (a) => a.id === parseInt(locationId)
    ) || { location: {} };

    setLocation(thisLocation);
  }, [locationId]);
  return (
    <section className="employee">
      <h2 className="locationInfoHeader">{location.name}</h2>
      <h3 className="employee__name">Employees </h3>
      <div className="employee__location">

        {location.employees.map((employeeProp) => (
          <div key={employeeProp.id}>{employeeProp.name}</div>
        ))}
      </div>
      
      <h3 className="employee__location">Animals {locations.name}</h3>
    </section>
  );
};
