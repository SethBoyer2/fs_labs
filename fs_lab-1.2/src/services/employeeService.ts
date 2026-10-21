import type { EmployeeData } from "../types/employees";
import type { Department } from "../components/DepartmentList/Data";
import { createEmployee } from "../repository/employeeRepo";


// if employee's department isn't in the department list, return false
export function validateDept(employee: EmployeeData, Departments:Department[]) {
    if (!Departments.some((department) => department.name === employee.department)) {
    return false
    }
    return true
}

// if employee's name is less than 3 characters in length, return false
export function validateName(employee:EmployeeData) {
    if (employee.firstName.length < 3) {
    return false
    }
    return true
}

// call createEmployee with the validated employee + Departments and return Department[] from the repo
export function addEmployee(employee: EmployeeData, Departments: Department[]): Department[] {
    return createEmployee(employee, Departments)
}


