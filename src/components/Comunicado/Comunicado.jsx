import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const comunicados = [
  {
    id: 1,
    titulo: "Reunião de Pais",
    conteudo:
      "A reunião de pais será realizada na próxima quarta-feira às 19h.",
  },
  {
    id: 2,
    titulo: "Horário de Verão",
    conteudo:
      "Informamos que as aulas passarão a seguir o horário de verão a partir de segunda-feira.",
  },
  {
    id: 3,
    titulo: "Feriado Escolar",
    conteudo:
      "Na próxima sexta-feira não haverá aula devido ao feriado municipal.",
  },
  {
    id: 4,
    titulo: "Entrega de Boletins",
    conteudo: "Os boletins serão entregues aos alunos na próxima terça-feira.",
  },
  {
    id: 5,
    titulo: "Feira de Ciências",
    conteudo:
      "Participe da nossa Feira de Ciências no dia 15 de novembro às 10h.",
  },
  {
    id: 6,
    titulo: "Campanha Solidária",
    conteudo:
      "Doe alimentos não perecíveis para nossa campanha solidária até o final do mês.",
  },
  {
    id: 7,
    titulo: "Treinamento de Emergência",
    conteudo:
      "Teremos um treinamento de evacuação na próxima segunda-feira às 14h.",
  },
  {
    id: 8,
    titulo: "Matrículas Abertas",
    conteudo:
      "As matrículas para o próximo ano já estão abertas. Procure a secretaria.",
  },
  {
    id: 9,
    titulo: "Vacinação Escolar",
    conteudo:
      "Haverá uma campanha de vacinação para os alunos na próxima semana.",
  },
  {
    id: 10,
    titulo: "Aula de Campo",
    conteudo:
      "A turma do 7º ano terá uma aula de campo no parque local na quinta-feira.",
  },
  {
    id: 11,
    titulo: "Entrega de Trabalhos",
    conteudo:
      "O prazo final para a entrega dos trabalhos de história é sexta-feira.",
  },
  {
    id: 12,
    titulo: "Concurso de Redação",
    conteudo: "Inscreva-se no concurso de redação até o dia 20 deste mês.",
  },
  {
    id: 13,
    titulo: "Manutenção Predial",
    conteudo: "Haverá manutenção no prédio principal no próximo sábado.",
  },
  {
    id: 14,
    titulo: "Novo Horário",
    conteudo:
      "A partir de segunda-feira, as aulas do turno da tarde começarão às 13h.",
  },
  {
    id: 15,
    titulo: "Dia da Família",
    conteudo:
      "Convidamos todos para o Dia da Família na escola, no próximo domingo.",
  },
];

const Item = ({ titulo, conteudo }) => {
  return (
    <View style={styles.comunicadoContainer}>
      <Text style={styles.tituloComunicado}>{titulo}</Text>
      <Text style={styles.conteudoComunicado}>{conteudo}</Text>
      <TouchableOpacity style={styles.enterComunicado}>
        <Text style={styles.TextButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const Comunicado = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <FlatList
          data={comunicados}
          renderItem={({ item }) => (
            <Item titulo={item.titulo} conteudo={item.conteudo} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Comunicado;

const styles = StyleSheet.create({
  comunicadoContainer: {
    flex: 1,
    width: 300,
    marginTop: 10,
    backgroundColor: "#fff",
    paddingBottom: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  tituloComunicado: {
    backgroundColor: "#342EAD",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 21,
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  conteudoComunicado: {
    padding: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  enterComunicado: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#342EAD",
    width: 80,
    height: 30,
    borderRadius: 5,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  TextButton: {
    textAlign: "center",
    color: "#fff",
  },
});
