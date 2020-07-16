import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";

var initialState = {
	myCounter: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "INC_COUNTER":
			return { ...state, myCounter: state.myCounter + 1 }
		case "DEC_COUNTER":
			return { ...state, myCounter: state.myCounter - 1 }
	}
	return state;
}

const store = createStore(reducer)

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
