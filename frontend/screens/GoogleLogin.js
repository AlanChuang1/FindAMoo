import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as React from 'react';
import { StyleSheet, Text, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin() {
	const [accessToken, setAccessToken] = React.useState();
	const [userData, setUserData] = React.useState(); 

	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId: '805957129584-bstgfdmvh6sh1ks4tbjrpi57th2afm4p.apps.googleusercontent.com',
		iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
		androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
		webClientId:  '805957129584-bstgfdmvh6sh1ks4tbjrpi57th2afm4p.apps.googleusercontent.com',
	});

	React.useEffect(() => {
		if (response?.type === 'success') {
			setAccessToken(response.authentication.accessToken);
		}
	}, [response])

	async function getUserData(){
		let response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
			method: 'GET',
			headers: {
			  Authorization: `Bearer ${accesstoken}`,
			},
		});

		response.json.then((data) => {
			setUserData(data); 
		})
		return response.data;
	}

	function showUserData() {
		if (userData) {
		  return (
			<View>
			  <Text>Welcome {userData.name}</Text>
			  <Text>{userData.email}</Text>
			</View>
		  );
		}
	  }
	return (
		<Button
		disabled={!request}
		title="Login"
		onPress={accessToken ? getUserData() : () => {promptAsync()}}
		/>
	);
}