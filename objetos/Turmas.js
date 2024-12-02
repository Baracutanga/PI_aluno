import Disciplinas from "./Disciplinas";

export default Turmas = [
  {
    turma: "1-A",
    disciplinas: [
      Disciplinas.find((obj) => obj.disciplina == "Matemática"),
      Disciplinas.find((obj) => obj.disciplina == "História"),
      Disciplinas.find((obj) => obj.disciplina == "Geografia"),
      Disciplinas.find((obj) => obj.disciplina == "Física"),
      Disciplinas.find((obj) => obj.disciplina == "Inglês"),
      Disciplinas.find((obj) => obj.disciplina == "Quimica"),
    ],
    turno: "Manhã",
  },
  {
    turma: "1-B",
    disciplinas: [
      Disciplinas.find((obj) => obj.disciplina == "Matemática"),
      Disciplinas.find((obj) => obj.disciplina == "História"),
      Disciplinas.find((obj) => obj.disciplina == "Geografia"),
      Disciplinas.find((obj) => obj.disciplina == "Física"),
      Disciplinas.find((obj) => obj.disciplina == "Inglês II"),
      Disciplinas.find((obj) => obj.disciplina == "Quimica"),
      Disciplinas.find((obj) => obj.disciplina == "Empreend."),
    ],
    turno: "Tarde",
  },
  {
    turma: "2-A",
    disciplinas: [
      Disciplinas.find((obj) => obj.disciplina == "Matemática"),
      Disciplinas.find((obj) => obj.disciplina == "História"),
      Disciplinas.find((obj) => obj.disciplina == "Geografia"),
      Disciplinas.find((obj) => obj.disciplina == "Física"),
      Disciplinas.find((obj) => obj.disciplina == "Inglês III"),
      Disciplinas.find((obj) => obj.disciplina == "Quimica"),
      Disciplinas.find((obj) => obj.disciplina == "Empreend."),
      Disciplinas.find((obj) => obj.disciplina == "Robotica"),
    ],
    turno: "Manhã",
  },
];
