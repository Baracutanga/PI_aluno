import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonComp from "../ButtonComp/ButtonComp";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <ButtonComp name="Início" />
      <ButtonComp name="Comunicados" />
      <ButtonComp name="Contatos" />
      <ButtonComp name="Perfil" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#342EAD",
    position: "absolute",
    top: 677
  },
});
