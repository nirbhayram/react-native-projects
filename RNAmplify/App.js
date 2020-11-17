import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import config, { auth_config } from './aws-exports'


import Amplify, { Auth } from 'aws-amplify';
Amplify.configure(config)
// Amplify.configure(auth_config);

// You can get the current config object
const currentConfig = Auth.configure();

export default function App() {

  async function signIn() {
    try {
      const user = await Auth.signIn('TestMachine', 'HelloWorl@123');
      console.log(user)
      console.log(`Authorization:Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`)
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  async function changePassword(){
    Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, 'Helloworld@123', 'HelloWorld@123');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        signIn();
      }}>
        <Text>signin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        changePassword();
      }}>
        <Text>password change</Text>
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
