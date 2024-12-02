import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import Perfil from "../../../app/Perfil/Perfil";
import RootStack from "../../../app/Home/Home";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <ButtonComp name="Início" navigate={HomeScreenRoot} icon={HomeIcon} />
      <ButtonComp
        name="Comunicados"
        icon={ComunicadosIcon}
        navigate={Comunicados}
      />
      <ButtonComp name="Contatos" icon={ContatosIcon} navigate={Contatos} />
      <ButtonComp name="Perfil" navigate={Perfil} icon={PerfilIcon} />
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
