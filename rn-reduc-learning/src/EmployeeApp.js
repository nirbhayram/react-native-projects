import React from 'react';
import { Dimensions, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Card, CardItem, Text, Body } from "native-base";
import { connect } from 'react-redux';

function EmployeeApp({ data, good, bad }) {

    const DATA = data

    const itemRender = ({ item }) => (
        <Card style={{ width: Dimensions.get('window').width }}>
            <CardItem header bordered button onPress={()=>{good(item.id)}}>
                <Text>GOOD</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>
                        {`ID : ${item.id}`}
                    </Text>
                    <Text>
                        {`NAME : ${item.name}`}
                    </Text>
                    <Text>
                        {`SALARY ${item.salary}`}
                    </Text>
                </Body>
            </CardItem>
            <CardItem footer bordered button onPress={()=>{bad(item.id)}}>
                <Text>BAD</Text>
            </CardItem>
        </Card>
    )

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={itemRender}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
}

function mapStateToProps(state) {
    var data = []
    console.log(state)
    Object.keys(state).map(element => {
        console.log(`element ${element}`)
        data.push(state[element])
    })
    console.log(data)
    return {
        data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        good: id => {
            dispatch({ type: "GOOD", payload: id })
        },
        bad: id => {
            dispatch({ type: "BAD", payload: id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeApp)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
});
