import { FastifyInstance } from "fastify";
import { StudentMongoRepository } from "../infrastructure/StudentMongoRepository";
import { CreateStudentInteractor } from "../use-cases/interactors/CreateStudentInteractor";
import { CreateStudentController } from "./controllers/CreateStudentController";
import { JsonCreateStudentPresenter } from "./presenters/JsonCreateStudentPresenter";

export async function studentRoutes(fastify: FastifyInstance) {
    fastify.post("/students", async (req, res) => {
        const studentGateway = new StudentMongoRepository();
        const presenter = new JsonCreateStudentPresenter(res);
        const useCase = new CreateStudentInteractor(studentGateway, presenter);
        const controller = new CreateStudentController(useCase);

        controller.handle(req, res);
    });
}
