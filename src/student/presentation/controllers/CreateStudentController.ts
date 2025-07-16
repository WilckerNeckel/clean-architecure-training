import { FastifyReply, FastifyRequest } from "fastify";
import { StudentValidator } from "../../domain/ports/StudentValidator";
import { CreateStudentInputBoundary } from "../../use-cases/input-boundary/CreateStudentInputBoundary";

export class CreateStudentController {
    constructor(
        private readonly createStudentUseCase: CreateStudentInputBoundary,
        private readonly studentValidator: StudentValidator
    ) {}

    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const requestModel = this.studentValidator.validateInputCreation(
                request.body
            );
            const result = await this.createStudentUseCase.execute(
                requestModel
            );
            reply.send(result);
        } catch (error) {
            throw error;
        }
    }
}
// 💬 Receives HTTP input, builds the request model, and passes it to the use case.
