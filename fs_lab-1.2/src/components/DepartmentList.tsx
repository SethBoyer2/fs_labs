import Departments from "./Data"
import "./DepartmentList.css"

function DepartmentList() {
    return(
        Departments.map((department) => (
            <section>
                <h2>{department.name}</h2>

                <ul>
                    {department.employees.map((employee) => (
                        <li>
                            {employee.firstName} {employee.lastName}
                        </li>

                    ))}
                </ul>
            </section>
        ))
    )
}

export default DepartmentList