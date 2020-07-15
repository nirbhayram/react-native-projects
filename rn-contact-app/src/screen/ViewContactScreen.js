import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function ViewContactScreen() {
    return (
        <View style={styles.container}>
            <Text>View contact screen</Text>
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