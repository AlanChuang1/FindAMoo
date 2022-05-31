import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as React from 'react';
import { StatusBar, Text, View, Pressable } from 'react-native';
import axios from 'axios';
import {saveCredentials, checkCrendentials, saveUserData} from '../Utils.js';
import styles from './css/GoogleLogin.style.js';
import MainCow from './images/cows/cowmain_front.svg';
import defaultStyles from './css/DefaultFonts.style';

const server = axios.create({
	baseURL: "https://frtl1ho6me.execute-api.us-west-1.amazonaws.com/production/",
	timeout: 1000
})

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin({ navigation }) {
	const [accessToken, setAccessToken] = React.useState();
	const [userData, setUserData] = React.useState(); 
	// For keeping state of login/logout button.
	const [LoggedIn, setLoggedIn] = React.useState(false);



	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId: '805957129584-bstgfdmvh6sh1ks4tbjrpi57th2afm4p.apps.googleusercontent.com',
		iosClientId: '805957129584-s2o0uo0j5kllnpov8c3gva6gp8bko73b.apps.googleusercontent.com',
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
			if (accessToken) {
				// Access database and check if user exists
				const googleUserData = await fetchUserInfo();
				const user = (await getMooUserData(googleUserData)).data; 
				// Save user credentials and user information.
				await saveCredentials(user.id);
				await saveUserData(JSON.stringify(user));

				return true;
			}
			return false;
		}
		fetchProfile()
			.then( (response) => {
				if (response)
					navigation.navigate('Introduction');
			})
			.catch( (error) => {
				console.log("Error failed to get profile: " + error);
			});
		
		//navigation.navigate('Introduction');
	}, [accessToken])


	// Attempt a GET request to backend server and check if the user exists.
	async function getMooUserData(googleUserData){
		// API calls to our own APIs 
		let responseUserData = await server.get("/users/get_user/" + googleUserData.sub);
		// console.log(responseUserData);
		// console.log(responseUserData);
        if (!responseUserData.data){
			// User does not exist, so create a user.
			console.log("Creating user");
			const newUser = {
				id: googleUserData.sub,
				name: googleUserData.displayName,
				email: googleUserData.email,
				collectedIDs: [""],
				favoriteID: [""],
				huntStreak: [""],
				level: 1
			}

			await server.post("/users/add_user", newUser)
				.then((response) => {
					responseUserData = response;
				}, (error) => {
					console.log("failed to add user " + error);
				}
			);
		} else {
			console.log("user exists");
		}
		return responseUserData;
	}

	// Fetches user information from their google account. 
	async function fetchUserInfo(){
		let googleResult = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
			method: 'GET',
			headers: {
			  Authorization: `Bearer ${accessToken}`,
			},
		});
		

		setUserData(googleResult.data);
		return googleResult.data;
	}

	/** NOTE: need to test on android and iOS once server is hosted, since we can only run on the web
	 *   
	 * 	Feature fix: not needed, but when clicking in there is a redirect notification that the user has to confirm
	 *  fix: proxy: false;
	 * 
	 *  Otherwise everything is functioning.
	 * 
			<Image source={require('./images/cows/cowmain_front.svg')}/>
	 * **/
	return (
		<View style={styles.container}>
			<View style={styles.imgContainer}>
				<MainCow style={styles.cowImage}/>
			</View>
			<Text style={[styles.titleText, defaultStyles.h1Text]}>FindAMoo</Text>
			<Pressable
				elevation={8}
				style={[styles.loginButton]}
				disabled={!request}
				title='Login'
				onPress={() => {
					// Check if there is an access token, if there isn't that means user is not logged in.
					if (!accessToken) {
						promptAsync({showInRecents: true});
						setLoggedIn(true);
					}
				}}
			>
				{ /* ideally, we will have a defaults style sheet for consistentecy on fonts (We were not able to make import fonts work) */ }
				<Text style={styles.loginText}>Login</Text>
			</Pressable>
			<StatusBar style="auto"/>
		</View>
	);
}



