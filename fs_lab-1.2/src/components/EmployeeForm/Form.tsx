import { useState } from "react"

interface employeeData {
    firstName: string
    lastName: string
    department: 'Administration' | 'Audit' | 'Banking Operations' |
    'Communications' | 'Corporate Services' | 'Facilities' | 'Financial Services' |
    'Human Resources' | 'Information Technology' | 'It Technician'

}
function EmployeeForm () {
    function handleSubmission(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

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
                <button type="submit"></button>
            </label>

        </form>
    )
}

export default EmployeeForm