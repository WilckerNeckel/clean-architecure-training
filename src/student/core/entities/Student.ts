export type CreateStudent = {
    registrationNumber: string;
    name: string;
    age: number;
    active: boolean;
    course: string;
    admissionDate: Date;
    lastChange: Date;
};

export type CreateStudentInput = {
    registrationNumber: string;
    name: string;
    age: number;
    active?: boolean | null;
    course: string;
    admissionDate: Date;
    lastChange?: string | null;
};

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
        this.lastChange = props.lastChange ?? null;
    }

    public static create(props: CreateStudentInput): Student {
        if (props.name.length < 3)
            throw new Error("Name of student must has at least 3 characteres");

        const defaultValues = this.applyDefaultProps(props);
        const resolvedProps = {
            ...props,
            ...defaultValues,
        };

        return new Student(resolvedProps);
    }

    private static applyDefaultProps(props: CreateStudentInput) {
        return {
            active: props.active ?? true,
            lastChange: props.lastChange
                ? new Date(props.lastChange)
                : new Date(),
        };
    }
}
