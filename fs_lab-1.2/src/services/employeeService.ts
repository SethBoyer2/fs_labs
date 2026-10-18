import type { EmployeeData } from "../types/employees";
import type { Department } from "../components/DepartmentList/Data";
import { createEmployee } from "../repository/employeeRepo";

function validateEmployee(employee: EmployeeData, Departments: Department[]) {
    let valid = true
    if (employee.firstName.length < 3) {
        console.log("You SUCK!")
        valid = false
    }
    // use .some w arrow function to iterate over departments & check if employee department matches a department name. Return a bool indicating result
    if (!Departments.some((department) => department.name === employee.department)) {
        console.log("Your DEPARTMENT. SUCKS!!!!")
        valid = false
    }

    if (valid == true) {
        createEmployee(employee, Departments)
    }
}


