import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  const [widthOfBox, setWidthOfBox] = useState(81.5);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#B49FCC',
    },
    rowView: {
      // flex: 1,
      height: "11%",
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    box: {
      backgroundColor: "#ffffff",
      width: widthOfBox,
      height: "100%"
    }
  });


  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.rowView, { backgroundColor: "#6D466B" }]} onLayout={
        (event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setWidthOfBox(height)
          console.log(height);
        }}
      >
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={[styles.rowView, { backgroundColor: "#412234" }]}>
      </View>
      <View style={[styles.rowView, { backgroundColor: "#ffffff" }]}>
      </View>
    </SafeAreaView>
  );
}
