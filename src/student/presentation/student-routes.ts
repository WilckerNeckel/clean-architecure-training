import { FastifyInstance } from "fastify";
import { makeCreateStudentController } from "./controllers/CreateStudentController";

export async function studentRoutes(fastify: FastifyInstance) {
    fastify.post("/students", async (req, res) => {
        await makeCreateStudentController(req, res).handle(req, res);
    });
}
