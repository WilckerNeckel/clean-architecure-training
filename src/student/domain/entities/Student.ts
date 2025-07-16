import { ZodStudentValidator } from "../adapters/ZodStudentValidator";
import { CreateStudent, CreateStudentInput } from "../models";
import { StudentValidator } from "../ports/StudentValidator";

export class Student {
    public readonly registrationNumber: string;
    public readonly name: string;
    public readonly active: boolean;
    public readonly age: number;
    public readonly course: string;
    public readonly admissionDate: Date;

    private constructor(props: CreateStudent) {
        this.registrationNumber = props.registrationNumber;
        this.name = props.name;
        this.age = props.age;
        this.active = props.active;
        this.course = props.course;
        this.admissionDate = props.admissionDate ?? new Date();
    }

    public static create(
        props: CreateStudentInput,
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

    public static fromDb(props: CreateStudent): Student {
        return new Student(props);
    }

    private static applyDefaultProps(props: CreateStudentInput) {
        return {
            active: props.active ?? true,
            admissionDate: new Date(props.admissionDate),
        };
    }
}
