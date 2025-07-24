import { FastifyReply } from "fastify";
import { CreateStudentResponseModel } from "../../application/dtos/CreateStudentResponseModel";
import { CreateStudentOutputBoundary } from "../../application/output-boundary/CreateStudentOutputBoundary";

// Formats the response into JSON format (could swap with other presenters if needed).
export class JsonCreateStudentPresenter implements CreateStudentOutputBoundary {
    constructor(private readonly res: FastifyReply) {} // Express Response or similar

    present(response: CreateStudentResponseModel): void {
        this.res.code(response.success ? 200 : 400).send(response);
    }
}
