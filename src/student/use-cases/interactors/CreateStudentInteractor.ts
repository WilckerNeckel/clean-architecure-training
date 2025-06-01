import { Student } from "../../core/entities/Student";
import { StudentGateway } from "../../core/gateways/StudentGateway";
import { CreateStudentRequestModel } from "../dtos/CreateStudentRequestModel";
import { CreateStudentInputBoundary } from "../input-boundary/CreateStudentInputBoundary";
import { CreateStudentOutputBoundary } from "../output-boundary/CreateStudentOutputBoundary";

export class CreateStudentInteractor implements CreateStudentInputBoundary {
    constructor(
        private readonly studentGateway: StudentGateway,
        private readonly presenter: CreateStudentOutputBoundary
    ) {}

    async execute(request: CreateStudentRequestModel): Promise<void> {
        try {
            const student = Student.create({
                registrationNumber: request.registrationNumber,
                name: request.name,
                age: request.age,
                course: request.course,
                admissionDate: request.admissionDate,
            });

            await this.studentGateway.save(student);

            this.presenter.present({
                success: true,
                message: "Student created successfully.",
            });
        } catch (error) {
            this.presenter.present({
                success: false,
                message: (error as Error).message,
            });
        }
    }
}
