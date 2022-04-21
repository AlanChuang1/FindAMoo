import { StyleSheet, Text, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import GoogleLogin from "./screens/GoogleLogin.js"

const iAxios = axios.create({
	baseURL: "http://localhost:5000",
	timeout: 1000
})

// Opens a window to backend (localhost:5000) to call google auth api and to login
// TODO: after logining in, get certificate and store in asyncstorage to show they are logged in
// ---- also where the issue is
const loginAuth = async () => {
	console.log("Trying GoogleAuth...");
	window.open('http://localhost:5000/auth/google', '__self');
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


const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
			name="Home"
			component={GoogleLogin}
			options={{ title: 'Welcome' }}
			/>
		</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;