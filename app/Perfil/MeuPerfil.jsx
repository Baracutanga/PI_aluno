import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Topo = () => (
  <View style={styles.topo}>
    <Image source={require("./assets/arrow_back_black_24dp.png")} style={styles.icon} />
    <Text style={styles.title}>Chat com Lucas Moreira</Text>
  </View>
);

const Menu = ({ items }) => (
  <View style={styles.menu}>
    {items.map((item, index) => (
      <Text key={index} style={item.style}>
        {item.label}
      </Text>
    ))}
  </View>
);

const Cartao = ({ titulo, texto }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{titulo}</Text>
    <Text style={styles.cardText}>{texto}</Text>
  </View>
);

const MeuPerfil = () => {
  const menuItems = [
    { label: "Home", style: styles.menuText },
    { label: "Contatos", style: styles.menuText },
    { label: "Comunicados", style: styles.menuText },
    { label: "Perfil", style: styles.menuText },
  ];

  return (
    <View style={styles.container}>
      <Topo />
      <Menu items={menuItems} />
      <Cartao titulo="Título" texto="Lorem ipsum dolor sit amet..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topo: { flexDirection: "row", padding: 16, backgroundColor: "#342ead" },
  title: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  icon: { width: 24, height: 24 },
  menu: { flexDirection: "row", justifyContent: "space-around", marginTop: 10 },
  menuText: { fontSize: 12, color: "#342ead" },
  card: { padding: 16, margin: 16, backgroundColor: "#f5f5f5", borderRadius: 8 },
  cardTitle: { fontWeight: "bold", fontSize: 18 },
  cardText: { fontSize: 14, color: "#333" },
});

export default MeuPerfil;