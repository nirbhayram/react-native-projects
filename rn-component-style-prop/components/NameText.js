import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function NameText({personName=`Nirbhay`}) {
    const styles = StyleSheet.create({
        textSyle: {
            alignSelf: "center",
            color: "#ffffff",
            backgroundColor: "#474b52",
            fontSize: 30,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            overflow: "hidden",
            marginTop: 5,
            width: `100%`,
            textAlignVertical:"center",
            textAlign: "center"
        },
    })
    return (
        <Text style={styles.textSyle}>{personName}</Text>
    )
}
