import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import ContatosComp from "../../src/components/ContatosComp/ContatosComp";
import Footer from "../../src/components/Footer/Footer";
import { SafeAreaView } from "react-native-safe-area-context";

const Contatos = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerContatos}>
        <ContatosComp titulo="Coordenação" numero="(81) 9 xxxx-xxxx" />
        <ContatosComp titulo="Financeiro" numero="(81) 9 xxxx-xxxx" />
        <ContatosComp
          titulo="Central de Atendimento"
          numero="(81) 9 xxxx-xxxx"
        />
      </View>
      <Footer />
    </View>
  );
};

export default Contatos;

const styles = StyleSheet.create({
  containerContatos: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 5,
  },
});
