import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Comunicado = () => {
  return (
    <View style={styles.comunicadoContainer}>
      <Text style={styles.tituloComunicado}>Title</Text>
      <Text style={styles.conteudoComunicado}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa
        officia praesentium beatae, autem recusandae eligendi. Possimus, quas
        repudiandae. Repellendus
      </Text>
      <TouchableOpacity style={styles.enterComunicado}>
        <Text style={styles.TextButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Comunicado;

const styles = StyleSheet.create({
  comunicadoContainer: {
    width: 300,
    marginTop: 10,
    backgroundColor: "#fff",
    paddingBottom: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  tituloComunicado: {
    backgroundColor: "#342EAD",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 21,
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  conteudoComunicado: {
    padding: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  enterComunicado: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#342EAD",
    width: 80,
    height: 30,
    borderRadius: 5,
    position: "relative",
    left: 210
  },
  TextButton: {
    textAlign: "center",
    color: "#fff"
  }
});
