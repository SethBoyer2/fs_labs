import Departments from "../../data/Data";
import { Employee } from "../Types/Employee";
import type { Department } from "../../../shared/types/department";

let employees: Employee[] = Departments.flatMap((department) =>
  department.employees.map((employee) => ({
    ...employee,
    department: department.name,
  }))
);

export const employeeRepository = {
  // getAll Promises to return an ARRAY of EMPLOYEE objects.
    async getAll(): Promise<Employee[]> {
        return employees.map((employee) => ({
            ...employee
        }))
    },

    // Promise an Employee object
    async add(input: Employee): Promise<Employee> {
      // create a new employee out of a spread of the input
      const employee: Employee = {
        ...input
      }

      // create a new array, spreading the old array and adding the new employee
      employees = [...employees, employee]

      // to match with our promise, return only a single employee. 
      // This is returned to the service, which returns to the controller, who sends the json response.
      return {...employee}
    },

    // this is terrible and I shouldn't have had to do this in the first place
    // learning experience
    async getDepartments(): Promise<Department[]> {
      // iterate over each department and create a new department obj
      return Departments.map((department) => ({
        // copy currently iterated dept. name
        name: department.name,
        // filter current employees array where employee.department === department.name to assign relevant employees to the proper department
        employees: employees.filter(
          (employee) => employee.department === department.name
        )
      }));
    }
}
/* 
in hindsight, I should've STARTED with the department-based logic instead of making it all employee based
cause I ended up needing it for the app.tsx props anyways */