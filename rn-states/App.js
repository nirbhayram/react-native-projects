import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function App() {
  const [text, setText] = useState("");

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      flex: 1,
      paddingTop: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    textInput: {
      fontSize: 20,
      color: "#ffffff",
      paddingHorizontal:20,
      paddingVertical:10,
      borderColor:"#ffffff",
      backgroundColor: "#7EC4CF",
      borderRadius: 10
    },
    textStyle:{
      marginTop:30,
      fontSize:20
    }
  })

  const textChanged=(text)=>{
    setText(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#ffffff"
        placeholder="Please enter text here"
        style={styles.textInput}
        onChangeText={(text)=>textChanged(text)}
      />
      <Text style={styles.textStyle}>{text.split(' ').map(text => text && '😍').join('')}</Text>
    </View>
  )
}
