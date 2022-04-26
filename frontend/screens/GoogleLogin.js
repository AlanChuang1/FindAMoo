import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as React from 'react';
import { StatusBar, Image, Text, View, Button } from 'react-native';
import axios from 'axios';
import {saveCredentials, checkCrendentials, saveUserData, getUserData, logout} from '../Utils.js';

const server = axios.create({
	baseURL: "http://localhost:5000",
	timeout: 1000
})

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin() {
	const [accessToken, setAccessToken] = React.useState();
	const [userData, setUserData] = React.useState(); 
	// For keeping state of login/logout button.
	const [LoggedIn, setLoggedIn] = React.useState(false);



	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId: '805957129584-bstgfdmvh6sh1ks4tbjrpi57th2afm4p.apps.googleusercontent.com',
		iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
		androidClientId: '805957129584-6p7smpdhcvpb5ddqo3l290093k8d84cs.apps.googleusercontent.com',
		webClientId:  '805957129584-1gsvpellt6ojk12oupl1o5jol5om4b9n.apps.googleusercontent.com',

	});

	// On response success, update access token.
	React.useEffect(() => {
		if (response?.type === 'success') {
			setAccessToken(response.authentication.accessToken);
		}
	}, [response])


	// Checks if there is an accesstoken, if there is then attempt to fetch
	// user's google data. After this, check if the user exists by trying to
	// getMooUserData(), and then save their user data on async storage.
	React.useEffect(() => {
		const fetchProfile = async () => {
			console.log("fetching user");
			if (accessToken) {
				const googleUserData = await fetchUserInfo();
				const user = (await getMooUserData(googleUserData)).data; 
				
				console.log(user);
				// Save user credentials and user information.
				// await saveCredentials(user.id);
				// await saveUserData(JSON.stringify(user));


				// let details = await checkCrendentials();
				// let userData = await getUserData();
				// console.log("Get credentials: "+ details);
				// console.log("Get user information: ")
				// console.log(JSON.parse(userData));
				
			}
		}
		fetchProfile();
	}, [accessToken])


	// Attempt a GET request to backend server and check if the user exists.
	async function getMooUserData(googleUserData){
		// API calls to our own APIs 
		let user = await server.get("/users/get_user/" + googleUserData.sub);

        if (user === null){
			// User does not exist, so create a user.
			console.log("Creating user");
			const newUser = {
				id: googleUserData.sub,
				name: googleUserData.displayName,
				email: googleUserData.email,
				collectedIDs: [""],
				favoriteID: [""],
				huntStreak: [""]
			}

			await server.post("/users/add_user", newUser)
				.then((response) => {
					user = response;
				}, (error) => {
					console.log(error);
				}
			);
		}
		return user;
	}

	// Fetches user information from their google account. 
	async function fetchUserInfo(){
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

	// Used for displaying user information once they logged in.
	function showAllUserData() {
		if (userData) {
			return (
				<View>
					<Image source={{uri: userData.picture}} />
					<Text>Welcome {userData.name}</Text>
					<Text>{userData.email}</Text>
				</View>
			);
		} 
	}

	// Page that will allow the user to login.
	return (
		<View>
			{showAllUserData()}
			<Button
				disabled={!request}
				title={accessToken ? "Logout" : "Login"}
				onPress={() => {
						// Check if there is an access token, if there isn't that means user is not logged in.
						if (!accessToken) {
							promptAsync({useProxy: false});
							setLoggedIn(true);
						}
				
				}}
			/>
			<StatusBar style="auto"/>
		</View>
	);
}