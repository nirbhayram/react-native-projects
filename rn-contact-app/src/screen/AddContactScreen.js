import React, { useState,useEffect } from 'react'
import {
    View,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    Alert
} from 'react-native'
import * as Font from 'expo-font';

import {
    Text,
    Form,
    Item,
    Input,
    Label,
    Textarea,
    Button,
    Spinner
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

    const [loading, setLoading] = useState(true)

    const loadFont = async () => {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        })
        setLoading(false)
    }

    useEffect(() => {
        loadFont()
    }, [])

    const saveContact = async () => {
        if (
            state["fname"] !== "" &&
            state["lname"] !== "" &&
            state["phone"] !== "" &&
            state["email"] !== "" &&
            state["address"] !== ""
        ) {
            const contact = {
                fname: state["fname"],
                lname: state["lname"],
                phone: state["phone"],
                email: state["email"],
                address: state["address"]
            }
            await AsyncStorage.setItem(
                new Date().toString(),
                JSON.stringify(contact)
            ).then(
                navigation.goBack()
            ).catch(
                error => {
                    console.warn(error)
                }
            )

        } else {
            Alert.alert("All the fields are required!")
        }
    }

    if (loading) {
        return(
            <Spinner />
        )
    } else {
        return (
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <ScrollView style={styles.container}>
                    <Form>
                        <Item style={styles.inputItem}>
                            <Label>First name</Label>
                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="default"
                                onChangeText={fname => { setState({ ...state, fname }) }}
                            />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Label>Last name</Label>
                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="default"
                                onChangeText={lname => { setState({ ...state, lname }) }}
                            />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Label>Phone no</Label>
                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="number-pad"
                                onChangeText={phone => { setState({ ...state, phone }) }}
                            />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Label>email</Label>
                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="default"
                                onChangeText={email => { setState({ ...state, email }) }}
                            />
                        </Item>

                        <Textarea
                            style={styles.inputItem}
                            bordered
                            rowSpan={4}
                            placeholder="Address"
                            onChangeText={(address) => { setState({ ...state, address }) }} />

                    </Form>

                    <Button style={styles.button} onPress={() => { saveContact() }}
                        full
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </Button>

                </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 10,
        height: 500
    },
    inputItem: {
        margin: 10
    },
    button: {
        alignSelf: "center",
        backgroundColor: "#B83227",
        marginTop: 40
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    },
    empty: {
        height: 500,
        backgroundColor: "#FFF"
    }
});