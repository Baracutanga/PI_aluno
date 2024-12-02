import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "../../src/components/Footer/Footer";

const Perfil = () => {
  const usuario = {
    nome: "Rodrigo",
    senha: "12345",
    email: "rodrigo@email.com",
  };
  const senhaSegura = usuario.senha
    .split("")
    .map(() => "*")
    .join("");

  return (
    <SafeAreaProvider>
      <View style={styles.mainContainer}>
        {/* Perfil = Nome e imagem */}
        <View style={styles.profileContainer}>
          <Image
            source={require("../../img/Profile-PNG-File.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Daniela Correa</Text>
        </View>

        {/* Linha amarela */}
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>

        {/* Informações do usuário */}
        <View style={styles.opc}>
          <Text style={styles.text}>Nome completo:</Text>

          <Text>Daniela Correa</Text>
        </View>

        <View style={styles.opc}>
          <Text style={styles.text}>E-mail:</Text>
          <Text>daniela@exemplo.com.br</Text>
        </View>

        <View style={styles.opc}>
          <Text style={styles.text}>Senha:</Text>
          <Text>{senhaSegura}</Text>
        </View>

        <TouchableOpacity style={styles.sair}>
          <Text style={styles.textsair}> Sair da minha conta </Text>
          <Image source={require("../../img/logout_black_24dp 1.png")}/>
        </TouchableOpacity>
        <View style={styles.img2}>
          <Image source={require("../../img/mediotec-mobile.png")} style={{width:"43.5%", height:"34%",}}/>
        </View>
      </View>
      <Footer />
    </SafeAreaProvider>
  );
};

// Estilos corrigidos
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
  },
  profileContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 10, 
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 65, 
    height: 55,
    borderRadius: 25, 
    marginRight: 11, 
  },
  profileName: {
    fontSize: 19,
    fontWeight: "bold",
  },
  containerlin: {
    marginVertical: 10,
    paddingVertical: 0,
    width: "100%",
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#F28705", 
    marginVertical: 2,
    width: "100%",
  },
  opc: {
    padding: 25,
  },
   text:{
      fontWeight: "bold",
      marginBottom: 10,
      fontSize: 16,
   },
  sair: {
    flexDirection: "row",
    alignItems: "center",
  },
  textsair:{
    fontWeight: "bold",
    marginRight: "40%",
    padding: 20,
    fontSize: 16,

  },
  img2:{
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 13.7,
  },
});

export default Perfil;

const style = StyleSheet.create({});
