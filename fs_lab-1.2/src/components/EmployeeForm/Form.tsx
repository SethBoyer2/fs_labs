import React, { useState } from "react";
import "./Form.css";
import type { Department } from "../DepartmentList/Data";

export interface EmployeeData {
  firstName: string;
  lastName: string;
  department: string;
  // Changing department type to string because it isn't possible to select a different department
  // than what is listed on the select
}

type EmployeesProps = {
  departments: Department[];
  updateDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
};

function EmployeeForm({ departments, updateDepartments }: EmployeesProps) {
  function handleSubmission(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    // event.target refers to the DOM element that triggered the event
    const formData = new FormData(event.target);

    const firstName = formData.get("employeeFirstName");
    const lastName = formData.get("employeeLastName");
    const department = formData.get("employeeDepartment");
    if (
      typeof firstName === "string" &&
      typeof lastName === "string" &&
      typeof department === "string"
    ) {
      const employee: EmployeeData = {
        firstName: firstName,
        lastName: lastName,
        department: department,
      };
      addEmployee(employee);
    }
  }

  function addEmployee(employee: EmployeeData) {
    updateDepartments((departments) => {
      return departments.map((department) => {
        if (department.name === employee.department) {
          return {
            ...department,
            employees: [...department.employees, employee],
          };
        }
        return department;
      });
    });
  }
  return (
    <form id="employeeForm" onSubmit={handleSubmission}>
      <label>
        Employee First Name:
        <input id="firstNameBox" type="text" name="employeeFirstName" />
      </label>

      <label>
        Employee Last Name:
        <input id="lastNameBox" type="text" name="employeeLastName" />
      </label>

      <label>
        Employee Department:
        <select name="employeeDepartment" id="department_field">
          <option value="Administration">Administration</option>
          <option value="Audit">Audit</option>
          <option value="Banking Operations">Banking Operations</option>
          <option value="Communications">Communications</option>
          <option value="Corporate Services">Corporate Services</option>
          <option value="Facilities">Facilities</option>
          <option value="Financial Services">Financial Services</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Information Technology">Information Technology</option>
          <option value="IT Technician">It Technician</option>
        </select>
      </label>
      <button id="submitButton" type="submit">
        Submit
      </button>
    </form>
  );
}

export default EmployeeForm;
