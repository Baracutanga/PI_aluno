import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonComp from "./src/components/ButtonComp/ButtonComp";
import Comunicado from "./src/components/Comunicado/Comunicado";
import Tela2 from "./app/Tela2";

function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.acessoRapido}>
          <ButtonComp
            name="Comunicados"
            icon={require("./img/icons/forum.png")}
            navigate="Tela 2"
          />
          <ButtonComp
            name="Conceitos"
            icon={require("./img/icons/conceitos.png")}
          />
          <ButtonComp
            name="Disciplinas"
            icon={require("./img/icons/Disciplinas.png")}
          />
          <ButtonComp
            name="Contatos"
            icon={require("./img/icons/Disciplinas.png")}
          />
        </View>
        <View>
          <Comunicado />
          <Comunicado />
          <Comunicado />
          <Comunicado />
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
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
        component={Home}
        options={{ title: "Área do Aluno", headerTitleAlign: "center" }}
      />
      <Stack.Screen 
        name="Tela 2"
        component={Tela2}
        />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  acessoRapido: {
    display: "flex",
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
  },
});
