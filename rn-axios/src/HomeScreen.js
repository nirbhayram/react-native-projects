import React, { useState, useEffect } from 'react'
import { View, Alert, Dimensions, Image } from 'react-native'
import Axios from "axios";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Spinner, Card, CardItem, Body, Text } from 'native-base';

export default function HomeScreen() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDetails()
    }, [])

    const flatListItemRender = ({ item }) => (
        <Card style={{ width: Dimensions.get("screen").width -10 }}>
            <CardItem>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flex: 3 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={{ uri: item.picture.medium }} style={{ height: 150, width: null, flex: 1 }} />
                        </View>
                    </View>
                    <View style={{ flex: 5, flexDirection: "column" }}>
                        <Text>
                            {item.name.title} {item.name.first} {item.name.last}
                        </Text>
                    </View>
                </View>
            </CardItem>
        </Card>
    )

    const fetchDetails = async () => {
        Axios.get("https://randomuser.me/api/?results=200").then(
            repsonse => {
                if (repsonse.data?.results) {
                    console.log(repsonse.data?.results)
                    setData(repsonse.data?.results)
                    setLoading(false)
                } else {
                    console.log("something went wrong")
                    console.log(repsonse.data)
                    setLoading(false)
                    Alert.alert("something went wrong!")
                }
            }
        ).catch(
            error => {
                console.log(error)
                setLoading(false)
                Alert.alert("something went wrong!")
            }
        )

    };

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Spinner />
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={data}
                    renderItem={flatListItemRender}
                    keyExtractor={(item,index) => index.toString() }
                />
            </View>
        )
    }

}
