import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, Linking, Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { AntDesign } from '@expo/vector-icons';
import {  Card, CardItem, Text, Body } from "native-base";

export default function HomeScreen({ route, navigation }) {

    const [data, setData] = useState([])

    useEffect(() => {
        navigation.addListener("focus", () => {
            getAllKeys()
        })
    }, [navigation])

    const getAllKeys = async () => {
        await AsyncStorage.getAllKeys(
        ).then(
            keys => {
                getAllValues(keys)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }

    const getAllValues = async keys => {
        await AsyncStorage.multiGet(
            keys
        ).then(
            data => {
                console.log(data)
                setData(data)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }

    const deleteContact = async (key) => {
        await AsyncStorage.removeItem(key)
            .then(()=>{
                getAllKeys()
            })
            .catch(error=>{
                console.log(error)
            })
    }

    const callContact = phone =>{
        let phoneNumber = phone;
        if (Platform.OS !== "android") {
            phoneNumber = `telpromt:${phone}`
        }else{
            phoneNumber = `tel:${phone}`
        }
        Linking.canOpenURL(phoneNumber)
            .then(()=>{
                Linking.openURL(phoneNumber)
            })
            .catch(error=>{
                console.log(error)
            })
    }


    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        let contact = JSON.parse(item[1])
                        return (
                            <Card>
                                <CardItem header bordered>
                                    <Text>{contact.fname} {contact.lname}</Text>
                                </CardItem>
                                <CardItem bordered button onPress={()=>{
                                    callContact(contact.phone)
                                }}>
                                    <Body>
                                        <Text>Phone : {contact.phone}</Text>
                                        <Text>Email : {contact.email}</Text>
                                        <Text>Address : {contact.address}</Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered button onPress={() => {
                                    deleteContact(item[0].toString())
                                }}>
                                    <Text style={{ color: "red" }}>Delete</Text>
                                </CardItem>
                            </Card>
                        )
                    }}
                    keyExtractor={item => item[0].toString()}
                />
            </View>
            <TouchableOpacity
                style={styles.floatButton}
                onPress={() => {
                    navigation.navigate("Add")
                }}>
                <AntDesign
                    name="plus"
                    size={30}
                    color="white" />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    listItem: {
        flexDirection: "row",
        padding: 20
    },
    iconContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B83227",
        borderRadius: 100
    },
    contactIcon: {
        fontSize: 28,
        color: "#fff"
    },
    infoContainer: {
        flexDirection: "column"
    },
    infoText: {
        fontSize: 16,
        fontWeight: "400",
        paddingLeft: 10,
        paddingTop: 2
    },
    floatButton: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        position: "absolute",
        bottom: 40,
        right: 10,
        height: 60,
        backgroundColor: "#B83227",
        borderRadius: 100
    }
});