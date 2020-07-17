import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore } from "redux"
import { Provider } from "react-redux"
import EmployeeApp from './src/EmployeeApp';

let initialState = {
	1: {
		id: 1,
		name: "One",
		salary: 10000
	},
	2: {
		id: 2,
		name: "Two",
		salary: 20000
	},
	3: {
		id: 3,
		name: "Three",
		salary: 30000
	},
	4: {
		id: 4,
		name: "Four",
		salary: 40000
	},
	5: {
		id: 5,
		name: "Five",
		salary: 50000
	},
}

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case "GOOD":
			var id = action?.payload;
			var salary = state[id].salary;
			var increment = 1000
			var finalSalary = salary + increment;
			state[id]["salary"] = finalSalary;
			return Object.assign({}, state)
		case "BAD":
			var id = action?.payload;
			var salary = state[id].salary;
			var increment = 1000
			var finalSalary = salary - increment;
			state[id]["salary"] = finalSalary;
			return Object.assign({}, state)
		default:
			return state;
	}
}

let store = createStore(reducer)

export default function App() {
	return (
		<Provider store={store}>
			<EmployeeApp />
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
