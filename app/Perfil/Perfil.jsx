import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "../../src/components/Footer/Footer";
const Perfil = () => {  
  const usuario = {
    nome: "Rodrigo",
    senha: "12345",
    email: "rodrigo@email.com",
  };
  const senhaSegura = usuario.senha.split("").map(() => "*").join("");

  return (
    <SafeAreaProvider>
      <View>
        {/* Perfil = Nome e imag */}
        <View>
          <Image
            source={require("../../img/Profile-PNG-File.png")}style={{ width: 100, height: 100 }}
          />
          <Text>Daniela Correa</Text>
        </View>

        {/* linha = cor amarela */}
        <View style={styles.container}>
          <View style={styles.line} />
        </View>

        <View style={styles.NomeUser}>
          <Text>Nome completo:</Text>
          <Text>Daniela Correa</Text>
        </View>

        <View style={styles.Email}>
          <Text>E-mail:</Text>
          <Text>daniela@exemplo.com.br</Text>
        </View>

        <View>
          <Text>Senha:</Text>
          <Text>{senhaSegura}</Text>
        </View>
      </View>
      
      <Footer />

    </SafeAreaProvider>
  );
}
const style = StyleSheet.create({



});

export default Perfil;

const styles = StyleSheet.create({});
