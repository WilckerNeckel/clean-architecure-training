import { CreateStudent, CreateStudentInput } from "../models";
import { StudentValidator } from "../ports/StudentValidator";

export class Student {
    public readonly registrationNumber: string;
    public readonly name: string;
    private readonly active: boolean;
    public readonly age: number;
    public readonly curso: string;
    public readonly admissionDate?: Date | null;
    private readonly lastChange?: Date | null;

    private constructor(props: CreateStudent) {
        this.registrationNumber = props.registrationNumber;
        this.name = props.name;
        this.age = props.age;
        this.active = props.active;
        this.curso = props.course;
        this.admissionDate = props.admissionDate ?? new Date();
    }

    public static create(
        props: CreateStudentInput,
        validator: StudentValidator
    ): Student {
        const defaultValues = this.applyDefaultProps(props);
        const resolvedProps = {
            ...props,
            ...defaultValues,
        };

        const validated = validator.validateCreation(resolvedProps);

        return new Student(validated);
    }

    private static applyDefaultProps(props: CreateStudentInput) {
        return {
            active: props.active ?? true,
        };
    }
}
