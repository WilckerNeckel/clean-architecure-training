import { FastifyReply, FastifyRequest } from "fastify";
import { StudentValidator } from "../../domain/ports/StudentValidator";
import { CreateStudentInputBoundary } from "../../use-cases/input-boundary/CreateStudentInputBoundary";
import { StudentMongoRepository } from "../../infrastructure/StudentMongoRepository";
import { JsonCreateStudentPresenter } from "../presenters/JsonCreateStudentPresenter";
import { CreateStudentInteractor } from "../../use-cases/interactors/CreateStudentInteractor";
import { ZodStudentValidator } from "../../domain/adapters/ZodStudentValidator";

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

export const makeCreateStudentController = (
    req: FastifyRequest,
    res: FastifyReply
) => {
    const studentGateway = new StudentMongoRepository();
    const presenter = new JsonCreateStudentPresenter(res);
    const useCase = new CreateStudentInteractor(studentGateway, presenter);
    const validator = new ZodStudentValidator();
    const controller = new CreateStudentController(useCase, validator);
    return controller;
};

// 💬 Receives HTTP input, builds the request model, and passes it to the use case.
