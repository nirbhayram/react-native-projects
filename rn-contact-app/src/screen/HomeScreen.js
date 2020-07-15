import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { AntDesign } from '@expo/vector-icons'; 

export default function HomeScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.floatButton} 
            onPress={()=>{
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