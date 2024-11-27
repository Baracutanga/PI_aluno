import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import Perfil from "../../../app/Perfil/Perfil";
import RootStack from "../../../app/Home/Home";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
    <ButtonComp name="Início" navigate={RootStack} />
      <ButtonComp name="Comunicados" />
      <ButtonComp name="Contatos" />
      <ButtonComp name="Perfil" navigate={Perfil} />
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
  },
});
