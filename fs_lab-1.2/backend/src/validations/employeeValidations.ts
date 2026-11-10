import type { RequestHandler } from "express";
import { z } from "zod"

const employeeSchema = z.object({
    firstName: z.string().trim().min(3),
    lastName: z.string().trim().optional()
    department: z.string().trim().min(2)
})