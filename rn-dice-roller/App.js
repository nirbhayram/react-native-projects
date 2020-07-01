import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [imagevariable1, setImagevariable1] = useState(require("./src/images/dice1.png"));
  const [imagevariable2, setImagevariable2] = useState(require("./src/images/dice1.png"));

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6 + 1)
  }

  const rollTheDice = () => {
    switch (getRandomNumber()) {
      case 1:
        return require("./src/images/dice1.png");
      case 2:
        return require("./src/images/dice2.png");
      case 3:
        return require("./src/images/dice3.png");
      case 4:
        return require("./src/images/dice4.png");
      case 5:
        return require("./src/images/dice5.png");
      case 6:
        return require("./src/images/dice6.png");
      default:
        break;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {setImagevariable1(rollTheDice);setImagevariable2(rollTheDice)}}>
        <Image source={imagevariable1}></Image>
        <Image source={imagevariable2}></Image>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
