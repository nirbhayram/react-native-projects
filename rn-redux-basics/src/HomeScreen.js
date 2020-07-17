import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux'

function HomeScreen({ counter, increaseCounter, decreaseCounter }) {
    return (
        <View style={styles.container}>
            <Button bordered onPress={increaseCounter}>
                <Text>Increment</Text>
            </Button>
            <Text>{counter}</Text>
            <Button bordered danger onPress={decreaseCounter}>
                <Text>Decrement</Text>
            </Button>
            <StatusBar style="auto" />
        </View>
    );
}

function mapStateToProps(state){
    return {
        counter: state?.myCounter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter: ()=>{
            dispatch({type: "INC_COUNTER"})
        },
        decreaseCounter: ()=>{
            dispatch({type:"DEC_COUNTER"})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
