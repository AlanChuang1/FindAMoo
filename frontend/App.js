import { StyleSheet, Text, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import Google from "./GoogleLogin.js"

const Separator = () => (
	<View style={styles.separator} />
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 16,
	},
	title: {
		textAlign: 'center',
		marginVertical: 8,
	},
	fixToText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	separator: {
		marginVertical: 8,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});

let GetUserId = null; 

const iAxios = axios.create({
	baseURL: "http://localhost:5000",
	timeout: 1000
})

const getCall = () => {
	console.log("Trying GET...");
	if (GetUserId != null) {
		axios.get('http://localhost:5000/users/get_user/' + GetUserId).then(
		(response) => {
			console.log(response.status, response.statusText, response.data); 
		}
		).catch(
			(response) => {
				console.log("Request failed."); 
			}
		)
	} else {
		console.log("Please enter an ID first."); 
	}
}

// Opens a window to backend (localhost:5000) to call google auth api and to login
// TODO: after logining in, get certificate and store in asyncstorage to show they are logged in
// ---- also where the issue is
const loginAuth = async () => {
	console.log("Trying GoogleAuth...");
	window.open('http://localhost:5000/auth/google', '__self');
}

const getStatus = () => {
  	axios.get('http://localhost:5000/auth/success').then(
    	(response) => {
      		console.log(response.status, response.statusText, response.data, response.json); 
    	}
  	).catch(
		(response) => {
      		console.log("Request failed."); 
    	}
  )
  //localStorage.setItem('name', 'john');
}


// Not being used currently 
const fetchAuthUser = async () => {
    const response = await axios
        .get("http://localhost:5000/auth/user")
        .catch((err) => {
            console.log("Not properlly authenticated");
        });

    if (response && response.data){
        console.log("User : ", response.data);
    }
    console.log("done");
}
  

// Testing if saved currently to storage
const saveCredentials = async (credentials) => {
	console.log("Testing save credentials...");
	try { 
		await AsyncStorage.setItem("credentials" , credentials);
	} catch (err) {
		console.log("Failed to save data to local storage");
	}
}
const checkCrendentials = async () => {
	let cert = AsyncStorage.getItem("credentials" , credentials);
	console.log(cert);
}


export default function App() {
	Google();
  	// return (
	// 	<NavigationContainer>
	// 		<SafeAreaView style={styles.container}>
	// 		<View>
	// 			<Button title="LOGIN" onPress={() => loginAuth() } />
	// 			<Separator/>
	// 			<Button title="GET" onPress={() => { getCall() }}/>
	// 			<TextInput
	// 				style={{
	// 					height: 40, 
	// 					borderColor: 'gray', 
	// 					borderWidth: 1
	// 				}}
	// 				placeholder="ID here"
	// 				onFocus={() => {
	// 					GetUserId = null; 
	// 				}}
	// 				onChangeText = {(newText) => {
	// 					GetUserId = newText; 
	// 				}}
	// 			/>
	// 			<Button title="Add to async" onPress={() => { saveCredentials("testing") }}/>
	// 		</View>
	// 		</SafeAreaView>
	// 	</NavigationContainer>
	// );
}