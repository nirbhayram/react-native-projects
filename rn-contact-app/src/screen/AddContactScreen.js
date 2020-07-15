import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function AddContactScreen() {
    return (
        <View style={styles.container}>
            <Text>Add contact screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});