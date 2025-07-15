export type CreateStudent = {
    id: string;
    registrationNumber: string;
    name: string;
    age: number;
    active: boolean;
    course: string;
    admissionDate: Date;
};

export type CreateStudentInput = {
    registrationNumber: string;
    name: string;
    age: number;
    active?: boolean | null;
    course: string;
    admissionDate: Date;
};
