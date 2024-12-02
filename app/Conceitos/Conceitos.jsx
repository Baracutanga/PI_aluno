import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Footer from "../../src/components/Footer/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Alunos from "../../objetos/Alunos";

const Item = ({ disciplina, av1, av2, noa1, noa2 }) => (
  <View style={styles.discList}>
    <Text style={styles.disciplina}>{disciplina}</Text>
    <Text style={styles.avaliacoesList}>{av1}</Text>
    <Text style={styles.avaliacoesList}>{av2}</Text>
    <Text style={styles.avaliacoesList}>{noa1}</Text>
    <Text style={styles.avaliacoesLast}>{noa2}</Text>
  </View>
);

const Conceitos = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerConceitos}>
        <View style={styles.unidadesSelector}>
          <TouchableOpacity style={styles.unidades}>
            <Text style={styles.unidadesText}>1º Unidade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.unidades}>
            <Text style={styles.unidadesText}>2º Unidade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.unidades}>
            <Text style={styles.unidadesText}>3º Unidade</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.headerTable}>
            <Text style={styles.avaliacoes}>Disciplinas</Text>
            <Text style={styles.avaliacoes}>AV1</Text>
            <Text style={styles.avaliacoes}>AV2</Text>
            <Text style={styles.avaliacoes}>NOA</Text>
            <Text style={styles.avaliacoesLRow}>NOA</Text>
          </View>
          <FlatList
            data={
              Alunos.find((obj) => obj.email === "pedro@email.com").turma
                .disciplinas
            }
            renderItem={({ item }) => (
              <Item
                disciplina={item.disciplina}
                av1="Bom"
                av2="Ótimo"
                noa1="ANS"
                noa2="Exc."
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Conceitos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFAFC"
  },
  containerConceitos: {
    height: "70.9%",
    width: "95%",
    alignItems: "center",
    marginBottom: "32%",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: .4,
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 3,
  },
  unidadesSelector: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  unidades: {
    borderWidth: 1,
    borderColor: "#D1D1D1",
    padding: 5,
    borderRadius: 3,
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  unidadesText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  tableContainer: {
    display: "flex",
    width: "90%",
  },
  headerTable: {
    width: "100%",
    flexDirection: "row",
  },
  discList: {
    flexDirection: "row",
    width: "100%",
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: .4,
    shadowRadius: 10,
    elevation: 2,
  },
  disciplina: {
    padding: 5,
    width: "30.3%",
    borderBottomWidth: 1,
    borderBottomColor: "#D1D1D1",
    borderLeftWidth: 1,
  },
  avaliacoesList: {
    borderLeftColor: "#D1D1D1",
    borderLeftWidth: 1,
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D1D1",
  },
  avaliacoesLast: {
    borderRightColor: "#D1D1D1",
    borderLeftColor: "#D1D1D1",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D1D1",
  },
  avaliacoes: {
    backgroundColor: "#342EAD",
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    borderLeftColor: "#fff",
    borderLeftWidth: 1,
  },
  avaliacoesLRow: {
    backgroundColor: "#342EAD",
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
  },
});
