import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Employee.css";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);
  const history = useHistory();
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  return (
    <>
      <h2 className="employeePageHeader">Employees</h2>
      <div className="addEmployeeButton">
        <button onClick={() => history.push("/employees/create")}>
          Add Employee
        </button>
      </div>
      <section className="employees">
        {console.log("EmployeeList: Render", employees)}

        {employees.map((employee) => {
          return (
            <Link to={`/employees/details/${employee.id}`}
              className="employee"
              id={`employee--${employee.id}`}
              key={employee.id}
            >
              <h3 className="employeeName">Name: {employee.name}</h3>
              
            </Link>
          );
        })}
      </section>
    </>
  );
};
