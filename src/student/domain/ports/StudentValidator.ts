import { CreateStudentDomain } from "../models";

export interface StudentValidator {
    validateCreation: (input: any) => CreateStudentDomain;
}
