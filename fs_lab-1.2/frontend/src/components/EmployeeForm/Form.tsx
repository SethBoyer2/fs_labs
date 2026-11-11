import React, { useState } from "react";
import "./Form.css";
import type { EmployeeData } from "../../types/employees";
import type {EmployeesProps} from "../../types/employeeProps.ts"
import { validateName } from "../../services/employeeService.ts";
import { validateDept } from "../../services/employeeService.ts";
import { addEmployee } from "../../services/employeeService.ts";
import { useFormInput } from "../../hooks/useFormInput.ts";




function EmployeeForm({ departments, updateDepartments }: EmployeesProps) {
  const department = useFormInput()
  const firstName = useFormInput()
  const lastName = useFormInput()
  function handleSubmission(event: React.SubmitEvent<HTMLFormElement>) {

    event.preventDefault();
    console.log("Form submitted")
    

    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Department:", department);

{
      const employee: EmployeeData = {
        firstName: firstName.formValue,
        lastName: lastName.formValue,
        department: department.formValue,
      };
      console.log(employee)
      // if validation fails, exit the function
      console.log("valid saldad", validateName(employee), validateDept(employee, departments))
      console.log("Selected department:", employee.department);
      console.log("Available departments:", departments.map(d => d.name));
      if (!validateName(employee) || !validateDept(employee, departments)) {
        return
      }
      

      updateDepartments(previousDepartments=> 
         addEmployee(employee, previousDepartments)
      )
    }
  }


  return (
    <form id="employeeForm" onSubmit={handleSubmission}>
      <label>
        Employee First Name:
        <input id="firstNameBox" type="text" name="employeeFirstName" value={firstName.formValue} onChange={(event) => firstName.updateValue(event.target.value)}/>
      </label>

      <label>
        Employee Last Name:
        <input id="lastNameBox" type="text" name="employeeLastName" value={lastName.formValue} onChange={(event) => lastName.updateValue(event.target.value)}/>
      </label>

      <label>
        Employee Department:
        <select name="employeeDepartment" id="department_field" value={department.formValue} onChange={(event) => department.updateValue(event.target.value)}>
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
