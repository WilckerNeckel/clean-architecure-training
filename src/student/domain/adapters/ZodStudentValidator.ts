import z from "zod";
import { CreateStudent, CreateStudentInput } from "../models";
import { StudentValidator } from "../ports/StudentValidator";

export class ZodStudentValidator implements StudentValidator {
    public validateCreation(input: any): CreateStudent {
        const validator = z.object({
            registrationNumber: z.string(),
            name: z.string(),
            age: z.number().min(16),
            active: z.boolean(),
            course: z.string(),
            admissionDate: z.date(),
        });

        return validator.parse(input);
    }

    public validateInputCreation(input: any): CreateStudentInput {
        const validator = z.object({
            registrationNumber: z.string(),
            name: z
                .string()
                .min(3, { message: "O nome tem que ter no mínimo 3 letras" }),
            age: z.number().min(16),
            active: z.boolean().optional().nullable(),
            course: z.string(),
            admissionDate: z.date(),
        });

        return validator.parse(input);
    }
}
