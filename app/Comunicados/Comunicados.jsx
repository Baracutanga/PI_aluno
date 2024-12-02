import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const handlePress = (event) => {
  event.stopPropagation();
};

const Comunicados = ({ name, subject }) => {
  const data = [
    { name: "Lucas Moreira", subject: "História" },
    { name: "Sofia Nogueira", subject: "Português" },
    { name: "Gabriel Costa", subject: "Química" },
    { name: "Mariana Almeida", subject: "Matemática" },
    { name: "Felipe Pereira", subject: "Física" },
  ];

  return (
    <View style={styles.listItem} onTouchStart={handlePress}>
      <View style={styles.itemContent}>
        <Text style={styles.name}>{data.at(0).name}</Text>
        <Text style={styles.subject}>{data.at(0).subject}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>Lido</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    backgroundColor: "#342ead",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#dcdee7",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1e1e1e",
  },
  subject: {
    fontSize: 14,
    color: "#6b6b6b",
  },
  statusContainer: {
    backgroundColor: "#342ead",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  status: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  gradient: {
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Comunicados;
