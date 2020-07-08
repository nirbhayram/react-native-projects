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
      <TouchableOpacity onPress={signUp}>
        <Text>signUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={SignIn}>
        <Text>SignIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut}>
        <Text>SignOut</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

async function SignIn() {
  try {
    const user = await Auth.signIn('username', 'password');
    console.log('User signed in ', user)
  } catch (error) {
    console.log('error signing in', error);
  }
}
async function signOut() {
  try {
    await Auth.signOut();
    console.log('User signed out')
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

async function signUp() {
  try {
    const user = await Auth.signUp({
      username: "username",
      password: "password",
      attributes: {
        email: "nirbhay@gmail.com",     
        'custom:balance' : "123123"
      }
    });
    console.log({ user });
  } catch (error) {
    console.log('error signing up:', error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;
