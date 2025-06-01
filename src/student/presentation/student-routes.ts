import { StudentMongoRepository } from "../infrastructure/StudentMongoRepository";
import { CreateStudentInteractor } from "../use-cases/interactors/CreateStudentInteractor";
import { CreateStudentController } from "./controllers/CreateStudentController";
import { JsonCreateStudentPresenter } from "./presenters/JsonCreateStudentPresenter";

/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export async function routes(fastify, options) {
    const collection = fastify.mongo.db.collection("students");

    fastify.post("/students", async (req, res) => {
        const studentGateway = new StudentMongoRepository();
        const presenter = new JsonCreateStudentPresenter(res);
        const useCase = new CreateStudentInteractor(studentGateway, presenter);
        const controller = new CreateStudentController(useCase);

        controller.handle(req, res);
    });
}
