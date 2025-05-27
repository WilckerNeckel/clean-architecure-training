export class Aluno {
    constructor(
        public matricula: string,
        public nome: string,
        public idade: number,
        public curso: string,
        public dataAdmissao: Date
    ) {}
}
