import { FastifyReply } from "fastify";
import { CreateStudentResponseModel } from "../../use-cases/dtos/CreateStudentResponseModel";
import { CreateStudentOutputBoundary } from "../../use-cases/output-boundary/CreateStudentOutputBoundary";

// Formats the response for Fastify (following Fastify patterns)
export class FastifyCreateStudentPresenter
    implements CreateStudentOutputBoundary
{
    constructor(private readonly reply: FastifyReply) {}

    present(response: CreateStudentResponseModel): void {
        const statusCode = response.success ? 200 : 400;
        this.reply.status(statusCode).send(response);
    }
}
