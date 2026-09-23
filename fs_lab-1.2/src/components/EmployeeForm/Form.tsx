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
    // useState is function scoped
    const [nameError, setNameError] = useState('')
    function handleSubmission(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        

        // event.target refers to the DOM element that triggered the event
        const formData = new FormData(event.target)
        const employeeValues = {
            firstName: formData.get('employeeFirstName'),
            lastName: formData.get('employeeLastName'),
            department: formData.get('employeeDepartment')
        }

        if (typeof employeeValues.firstName === "string" && employeeValues.firstName.trim().length >= 3) {
            setNameError("")

        } else  {
            setNameError("Please enter a first name & ensure it is >= 3 characters")
        }
    }

    return(
        <form id="employeeForm" onSubmit={handleSubmission}>
            <label>Employee First Name:
                <input id="firstNameBox" type="text" name="employeeFirstName" />
            </label>
            <p id="nameError">{nameError}</p>

            <label>Employee Last Name:
                <input id="lastNameBox" type="text" name="employeeLastName" />
            </label>

            <label>Employee Department:
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

            <button id="submitButton" type="submit">Submit</button>
            

        </form>
    )
}

export default EmployeeForm