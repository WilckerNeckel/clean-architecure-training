import { CreateStudent, CreateStudentInput } from "../models";

export interface StudentValidator {
    validateCreation: (input: any) => CreateStudent;
    validateInputCreation: (input: any) => CreateStudentInput;
}
