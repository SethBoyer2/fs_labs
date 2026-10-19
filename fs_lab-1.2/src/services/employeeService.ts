import type { EmployeeData } from "../types/employees";
import type { Department } from "../components/DepartmentList/Data";
import { createEmployee } from "../repository/employeeRepo";



function validateDept(employee: EmployeeData, Departments:Department[]) {
    if (!Departments.some((department) => department.name === employee.department)) {
    return false
    }
    return true
}

function validateName(employee:EmployeeData) {
    if (employee.firstName.length < 3) {
    return false
    }
    return true
}

