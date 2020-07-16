import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux'

function HomeScreen({ mycounter, incCounter, decCounter }) {
    return (
        <View style={styles.container}>
            <Button bordered onPress={incCounter}>
                <Text>Increment</Text>
            </Button>
            <Text>{mycounter}</Text>
            <Button bordered danger onPress={decCounter}>
                <Text>Decrement</Text>
            </Button>
            <StatusBar style="auto" />
        </View>
    );
}

function mapStateToProps(state) {
    return {
        mycounter: state.myCounter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incCounter: () => {
            dispatch({ type: "INC_COUNTER" })
        },
        decCounter: () => {
            dispatch({ type: "DEC_COUNTER" })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
