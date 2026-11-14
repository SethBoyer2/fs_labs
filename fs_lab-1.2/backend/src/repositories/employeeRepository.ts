import Departments from "../../data/Data";
import { Employee } from "../Types/Employee";
import type { Department } from "../../../shared/types/department";
import { prisma } from "../db/prisma";

let employees: Employee[] = Departments.flatMap((department) =>
  department.employees.map((employee) => ({
    ...employee,
    department: department.name,
  }))
);

type DbEmployee = {
  id: number
  firstName: string
  lastName: string | null
  departmentID: number
  Department: {
    id: number
    name: string
  }
}

type DbDepartment = {
  id: number
  name: string
  employees: {
    id: number
    firstName: string
    lastName: string | null
    departmentID: number
  }[];
}


function toEmployee(row: DbEmployee): Employee {
  return {
    firstName: row.firstName,
    lastName: row.lastName ?? undefined,
    department: row.Department.name
  }
}

// map employees and grab first and last name, shared type doesn't use an id
function toDepartment(row: DbDepartment): Department {
  return {
    name: row.name,
    employees: row.employees.map(employee => ({
      firstName: employee.firstName,
      lastName: employee.lastName ?? undefined
    }))
  }
}

export const employeeRepository = {
  // getAll Promises to return an ARRAY of EMPLOYEE objects.
    async getAll(): Promise<Employee[]> {
      const employees = await prisma.employee.findMany({
        include: {
          Department: true // grab the employee AND the associated department so that toEmployee can access the department name
        }
      })

      return employees.map(toEmployee)
    },

    // Promise an Employee object
    async add(input: Employee): Promise<Employee> {
      // create a new employee out of a spread of the input
      const employee = await prisma.employee.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName ?? null,
          Department: {
            connect: {
              name: input.department // connect employee to the dept
            }
          },
        },
        include: {
            Department: true
          }
      })
      return toEmployee(employee)
    },

    // this is terrible and I shouldn't have had to do this in the first place
    // learning experience
    async getDepartments(): Promise<Department[]> {
      const departments = await prisma.department.findMany({
        include: {
          employees: true
        }
      })
    

      return departments.map(toDepartment)
  }
}
/* 
in hindsight, I should've STARTED with the department-based logic instead of making it all employee based
cause I ended up needing it for the app.tsx props anyways */