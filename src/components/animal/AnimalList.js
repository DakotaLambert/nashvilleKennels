import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider";
import { AnimalDetail } from "./AnimalDetail";
import { Link } from "react-router-dom";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below

  const { animals, getAnimals, searchTerms } = useContext(AnimalContext);
  const [filteredAnimals, setFiltered] = useState([])


  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      <h2 className="animalPageHeader">Animals</h2>
      <div className="addAnimalButton">
        <button onClick={() => history.push("/animals/create")}>
          Add Animal
        </button>
      </div>
      <section className="animals">
        {filteredAnimals.map((animal) => {
          return (
            <Link
              to={`/animals/detail/${animal.id}`}
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

