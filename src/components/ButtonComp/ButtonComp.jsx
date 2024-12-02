import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const ButtonComp = ({ name, icon, navigate }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerButton}
      onPress={() => navigation.navigate(navigate)}
    >
      <Image source={icon} style={styles.buttonImage}></Image>
      <Text style={styles.textButton}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  containerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#342EAD",
    padding: 5,
    borderRadius: 10,
    width: 85,
    height: 80,
  },
  buttonImage: {
    width: 23,
    height: 23,
  },
  textButton: {
    color: "#fff",
    fontSize: 10,
  },
});
