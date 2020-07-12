import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';

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
      height: "11%",
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    box: {
      backgroundColor: "#ffffff",
      width: widthOfBox,
      height: widthOfBox,
      borderWidth: 2,
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 10
    }
  });

  const boxPressed = (number) => {
    console.log(number)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.rowView, { backgroundColor: "#6D466B" }]} onLayout={
        (event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setWidthOfBox(height - 10)
          console.log(height);
        }}
      >
        <TouchableOpacity onPress={() => boxPressed(0)}>
          <View style={styles.box}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}></View>
        </TouchableOpacity><TouchableOpacity>
          <View style={styles.box}></View>
        </TouchableOpacity>
      </View>
      <View style={[styles.rowView, { backgroundColor: "#412234" }]}>
      </View>
      <View style={[styles.rowView, { backgroundColor: "#6D466B" }]}>
      </View>
    </SafeAreaView>
  );
}
