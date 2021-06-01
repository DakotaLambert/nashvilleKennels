import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, []);

  return (
    <section className="animals">
      {console.log("AnimalList: Render", animals)}
      {animals.map((animal) => {
        return (
          <div className="animal" id={`animal--${animal.id}`} key={animal.id}>
            <h3 className="animal__name">Name: {animal.name}</h3>
            <div className="animal__breed">Breed: {animal.breed}</div>
          </div>
        );
      })}
    </section>
  );
};
