import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws_config';
Amplify.configure(awsconfig);
// import { withAuthenticator } from 'aws-amplify-react-native'

App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={SignIn}>
        <Text>Open up App.js to start working on your app!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

async function SignIn() {
  try {
    const user = await Auth.signIn('nirbhay', 'nirbhay');
    console.log('User signed in ',user)
  } catch (error) {
    console.log('error signing in', error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
