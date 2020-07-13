import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FontAwesome } from "@expo/vector-icons"

export default function App() {

  const [itemArray, setItemArray] = useState(new Array(25).fill("empty"))
  const [randomNumber, setRandomNumber] = useState(-1)


  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>
          Scratch and win
        </Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} >
            <FontAwesome
              name="circle"
              color="black"
              size={40}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    backgroundColor: "#000",
    width: Dimensions.get('screen').width,
    padding: 10,
    margin: 10
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    height: 70,
    width: 70,
    borderColor: "#000",
    borderWidth:2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  }
});
