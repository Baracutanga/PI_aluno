import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tela2 from "../Comunicados/Tela2";
import Perfil from "../Perfil/Perfil";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Comunicado from "../../src/components/Comunicado/Comunicado";
import ButtonComp from "../../src/components/ButtonComp/ButtonComp";
import Footer from "../../src/components/Footer/Footer";


function HomeScreen() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.acessoRapido}>
          <ButtonComp
            name="Comunicados"
            icon={require("../../img/icons/forum.png")}
            navigate="Tela 2"
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
          />
        </View>
        <Comunicado />
      </View>
      <Footer />
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

export default function RootStack() {
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
      <Stack.Screen name="Tela 2" component={Tela2} />
      <Stack.Screen name="Perfil" component={Perfil} /> 
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
    marginBottom: 10
  },
});