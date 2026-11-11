import type { Employee } from "../../../shared/types/employees";
import type { Department } from "../../../shared/types/department";
import { createEmployee } from "../repository/employeeRepo";


// if employee's department isn't in the department list, return false
export function validateDept(employee: Employee, Departments:Department[]) {
    if (!Departments.some((department) => department.name === employee.department)) {
    return false
    }
    return true
}

// if employee's name is less than 3 characters in length, return false
export function validateName(employee:Employee) {
    if (employee.firstName.length < 3) {
    return false
    }
    return true
}

// call createEmployee with the validated employee + Departments and return Department[] from the repo
export function addEmployee(employee: Employee, Departments: Department[]): Department[] {
    return createEmployee(employee, Departments)
}


