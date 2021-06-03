import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider";
import { Link } from "react-router-dom";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below

  const { animals, getAnimals } = useContext(AnimalContext);

  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, []);

  return (
    <>
      <h2 className="animalPageHeader">Animals</h2>
      <div className="addAnimalButton">
        <button onClick={() => history.push("/animals/create")}>
          Add Animal
        </button>
      </div>
      <section className="animals">
        {animals.map((animal) => {
          return (
            <Link
              to={`/animal/detail/${animal.id}`}
              key={animal.id}
              className="animal"
            >
              <h3 className="animal__name">Name: {animal.name}</h3>
            </Link>
          );
        })}
      </section>
    </>
  );
};
