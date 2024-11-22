import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Tela2 = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Image source={require('../img/mediotec-mobile.png')} style={{ width: 300, height: 120 }} />
    </View>
  )
}

export default Tela2

const styles = StyleSheet.create({})