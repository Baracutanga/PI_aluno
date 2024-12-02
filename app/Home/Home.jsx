import { StyleSheet, View, BackHandler, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Perfil from "../Perfil/Perfil";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Comunicados from "../Comunicados/Comunicados";
import ButtonComp from "../../src/components/ButtonComp/ButtonComp";
import Footer from "../../src/components/Footer/Footer";
import Comunicado from "../../src/components/Comunicado/Comunicado";
import Contatos from "../Contatos/Contatos";
import Conceitos from "../Conceitos/Conceitos";
import { useIsFocused } from "@react-navigation/native";

function HomeScreen() {
  const isFocused = useIsFocused(); 

  useEffect(() => {
    const onBackPress = () => {
      if (isFocused) {
        
        BackHandler.exitApp();
        return true; 
      }
      return false; 
    };

    
    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    };
  }, [isFocused]);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.acessoRapido}>
          <ButtonComp
            name="Conceitos"
            icon={require("../../img/icons/conceitos.png")}
            navigate="Conceitos"
          />
          <ButtonComp
            name="Horários"
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

export default function HomeScreenRoot() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreenRoot"
      screenOptions={{
        headerStyle: { backgroundColor: "#342EAD", },
        headerTitleStyle: { color: "#ffffff", fontWeight: "300", },
      }}
    >
      <Stack.Screen
        name="HomeScreenRoot"
        component={HomeScreen}
        options={{
          title: "Área do Aluno",
          headerTitleAlign: "center",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen name="Comunicados" component={Comunicados} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Contatos" component={Contatos} />
      <Stack.Screen name="Conceitos" component={Conceitos} />
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
