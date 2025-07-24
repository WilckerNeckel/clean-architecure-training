import z from "zod";

export const createStudentRequestModelValidator = z.object({
    registrationNumber: z.string(),
    name: z
        .string()
        .min(3, { message: "O nome tem que ter no mínimo 3 letras" }),
    age: z.number().min(16),
    active: z.boolean().optional().nullable(),
    course: z.string(),
    admissionDate: z.string(),
});
