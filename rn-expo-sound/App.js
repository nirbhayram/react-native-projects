import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Audio } from 'expo-av';

export default function App() {

  const sound = {
    one: require('./assets/one.wav'),
    two: require('./assets/two.wav'),
    three: require('./assets/three.wav'),
    four: require('./assets/four.wav'),
    five: require('./assets/five.wav'),
    six: require('./assets/six.wav'),
    seven: require('./assets/seven.wav'),
    eight: require('./assets/eight.wav'),
    nine: require('./assets/nine.wav'),
    ten: require('./assets/ten.wav'),
  }

  const playSound = async (number) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(sound[number]);
      await soundObject.playAsync().then(async (playBackStatus) => {
        setTimeout(() => {
          soundObject.unloadAsync()
        }, playBackStatus.playableDurationMillis());
      });
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => { playSound("one") }} >
          <View style={styles.view}>
            <Text style={styles.text}>one</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound("two") }} >
          <View style={styles.view}>
            <Text style={styles.text}>two</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound("three") }} >
          <View style={styles.view}>
            <Text style={styles.text}>three</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound("four") }} >
          <View style={styles.view}>
            <Text style={styles.text}>four</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound("five") }} >
          <View style={styles.view}>
            <Text style={styles.text}>five</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound("six") }} >
          <View style={styles.view}>
            <Text style={styles.text}>six</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound("seven") }} >
          <View style={styles.view}>
            <Text style={styles.text}>seven</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound("eight") }} >
          <View style={styles.view}>
            <Text style={styles.text}>eight</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound("nine") }} >
          <View style={styles.view}>
            <Text style={styles.text}>nine</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound("ten") }} >
          <View style={styles.view}>
            <Text style={styles.text}>ten</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
  },
  view: {
    margin: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 30,
    padding: 10,
    color: "#fff"
  }
});
