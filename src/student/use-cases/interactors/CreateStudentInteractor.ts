import { Student } from "../../domain/entities/Student";
import { StudentGateway } from "../../domain/gateways/StudentGateway";
import { CreateStudentRequestModel } from "../dtos/CreateStudentRequestModel";
import { CreateStudentInputBoundary } from "../input-boundary/CreateStudentInputBoundary";
import { CreateStudentOutputBoundary } from "../output-boundary/CreateStudentOutputBoundary";

export class CreateStudentInteractor implements CreateStudentInputBoundary {
    constructor(
        private readonly studentGateway: StudentGateway,
        private readonly presenter: CreateStudentOutputBoundary
    ) {}

    async execute(request: CreateStudentRequestModel) {
        const student = Student.create({
            registrationNumber: request.registrationNumber,
            name: request.name,
            age: request.age,
            course: request.course,
            admissionDate: request.admissionDate,
        });

        await this.studentGateway.save(student);

        // this.presenter.present({
        //     success: true,
        //     message: "Student created successfully.",
        // });
    }
}
