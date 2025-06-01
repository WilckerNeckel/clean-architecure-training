import { CreateStudentResponseModel } from "../../use-cases/dtos/CreateStudentResponseModel";
import { CreateStudentOutputBoundary } from "../../use-cases/output-boundary/CreateStudentOutputBoundary";

// Formats the response into JSON format (could swap with other presenters if needed).
export class JsonCreateStudentPresenter implements CreateStudentOutputBoundary {
    constructor(private readonly res: any) {} // Express Response or similar

    present(response: CreateStudentResponseModel): void {
        this.res.status(response.success ? 200 : 400).json(response);
    }
}
