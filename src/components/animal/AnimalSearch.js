import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css"

export const AnimalSearch = () => {
    const {setSearchTerms} = useContext(AnimalContext)

    return(
        <>
        <div className="searchBar">
            <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for an animal...">
            </input>
        </div>
        </>
    )


}