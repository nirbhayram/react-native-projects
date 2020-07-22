// Ref => https://medium.com/alturasoluciones/react-native-signin-and-signup-with-aws-cognito-2a285599b7c4

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import Amplify from '@aws-amplify/core';
// import { Auth } from '@aws-amplify/auth'
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws_config';

// import 'cross-fetch/polyfill';
import { AmazonCognitoIdentity } from 'amazon-cognito-identity-js';

Amplify.configure(awsconfig)
// Auth.configure(awsconfig)

// import { withAuthenticator } from 'aws-amplify-react-native'

App = () => {
	// useEffect(() => {
	//   Amplify.configure(awsconfig);
	// }, [])
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={signUp}>
				<Text>signUp</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={SignIn}>
				<Text>SignIn</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={getCurrentUser}>
				<Text>getCurrentUser</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={setCurrentUserAttributes}>
				<Text>setCurrentUserAttributes</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={signOut}>
				<Text>SignOut</Text>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</View>
	);
}

async function SignIn() {
	// try {
	// 	const user = await Auth.signIn('nirbhay', 'password');
	// 	console.log('User signed in ', user)
	// 	// console.log(user.getSession())

	// } catch (error) {
	// 	console.log('error signing in', error);
	// }
	// var authenticationData = {
	// 	Username: 'nirbhay',
	// 	Password: 'password',
	// };
	// var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
	// var poolData = {
	// 	UserPoolId: 'us-east-1_ubdMAahuQ',
	// 	ClientId: '7up079tb4jfce8foq0m07vlq5l'
	// };
	// var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	// var userData = {
	// 	Username: 'username',
	// 	Pool: userPool
	// };
	// var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	// cognitoUser.authenticateUser(authenticationDetails, {
	// 	onSuccess: function (result) {
	// 		console.log(result)
	// 		var accessToken = result.getAccessToken().getJwtToken();

	// 		/* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
	// 		var idToken = result.idToken.jwtToken;
	// 	},

	// 	onFailure: function (err) {
	// 		alert(err);
	// 	},

	// });
}
async function signOut() {
	try {
		await Auth.signOut();
		console.log('User signed out')
	} catch (error) {
		console.log('error signing out: ', error);
	}
}

async function signUp() {
	try {
		const user = await Auth.signUp({
			username: "username2@example.com",
			password: "HelloWorld@123",
			attributes: {
				email: "",
				// 'custom:balance': "123123"
			}
		});
		console.log({ user });
	} catch (error) {
		console.log('error signing up:', error);
	}
}

async function getCurrentUser() {
	Auth.currentSession()
		.then(data => console.log(data))
		.catch(err => console.log(err));

	let user = await Auth.currentAuthenticatedUser({
		bypassCache: true //true: that means direct get the attributes from the aws user pool
	});

	const { attributes } = user;
	console.log(attributes)
}

async function setCurrentUserAttributes() {
	let user = await Auth.currentAuthenticatedUser();

	let result = await Auth.updateUserAttributes(user, {
		"custom:balance": "123123",
		"email_verified": true,
	});
	console.log(result);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
});

// Amazon Cognito creates a session which includes the id, access, and refresh tokens of an authenticated user.


export default App;
