import type { RequestHandler } from "express";
import { z } from "zod"

// It would make more sense to make the department require one of the preset strings
const employeeSchema = z.object({
    firstName: z.string().trim().min(3),
    lastName: z.string().trim().optional(),
    department: z.string().trim().min(2) 
}).strict()

export const ValidateEmployeeBody: RequestHandler = (
    req, res, next
) => {
    const result = employeeSchema.safeParse(req.body)

    if(!result.success) {
        res.status(400).json({
            error: "Invalid employee",
            details: z.flattenError(result.error)
        })
        return
    }
    req.body = result.data
    next()
}