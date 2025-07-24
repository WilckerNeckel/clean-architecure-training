import z from "zod";
import { CreateStudentDomain } from "../models";
import { StudentValidator } from "../ports/StudentValidator";

export class ZodStudentValidator implements StudentValidator {
    public validateCreation(input: any): CreateStudentDomain {
        const validator = z.object({
            id: z.string().optional(),
            registrationNumber: z.string(),
            name: z.string(),
            age: z.number().min(16),
            active: z.boolean(),
            course: z.string(),
            admissionDate: z.date(),
        });

        return validator.parse(input);
    }

}
