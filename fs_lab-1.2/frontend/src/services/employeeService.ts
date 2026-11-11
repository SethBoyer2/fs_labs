import type { Employee } from "../../../shared/types/employees";
import type { Department } from "../../../shared/types/department";
import { employeeRepository } from "../repository/employeeRepo";


function validateEmployee(input: Employee) {
    const errors: string[] =[]

    if(input.firstName.trim().length < 3){
        errors.push("Employee name must be at least 3 characters")
    }
     if (errors.length > 0) {
        throw new Error(errors.join(" "))
     }
}
export const employeeService = {
    async getEmployees(): Promise<Employee[]> {
        return employeeRepository.getAll()
    },

    async addEmployee(input: Employee): Promise<Employee>{
        const employeeInput: Employee = {
            firstName: input.firstName.trim(),
            lastName: input.lastName?.trim(),
            department: input.department
        }

        validateEmployee(employeeInput)

        return employeeRepository.add(employeeInput)
    } 
}

