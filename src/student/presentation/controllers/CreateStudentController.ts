import { CreateStudentInputBoundary } from "../../use-cases/input-boundary/CreateStudentInputBoundary";

export class CreateStudentController {
    constructor(
        private readonly createStudentUseCase: CreateStudentInputBoundary
    ) {}

    async handle(req: any, res: any): Promise<void> {
        const requestModel = {
            registrationNumber: req.body.registrationNumber,
            name: req.body.name,
            age: req.body.age,
            course: req.body.course,
            admissionDate: new Date(req.body.admissionDate),
        };

        await this.createStudentUseCase.execute(requestModel);
    }
}
// 💬 Receives HTTP input, builds the request model, and passes it to the use case.
