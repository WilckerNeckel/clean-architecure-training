import { Student } from "../../domain/entities/Student";

export type CreateStudentResponseModel = {
    success: boolean;
    message: string;
    student: Student;
};
