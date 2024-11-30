import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Perfil from "../Perfil/Perfil";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Comunicados from "../Comunicados/Comunicados";
import ButtonComp from "../../src/components/ButtonComp/ButtonComp";
import Footer from "../../src/components/Footer/Footer";
import Comunicado from "../../src/components/Comunicado/Comunicado";
import Contatos from "../Contatos/Contatos";

function HomeScreen() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.acessoRapido}>
          <ButtonComp
            name="Comunicados"
            icon={require("../../img/icons/forum.png")}
            navigate="Comunicados"
          />
          <ButtonComp
            name="Conceitos"
            icon={require("../../img/icons/conceitos.png")}
          />
          <ButtonComp
            name="Disciplinas"
            icon={require("../../img/icons/Disciplinas.png")}
          />
          <ButtonComp
            name="Contatos"
            icon={require("../../img/icons/Disciplinas.png")}
            navigate="Contatos"
          />
        </View>
        <Comunicado />
      </View>
      <Footer />
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

export default function HomeScreenRoot() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#342EAD" },
        headerTitleStyle: { color: "#ffffff", fontWeight: "300" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Área do Aluno", headerTitleAlign: "center" }}
      />
      <Stack.Screen name="Comunicados" component={Comunicados} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Contatos" component={Contatos} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  acessoRapido: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
    marginBottom: 10,
  },
});
