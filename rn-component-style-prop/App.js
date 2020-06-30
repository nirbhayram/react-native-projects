import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import NameText from './src/components/NameText'

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "stretch",
      flexDirection: "row"
    },
  })

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#E74292" }}>
        <Image source={require('./src/images/email.png')} />
        <NameText personName="Ram" />
        <NameText personName="Nirbhay" />
        <Image style={{ height: 200, width: 100 }} source={{ uri: 'https://images.pexels.com/photos/2505693/pexels-photo-2505693.jpeg?cs=srgb&dl=blue-and-red-plants-2505693.jpg&fm=jpg' }} />
      </View>
      <View style={{ flex: 1, flexDirection: "column-reverse", backgroundColor: "#ffffff" }}>
        <View style={{ backgroundColor: "#74B9FF", flex:1}}></View>
        <View style={{ backgroundColor: "#0A79DF", flex:2 }}></View>
        <View style={{ backgroundColor: "#4834DF", flex:3 }}></View>
      </View>
    </View>
  )
}

