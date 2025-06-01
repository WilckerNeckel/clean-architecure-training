/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export async function routes(fastify, options) {
    const collection = fastify.mongo.db.collection("students");

    fastify.post("/students", async (request, reply) => {
        const studentGateway = new AlunoRepository(); // implements StudentGateway
        const presenter = new JsonCreate(res);
        const useCase = new CreateStudentInteractor(studentGateway, presenter);
        const controller = new CreateStudentController(useCase);

        controller.handle(req, res);
    });
}
