import { Student } from "../entities/Student";

// Abstracts the persistence; the use case doesn't know the implementation details.
export interface StudentGateway {
    save(student: Student): Promise<void>;
}
