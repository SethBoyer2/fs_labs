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
            lastName: formData.get('employeeLastName')
        }

        console.log(employeeValues.firstName, employeeValues.lastName)
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
                input

            </label>
            <button id="submitButton" type="submit">Submit</button>
            

        </form>
    )
}

export default EmployeeForm