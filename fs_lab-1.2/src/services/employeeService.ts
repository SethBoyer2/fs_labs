import type { EmployeeData } from "../types/employees";
import type { Department } from "../components/DepartmentList/Data";
import { createEmployee } from "../repository/employeeRepo";



function validateDept(employee: EmployeeData, Departments:Department[]) {
    if (!Departments.some((department) => department.name === employee.department)) {
    console.log("Your DEPARTMENT. SUCKS!!!!")
    return false
    }
    return true
}

function validateName(employee:EmployeeData) {
    if (employee.firstName.length < 3) {
    console.log("You SUCK!")
    return false
    }
    return true
}

