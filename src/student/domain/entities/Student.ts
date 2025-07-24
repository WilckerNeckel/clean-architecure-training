import { CreateStudentRequestModel } from "../../application/dtos/CreateStudentRequestModel";
import { ZodStudentValidator } from "../adapters/ZodStudentValidator";
import { CreateStudentDomain } from "../models";
import { StudentValidator } from "../ports/StudentValidator";

export class Student {
    public readonly registrationNumber: string;
    public readonly name: string;
    public readonly active: boolean;
    public readonly age: number;
    public readonly course: string;
    public readonly admissionDate: Date;

    private constructor(props: CreateStudentDomain) {
        this.registrationNumber = props.registrationNumber;
        this.name = props.name;
        this.age = props.age;
        this.active = props.active;
        this.course = props.course;
        this.admissionDate = props.admissionDate ?? new Date();
    }

    public static create(
        props: any,
        validator: StudentValidator = new ZodStudentValidator()
    ): Student {
        const defaultValues = this.applyDefaultProps(props);
        const resolvedProps = {
            ...props,
            ...defaultValues,
        };

        const validated = validator.validateCreation(resolvedProps);

        return new Student(validated);
    }

    public static fromDb(props: CreateStudentDomain): Student {
        return new Student(props);
    }

    private static applyDefaultProps(props: any) {
        return {
            active: props.active ?? true,
            admissionDate: new Date(props.admissionDate),
        };
    }
}
