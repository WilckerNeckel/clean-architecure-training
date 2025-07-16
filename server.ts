// ESM
import Fastify from "fastify";
import { studentRoutes } from "./src/student/presentation/student-routes";
import { ensureEnvIsConfigured } from "./scripts/ensureEnvIsConfigured";
import dotenv from "dotenv";
import { errorHandler } from "./src/shared/middlewares/error-middeware";

const fastify = Fastify({
    logger: true,
});

fastify.setErrorHandler(errorHandler);

fastify.register(studentRoutes);

const start = async () => {
    try {
        // dotenv.config();
        // ensureEnvIsConfigured();
        await fastify.listen({ port: 3000, host: "0.0.0.0" });
        console.log(`Server is running at http://localhost:3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
