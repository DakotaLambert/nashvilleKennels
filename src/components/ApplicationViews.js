import React from "react";
import { Route } from "react-router-dom";
import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationDetail } from "./locations/LocationDetail";
import { CustomerProvider } from "./customers/CustomerProvider";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./employees/EmployeeForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./employees/EmployeeDetail";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/">
            <LocationList />
          </Route>
          <AnimalProvider>
            <Route exact path="/locations/detail/:locationId(\d+)">
              <LocationDetail />
            </Route>{" "}
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>

      {/* Render the animal list when http://localhost:3000/animals */}

      <AnimalProvider>
        <Route exact path="/animals">
          <AnimalList />
        </Route>

        <Route exact path="/animals/detail/:animalId(\d+)">
          <AnimalDetail />
        </Route>

        <LocationProvider>
          <CustomerProvider>
            <Route path="/animals/edit/:animalId(\d+)">
              <AnimalForm />
            </Route>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route exact path="/employees">
          <EmployeeList />
        </Route>

        <Route exact path="/employees/details/:employeeId(\d+)">
          <EmployeeDetail />
        </Route>

        <LocationProvider>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>
    </>
  );
};
