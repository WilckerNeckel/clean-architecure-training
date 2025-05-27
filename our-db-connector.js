// ESM
import fastifyPlugin from "fastify-plugin";
import fastifyMongo from "@fastify/mongodb";

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
export async function dbConnector(fastify, options) {
    fastify.register(fastifyMongo, {
        url: "mongodb://root:example@localhost:27017/test_database?authSource=admin",
    });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
export default fastifyPlugin(dbConnector);
