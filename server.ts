// ESM
import Fastify from "fastify";
import { studentRoutes } from "./src/student/presentation/student-routes";

const fastify = Fastify({
    logger: true,
});

fastify.register(studentRoutes);

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    // Server is now listening on ${address}
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: "0.0.0.0" });
        console.log(`Server is running at http://localhost:3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
