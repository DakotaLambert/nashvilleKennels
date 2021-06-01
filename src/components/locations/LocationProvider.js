import React, { useState, createContext} from "react"

const API = "http://localhost:8088"
export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch(`${API}/locations`)
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = locationObj => {
        return fetch(`${API}/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }
    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}
