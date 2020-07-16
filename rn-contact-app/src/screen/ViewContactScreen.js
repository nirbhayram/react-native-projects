import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Spinner } from "native-base";

export default function ViewContactScreen({ route, navigation }) {

  const [loading, setLoading] = useState(true)
  const [contact, setContact] = useState({})

  useEffect(() => {
    navigation.addListener("focus", () => {
      getItemFromLocalStorage(route.params?.key)
    })
  }, [navigation])

  const getItemFromLocalStorage = async key => {
    await AsyncStorage.getItem(key)
      .then((data => {
        setContact(JSON.parse(data))
        setLoading(false)
        console.log(data)
      }))
      .catch(error => {
        console.log(error)
      })
  }


  if (loading) {
    return (
      <Spinner />
    )
  } else {
    return (
      <Card>
        <CardItem header >
          <Text>{contact.fname} {contact.lname}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Phone : {contact.phone}</Text>
            <Text>Email : {contact.email}</Text>
            <Text>Address : {contact.address}</Text>
          </Body>
        </CardItem>
        <CardItem footer button danger >
          <Text>Delete</Text>
        </CardItem>
      </Card>
    )
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