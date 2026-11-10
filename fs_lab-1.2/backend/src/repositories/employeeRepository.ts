import Departments from "../../data/Data";
import { Employee } from "../Types/Employee";

let employees: Employee[] = Departments.flatMap((department) =>
  department.employees.map((employee) => ({
    ...employee,
    department: department.name,
  }))
);

export const employeeRepository = {
    async getAll(): Promise<Employee[]> {
        return employees.map((employee) => ({
            ...employee
        }))
    },

    async add(input: Employee): Promise<Employee> {
      const employee: Employee = {
        ...input
      }
    }

}