export type CreateStudentDomain = {
    id?: string;
    registrationNumber: string;
    name: string;
    age: number;
    active: boolean;
    course: string;
    admissionDate: Date;
};