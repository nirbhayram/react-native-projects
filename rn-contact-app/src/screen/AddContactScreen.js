import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    Alert
} from 'react-native'

import {
    Form,
    Item,
    Input,
    Label,
    Button
} from "native-base";

import AsyncStorage from '@react-native-community/async-storage';

export default function AddContactScreen({ route, navigation }) {

    const [state, setState] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        address: ""
    })

    const saveContact = async () => {
        if (
            state[fname] !== "" &&
            state[lname] !== "" &&
            state[phone] !== "" &&
            state[email] !== "" &&
            state[address] !== ""
        ) {
            const contact = {
                fname: state[fname],
                lname: state[lname],
                phone: state[phone],
                email: state[email],
                address: state[address]
            }
            await AsyncStorage.setItem(
                new Date().toString(),
                JSON.stringify(contact)
            ).then(
                navigation.goBack()
            ).catch(
                error=>{
                    console.warn(error)
                }
            )

        } else {
            Alert.alert("All the fields are required!")
        }
    }

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