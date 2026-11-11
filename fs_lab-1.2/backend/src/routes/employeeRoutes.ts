import {Router} from "express"
import { employeeController } from "../controllers/employeeController"
import { ValidateEmployeeBody } from "../validations/employeeValidations"
export const employeeRoutes = Router()

employeeRoutes.get(
    "/", 
    employeeController.getAll
)

employeeRoutes.post(
    "/",
    ValidateEmployeeBody,
    employeeController.add

)

employeeRoutes.get(
    "/departments",
    employeeController.getDepartments
)