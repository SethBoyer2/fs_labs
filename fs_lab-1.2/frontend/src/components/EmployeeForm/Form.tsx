import "./Form.css";
import type { Employee } from "../../../../shared/types/employees.ts";
import { employeeService } from "../../services/employeeService.ts";
import { useFormInput } from "../../hooks/useFormInput.ts";



interface EmployeeFormProps {
  onEmployeeCreated: () => void;
}


function EmployeeForm({ onEmployeeCreated }: EmployeeFormProps) {
  const department = useFormInput()
  const firstName = useFormInput()
  const lastName = useFormInput()
  async function handleSubmission(event: React.SubmitEvent<HTMLFormElement>) {

    event.preventDefault();

      const employee: Employee = {
        firstName: firstName.formValue,
        lastName: lastName.formValue,
        department: department.formValue,
      };
      // await addEmployee fe -> express backend
      await employeeService.addEmployee(employee)
      // call back to loadDepartment, update department state
      onEmployeeCreated()
    }
    
  


  return (
    <>
    
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
          <option value="It Technician">It Technician</option>
        </select>
      </label>
      <button id="submitButton" type="submit">
        Submit
      </button>
    </form>
    </>
  );
}

export default EmployeeForm;
