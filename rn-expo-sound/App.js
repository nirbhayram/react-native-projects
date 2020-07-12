import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Audio } from 'expo-av';

export default function App() {

  const playSound = async (number) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assets/four.wav'));
      await soundObject.playAsync().then(async (playBackStatus) => {
        setTimeout(() => {

        }, playBackStatus.playableDurationMillis());
        soundObject.unloadAsync()
      });
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { playSound() }} >
        <Text>audio</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
});
