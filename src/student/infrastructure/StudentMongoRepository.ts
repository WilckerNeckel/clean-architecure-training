import { mongoDb } from "../../database/db";
import { Student } from "../domain/entities/Student";
import { StudentGateway } from "../domain/gateways/StudentGateway";

export class StudentMongoRepository implements StudentGateway {
    private db = mongoDb;

    async findAll(): Promise<Student[]> {
        try {
            const docs = await this.db.collection("student").find().toArray();
            return docs.map((doc) =>
                Student.fromDb({
                    id: doc._id.toString(),
                    name: doc.name,
                    registrationNumber: doc.registrationNumber,
                    age: doc.age,
                    active: doc.active,
                    course: doc.course,
                    admissionDate: doc.admissionDate,
                })
            );
        } catch (error) {
            throw error;
        }
    }
    async save(student: Student): Promise<Student> {
        try {
            const result = await this.db.collection("student").insertOne({
                name: student.name,
                registrationNumber: student.registrationNumber,
                age: student.age,
                active: student.active,
                course: student.course,
                admissionDate: student.admissionDate,
            });
            return Student.fromDb({
                id: result.insertedId.toString(),
                name: student.name,
                registrationNumber: student.registrationNumber,
                age: student.age,
                active: student.active,
                course: student.course,
                admissionDate: student.admissionDate,
            });
        } catch (error) {
            throw error;
        }
    }
}
