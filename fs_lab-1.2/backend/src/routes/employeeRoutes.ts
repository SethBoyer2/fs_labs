import {Router} from "express"
import { employeeController } from "../controllers/employeeController"
export const employeeRoutes = Router()

employeeRoutes.get(
    "/", 
    employeeController.getAll
)

employeeRoutes.post(
    "/",
    validateEmployeeBody,
    employeeController.add

)