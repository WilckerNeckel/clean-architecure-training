import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";

export function errorHandler(
    error: FastifyError,
    request: FastifyRequest,
    reply: FastifyReply
) {
    if (error instanceof ZodError) {
        const errors = error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
        }));

        const type = "VALIDATION_ERROR";
        const message =
            Array.isArray(errors) && errors[0]?.message?.trim()
                ? errors[0].message
                : "Erro ao validar objeto";

        request.log.error(message);

        reply.status(400).send({
            type: type,
            status: "error",
            message: message,
            errors: errors,
        });
    }

    request.log.error(error);

    const statusCode = error.statusCode ?? 500;
    reply.status(statusCode).send({
        status: "error",
        message: error.message,
    });
}
