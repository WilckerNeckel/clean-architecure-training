import { FastifyReply, FastifyRequest } from "fastify";
import { StudentValidator } from "../../domain/ports/StudentValidator";
import { CreateStudentInputBoundary } from "../../application/input-boundary/CreateStudentInputBoundary";
import { StudentMongoRepository } from "../../infrastructure/StudentMongoRepository";
import { JsonCreateStudentPresenter } from "../presenters/JsonCreateStudentPresenter";
import { CreateStudentInteractor } from "../../application/interactors/CreateStudentInteractor";
import { ZodStudentValidator } from "../../domain/adapters/ZodStudentValidator";
import { CreateStudentOutputBoundary } from "../../application/output-boundary/CreateStudentOutputBoundary";

export class CreateStudentController {
    constructor(
        private readonly createStudentUseCase: CreateStudentInputBoundary,
        private readonly studentValidator: StudentValidator,
        private readonly presenter: CreateStudentOutputBoundary
    ) {}

    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const requestModel = this.studentValidator.validateInputCreation(
                request.body
            );
            const result = await this.createStudentUseCase.execute(
                requestModel
            );
            this.presenter.present;
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
    const controller = new CreateStudentController(
        useCase,
        validator,
        presenter
    );
    return controller;
};

// 💬 Receives HTTP input, builds the request model, and passes it to the use case.
