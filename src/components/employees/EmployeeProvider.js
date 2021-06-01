import React, { useState, createContext} from "react"

const API = "http://localhost:8088"
export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch(`${API}/employees?_expand=location`)
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch(`${API}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }
    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}
