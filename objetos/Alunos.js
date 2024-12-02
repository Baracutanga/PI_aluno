import Turmas from "./Turmas";

export default Aluno = [
  {
    nome: "Pedro",
    turma: Turmas.find((obj) => obj.turma == "1-A"),
    email: "pedro@email.com",
    senha: "senhabraba123",
  },
  {
    nome: "Ana",
    turma: Turmas.find((obj) => obj.turma == "1-A"),
    email: "ana@email.com",
    senha: "senhabraba123",
  },
  {
    nome: "Francisco",
    turma: Turmas.find((obj) => obj.turma == "1-B"),
    email: "francisco@email.com",
    senha: "senhabraba123",
  },
  {
    nome: "Miguel",
    turma: Turmas.find((obj) => obj.turma == "1-B"),
    email: "miguel@email.com",
    senha: "senhabraba123",
  },
  {
    nome: "Maria",
    turma: Turmas.find((obj) => obj.turma == "2-A"),
    email: "maria@email.com",
    senha: "senhabraba123",
  },
  {
    nome: "Clara",
    turma: Turmas.find((obj) => obj.turma == "2-B"),
    email: "clara@email.com",
    senha: "senhabraba123",
  },
];
