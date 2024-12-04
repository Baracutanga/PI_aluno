import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native";

const ListItem = ({ name, subject }) => (
  <View style={styles.listItem}>
    <View style={styles.itemContent}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subject}>{subject}</Text>
    </View>
    <View style={styles.statusContainer}>
      <Text style={styles.status}>Lido</Text>
    </View>
  </View>
);

const Comunicados = () => {
  const data = [
    { name: "Lucas Moreira", subject: "História" },
    { name: "Sofia Nogueira", subject: "Português" },
    { name: "Gabriel Costa", subject: "Química" },
    { name: "Mariana Almeida", subject: "Matemática" },
    { name: "Felipe Pereira", subject: "Física" },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comunicados</Text>
      </View>
      <View style={styles.list}>
        {data.map((item, index) => (
          <ListItem key={index} name={item.name} subject={item.subject} />
        ))}
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={["rgba(217, 217, 217, 0)", "rgba(115, 115, 115, 0.6)"]}
        useAngle
        angle={180}
      />
    </ScrollView>
    </SafeAreaView>
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
