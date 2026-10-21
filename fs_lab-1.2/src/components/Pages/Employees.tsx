import EmployeeForm from "../EmployeeForm/Form";
import DepartmentList from "../DepartmentList/DepartmentList";
import { useState } from "react";
import Departments from "../DepartmentList/Data";


function Employees() {
const [departments, setDepartments] = useState(Departments)
    return (
        <main>
            <EmployeeForm departments={departments} updateDepartments={setDepartments}/>
            <DepartmentList departments={departments} />
        </main>
    )
}

export default Employees