
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [imagevariable, setImagevariable] = useState("1");

  const rollTheDice = () => {
    //setImagevariable(Math.floor(Math.random() * 5 + 1).toString)
  }

  return (

    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=>rollTheDice()}>
        <Image source={require("./src/images/dice1.png")}></Image>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
