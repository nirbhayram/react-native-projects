import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.rowView, { backgroundColor: "#6D466B" }]} onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout; console.log(height);
      }}>
        <View style={{backgroundColor:"#ffffff", width:81.5, height:"100%"}}></View>
        <View style={{backgroundColor:"#412234", width:81.5, height:"100%"}}></View>
        <View style={{backgroundColor:"#ffffff", width:81.5, height:"100%"}}></View>
      </View>
      <View style={[styles.rowView, { backgroundColor: "#412234" }]}>
      </View>
      <View style={[styles.rowView, { backgroundColor: "#ffffff" }]}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B49FCC',
  },
  rowView: {
    // flex: 1,
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
