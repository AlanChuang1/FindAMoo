import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as React from 'react';
import { StatusBar, StyleSheet, Image, Text, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();

// Still need to save to async storage 

export default function GoogleLogin() {
	const [accessToken, setAccessToken] = React.useState();
	const [userData, setUserData] = React.useState(); 

	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId: '805957129584-bstgfdmvh6sh1ks4tbjrpi57th2afm4p.apps.googleusercontent.com',
		iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
		androidClientId: '805957129584-6p7smpdhcvpb5ddqo3l290093k8d84cs.apps.googleusercontent.com',
		webClientId:  '805957129584-bstgfdmvh6sh1ks4tbjrpi57th2afm4p.apps.googleusercontent.com',
	});

	React.useEffect(() => {
		if (response?.type === 'success') {
			setAccessToken(response.authentication.accessToken);
		}
	}, [response])

	React.useEffect(() => {
		if (accessToken) {
			getGoogleUserData();
			getMooUserData(); 
		}
	}, [accessToken])

	async function getMooUserData(){
		// API calls to our own APIs 
	}
	async function getGoogleUserData(){
		let googleResult = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
			method: 'GET',
			headers: {
			  Authorization: `Bearer ${accessToken}`,
			},
		});
		
		console.log("GUD"); 
		setUserData(googleResult.data);
		return googleResult.data;
	}

	function showUserData() {
		console.log("SUD"); 
		if (userData) {
			console.log("USER DATA FOUND")
			return (
				<View>
					<Image source={{uri: userData.picture}} />
					<Text>Welcome {userData.name}</Text>
					<Text>{userData.email}</Text>
				</View>
			);
		} else {
			console.log("NO USER DATA"); 
		}
	}
	return (
		<View>
			{showAllUserData()}
			<Button
				disabled={!request}
				title="Login"
				onPress={
					accessToken ? 
					getUserData : 
					() => { 
						promptAsync({useProxy: false, showInRecents: true}) 
					}
				}
			/>
			<StatusBar style="auto"/>
		</View>
	);
}