import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  return (
    <section className="employees">
      {console.log("EmployeeList: Render", employees)}

      {employees.map((employee) => {
        return (
          <div className="employee" id={`employee--${employee.id}`} key={employee.id}>
            <h3 className="employeeName">Name: {employee.name}</h3>
            <div className="employeeAddress">Address: {employee.location.address}</div>
          </div>
        );
      })}
    </section>
  );
};
