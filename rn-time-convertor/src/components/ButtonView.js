import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ButtonView({ text="button", onPress}) {
    const styles = StyleSheet.create({
        textView: {
            borderWidth: 2,
            paddingHorizontal: 20,
            paddingVertical: 5,
            backgroundColor: "#8FF7A7",
            borderColor: "#ffffff",
            borderRadius: 10
        },
        text: {
            fontSize: 15
        }
    })
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.textView}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
