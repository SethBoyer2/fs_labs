import type { Department } from "./Data"
import "./DepartmentList.css"


function DepartmentList({departments}: {departments: Department[]}) {
    return(
        departments.map((department) => (
            <section>
                <h2 id={department.name}>{department.name}</h2>

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