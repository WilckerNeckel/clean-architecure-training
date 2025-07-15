import { Student } from "../domain/entities/Student";
import { StudentGateway } from "../domain/gateways/StudentGateway";

export class StudentMongoRepository implements StudentGateway {
    async save(student: Student): Promise<Student> {
        throw new Error("This method has not implemented yet");
    }
}
