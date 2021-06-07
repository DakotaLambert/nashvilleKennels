import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
    const [ animal, setAnimal ] = useState({ location: {}, customer: {} })
    const { animals } = useContext(AnimalContext)
    const { releaseAnimal } = useContext(AnimalContext)

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */

    const history = useHistory()

    const { animalId } = useParams();


    useEffect(() => {
        
        const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }

        setAnimal(thisAnimal)
    }, [animalId])


    const handleRelease = () => {
        releaseAnimal(animal.id)
        .then(() => {
            history.push("/animals")
        })
    }

    return (
    <section className="animal">
        <h3 className="animal__name">{ animal.name }</h3>
        <div className="animal__breed">{ animal.breed }</div>
        <div className="animal__location">Location: { animal.location.name }</div>
        <div className="animal__owner">Customer: { animal.customer.name }</div>
        <button key="deleteButton" onClick={handleRelease}>Delete</button>
    </section>
    )
}