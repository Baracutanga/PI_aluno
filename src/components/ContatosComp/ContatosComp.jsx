import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContatosComp = ({ titulo, numero }) => {
  return (
    <View style={styles.containerContato}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{titulo}</Text>
        <Text style={{ fontWeight: 'light', fontSize: 14 }}>{numero}</Text>
    </View>
  )
}

export default ContatosComp

const styles = StyleSheet.create({
    containerContato: {
        width: "100%",
        padding: 25,
        borderLeftWidth: 3,
        borderLeftColor: "#342EAD",
        marginVertical: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: "#eaeaea"
    }
})