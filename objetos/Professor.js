import Turmas from "./Turmas";

export default Professores = [
  {
    nome: "Augusto",
    turmas: [
      Turmas.find((obj) => obj.turma == "1-A"),
      Turmas.find((obj) => obj.turma == "1-B"),
    ],
    disciplinas: Turmas.find((obj) => obj.disciplinas == "História"),
  },
  {
    nome: "Rodrigo",
    turmas: [
      Turmas.find((obj) => obj.turma == "1-A"),
      Turmas.find((obj) => obj.turma == "2-A"),
    ],
    disciplinas: Turmas.find((obj) => obj.disciplinas == 'Matemática'),
  },
];
