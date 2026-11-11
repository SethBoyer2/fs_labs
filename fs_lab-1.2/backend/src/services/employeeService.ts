import { Employee } from "../Types/Employee";
import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {
    getAll() {
        return employeeRepository.getAll()
    },

    async add(input: Employee) {
        return employeeRepository.add(input)
    },

    getDepartments() {
        return employeeRepository.getDepartments()
    }
}