import type { Employee } from "../../../shared/types/employees";
import type { Department } from "../../../shared/types/department";

const baseUrl = import.meta.env.VITE_API_BASE_URL
const endpoint = `${baseUrl}/api/employees`

async function readJson<T>(
    response: Response
): Promise<T> {
    if(!response.ok) {
        throw new Error(`API Error: ${response.status}`)
    }

    return (await response.json()) as T
}

export const employeeRepository = {
    async getAll(): Promise<Employee[]> {
        const response = await fetch(endpoint)
        return readJson<Employee[]>(response)
    },

    async add(input: Employee): Promise<Employee> {
        const response = await fetch (endpoint, {
            method:"POST",
            headers: {"Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        })
        return readJson<Employee>(response)
    },

    async getDepartments(): Promise<Department[]> {
        const response = await fetch(`${endpoint}/departments`)
        return readJson<Department[]>(response)
    }
}
