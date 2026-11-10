import type {Request, Response} from "express"
import { Employee } from "../Types/Employee"
import { employeeService } from "../services/employeeService"

// export all controller functions
export const employeeController = {

    // Function to return all employees in a json response
    // create new var employees as return of employeeSerivce.getAll
    // Return as a json response
    async getAll(req: Request, res: Response) {
        const employees = await employeeService.getAll()
        res.json(employees)
    },

    async add(res: Response, req: Request) {
        // body has already passed validation middleware(?)
        // implement dat
        const employee = await employeeService.add(
            req.body as Employee // call monsterService.add with the request body as an EmployeeData object
        )
    }
}