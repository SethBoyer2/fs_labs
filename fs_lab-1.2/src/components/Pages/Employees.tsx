import EmployeeForm from "../EmployeeForm/Form";
import DepartmentList from "../DepartmentList/DepartmentList";
import { useState } from "react";
import Departments from "../DepartmentList/Data";

const [departments, setDepartments] = useState(Departments)
function Employees() {
    return (
        <main>
            <EmployeeForm departments={departments} updateDepartments={setDepartments}/>
            <DepartmentList departments={departments} />
        </main>
    )
}

export default Employees