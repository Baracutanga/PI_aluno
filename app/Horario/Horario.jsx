import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import Footer from "../../src/components/Footer/Footer";

const Horario = () => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          <View style={styles.cabecaContainer}>
            <Image
              source={require("../../img/Calendar.png")}
              style={styles.calendarImage}
            />
            <Text style={styles.texto}>Horário Semanal</Text>
          </View>

          <View style={styles.imagHorario}>
            <Image
              source={require("../../img/Group 1988.png")}
              style={styles.grupImage}
            />
          </View>
        </View>
      </View>
      <Footer/>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 16,
  },
  cabecaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 75,
    borderBottomColor: "#d1d1d1",
    paddingBottom: 15,
    borderBottomWidth: 1,
  },
  calendarImage: {
    width: 30,
    height: 30,
    marginRight: 18,
  },
  imagHorario: {
    alignItems: "center",
    width: "100%",
  },
  grupImage: {
    width: "95%",
    height: "85%",
    objectFit: "cover",
    marginTop: "15",
  },
  texto: {
    fontFamily: "'Albert Sans', sans-serif",
    fontSize: "24",
    fontWeight: "bold",
    padding: "8",
  },
});

export default Horario;

const style = StyleSheet.create({});
