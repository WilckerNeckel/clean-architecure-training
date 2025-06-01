import { CreateStudentRequestModel } from "../dtos/CreateStudentRequestModel";

// Defines what the controller can call on the use case.
export interface CreateStudentInputBoundary {
    execute(request: CreateStudentRequestModel): Promise<void>;
}
