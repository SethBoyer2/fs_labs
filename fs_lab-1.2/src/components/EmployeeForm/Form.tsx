import { useState } from "react"

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
        <form onSubmit={handleSubmission}>
            <label>Employee First Name:
                <input type="text" name="employeeFirstName" />
            </label>
            <label>Employee Last Name:
                <input type="text" name="employeeLastName" />
            </label>
            <label> Submit New Employee:
                <button type="submit">Submit</button>
            </label>

        </form>
    )
}

export default EmployeeForm