import type { EmployeeData } from "../types/employees";
import type { Department } from "../components/DepartmentList/Data";

// iterate through department list, and once the department name = employee's department, return the department with all of its original employees + the new employee
  export function createEmployee(employee: EmployeeData, Departments: Department[]): Department[] {
    return Departments.map((department) => {
        if (department.name === employee.department) {
            return {
                ...department,
                employees:[...department.employees, employee]
            }
        }
        return department
    })
  }


