import { CreateStudentResponseModel } from "../dtos/CreateStudentResponseModel";

//  Defines how the use case gives output to the presenter.
export interface CreateStudentOutputBoundary {
    present(response: CreateStudentResponseModel): void;
}
