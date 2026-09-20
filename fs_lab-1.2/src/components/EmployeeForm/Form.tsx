function EmployeeForm () {
    return(
        <form action="submit">
            <label>Employee First Name:
                <input type="text" name="EmployeeFirstName" id="FirstName" />
            </label>
            <label>Employee Last Name:
                <input type="text" name="EmployeeLastName" id="LastName" />
            </label>
            <label> Submit New Employee:
                <input type="button" value="submit" />
            </label>

        </form>
    )
}

export default EmployeeForm