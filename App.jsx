// import 'react-native-reanimated';
// import 'react-native-gesture-handler';
import {
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenRoot from "./app/Home/Home";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Login() {

  const [loginData, setLoginData] = useState();
  const [senhaData, setSenhaData] = useState();

  const navigation = useNavigation();

  return (
    <SafeAreaProvider style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView>
          <SafeAreaView style={styles.safeArea}>
            <Image
              source={require("./img/mediotec-mobile.png")}
              style={styles.mediotecLogo}
            />
            <Image
              source={require("./img/Profile-PNG-File.png")}
              style={styles.userImg}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Login"
              value={loginData}
              onChangeText={setLoginData}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Senha"
              secureTextEntry={true}
              value={senhaData}
              onChangeText={setSenhaData}
            />
            <TouchableOpacity
              style={styles.buttonEnter}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "#342EAD" },
        headerTitleStyle: { color: "#ffffff", fontWeight: "300" },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreenRoot} 
        options={{ 
          headerShown: false,
          headerLeft: null,
          gestureEnabled: false,
        }}
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
  },
  safeArea: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
  },
  inputText: {
    width: "80%",
    backgroundColor: "#D4D1D1",
    padding: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  mediotecLogo: {
    width: "60%",
    height: "28%",
    margin: 0,
  },
  buttonEnter: {
    backgroundColor: "#F28705",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 19,
  },
});
