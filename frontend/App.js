import { StyleSheet, Text, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {useFonts, Lexend_700Bold, Lexend_500Medium, Lexend_400Regular} from '@expo-google-fonts/lexend';
import { useFonts } from 'expo-fonts'

import GoogleLogin from "./components/GoogleLogin.js";
import CreateUserPage from "./components/CreateUserPage.js";
import TutorialWelcome from './components/Tutorial/TutorialWelcome.js';

const Stack = createNativeStackNavigator();

const App = () => {
	let [fontsLoaded] = useFonts({
		
	});
	return (
		<NavigationContainer>
			<Stack.Navigator 
				screenOptions={{
					headerShown: false
				}} 
			>
				<Stack.Screen
					name="TutorialWelcome"
					component={TutorialWelcome}
				/>

				<Stack.Screen 
					name="Introduction"
					component={CreateUserPage}
				/>

				<Stack.Screen
					name="Login"
					component={GoogleLogin}
				/>
				
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;