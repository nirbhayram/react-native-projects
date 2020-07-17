import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from './src/HomeScreen';

var initialState = {
	myCounter: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "INC_COUNTER":
			if (state.myCounter < 10) {
				return { ...state, myCounter: state.myCounter + 1 }
			} else {
				return state
			}
		case "DEC_COUNTER":
			if (state.myCounter > 0) {
				return { ...state, myCounter: state.myCounter - 1 }
			} else {
				return state
			}
		default:
			return state;
	}
}

let store = createStore(reducer);

export default function App() {
	return (
		<Provider store={store}>
			<HomeScreen />
		</Provider>
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
