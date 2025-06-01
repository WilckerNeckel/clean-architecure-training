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
    public name: string;
    private active: boolean;
    public age: number;
    public curso: string;
    public readonly admissionDate?: Date | null;
    private _lastChange?: Date | null;

    private constructor(props: CreateStudent) {
        this.registrationNumber = props.registrationNumber;
        this.name = props.name;
        this.age = props.age;
        this.active = props.active;
        this.curso = props.course;
        this.admissionDate = props.admissionDate ?? new Date();
        this._lastChange = props.lastChange ?? null;
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

    get lastChange() {
        return this._lastChange;
    }

    public deactivate(): void {
        if (!this.active) throw new Error("Student is already deactive");
        this.active = true;
        this.touch();
    }

    public touch(): void {
        this._lastChange = new Date();
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
