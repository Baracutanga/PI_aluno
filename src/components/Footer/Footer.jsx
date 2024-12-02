import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import Perfil from "../../../app/Perfil/Perfil";
import HomeScreenRoot from "../../../app/Home/Home";
import ComunicadosIcon from "../../../img/icons/forum.png"
import Comunicados from "../../../app/Comunicados/Comunicados";
import HomeIcon from "../../../img/icons/home.png"
import ContatosIcon from "../../../img/icons/contatos.png"
import Contatos from "../../../app/Contatos/Contatos"
import PerfilIcon from "../../../img/icons/perfil.png"

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
    <ButtonComp name="Início" navigate={HomeScreenRoot} icon={HomeIcon} />
      <ButtonComp name="Comunicados" icon={ComunicadosIcon} navigate={Comunicados} />
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
