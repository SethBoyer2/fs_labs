import { use, useState } from "react"
import './Form.css'


export interface EmployeeData {
    firstName: string
    lastName: string
    department: string
    // Changing department type to string because it isn't possible to select a different department
    // than what is listed on the select

}
function EmployeeForm () {
    // useState is function scoped
    const [nameError, setNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [validationError, setValidationError] = useState('')

    function handleSubmission(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        let valid = true
        // event.target refers to the DOM element that triggered the event
        const formData = new FormData(event.target)
        
        const firstName = formData.get('employeeFirstName')
        const lastName = formData.get('employeeLastName')
        const department = formData.get('employeeDepartment')

        console.log(department)
        
        if (typeof firstName === "string" && firstName.trim().length >= 3) {
            setNameError("")
        } else{
            setNameError("First name must be longer than three characters")
            valid = false
        }

        if (typeof lastName === "string" && lastName.trim().length >= 2) {
            setLastNameError("")
        } else{
            setLastNameError("Last name must be longer than two characters")
            valid = false
        }

        if (typeof firstName === "string" && typeof lastName === "string" && typeof department === "string" && valid === true) {
            setValidationError("")
            const employeeValues: EmployeeData = {
                firstName: firstName,
                lastName: lastName,
                department: department
            }
            console.log(employeeValues)
        } else if (valid === false){
            setValidationError("Please ensure employee name meets standards")
        }
    }

    return(
        <form id="employeeForm" onSubmit={handleSubmission}>
            <p>{validationError}</p>
            <label>Employee First Name:
                <input id="firstNameBox" type="text" name="employeeFirstName" />
            </label>
            <p className="name-Error">{nameError}</p>

            <label>Employee Last Name:
                <input id="lastNameBox" type="text" name="employeeLastName" />
            </label>
            <p className="name-Error">{lastNameError}</p>

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