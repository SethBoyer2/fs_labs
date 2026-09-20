import { useState } from "react"
import './Form.css'

interface employeeData {
    firstName: string
    lastName: string
    department: 'Administration' | 'Audit' | 'Banking Operations' |
    'Communications' | 'Corporate Services' | 'Facilities' | 'Financial Services' |
    'Human Resources' | 'Information Technology' | 'It Technician'

}
function EmployeeForm () {
    function handleSubmission(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        // event.target refers to the DOM element that triggered the event
        const formData = new FormData(event.target)

        const employeeValues = {
            firstName: formData.get('employeeFirstName'),
            lastName: formData.get('employeeLastName'),
            department: formData.get('employeeDepartment')
        }

        console.log(employeeValues.firstName, employeeValues.lastName, employeeValues.department)
    }
    return(
        <form id="employeeForm" onSubmit={handleSubmission}>
            <label>Employee First Name:
                <input id="firstNameBox" type="text" name="employeeFirstName" />
            </label>
            <label>Employee Last Name:
                <input id="lastNameBox" type="text" name="employeeLastName" />
            </label>
            <label>Employee Department:
                <select name="employeeDepartment" id="department_field">
                    <option value="administration">Administration</option>
                    <option value="audit">Audit</option>
                    <option value="banking_operations">Banking Operations</option>
                    <option value="communications">Communications</option>
                    <option value="corporate_services">Corporate Services</option>
                    <option value="facilities">Facilities</option>
                    <option value="financial_services">Financial Services</option>
                    <option value="human_resources">Human Resources</option>
                    <option value="information_technology">Information Technology</option>
                    <option value="it_technician">It Technician</option>
                </select>

            </label>
            <button id="submitButton" type="submit">Submit</button>
            

        </form>
    )
}

export default EmployeeForm