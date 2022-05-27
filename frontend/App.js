import { StyleSheet, Text, Image, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { useGoogleFonts, Lexend_700Bold, Lexend_500Medium, Lexend_400Regular } from '@expo-google-fonts/lexend';
import { useFonts } from 'expo-font';

import GoogleLogin from "./components/GoogleLogin.js";
import CreateUserPage from "./components/CreateUserPage.js";
import TutorialWelcome from './components/Tutorial/TutorialSwiper.js';
import MainScreen from './components/MainScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
	let [fontsLoaded] = useFonts({
		"AvenirMedium": require("./assets/Fonts/Avenir-Medium-09.ttf"),
		"AvenirHeavy": require("./assets/Fonts/Avenir-Heavy-05.ttf"),

		"LexendBold": require("./assets/Fonts/Lexend-Bold.ttf"), 
		"LexendMedium": require("./assets/Fonts/Lexend-Medium.ttf"),
		"LexendRegular": require("./assets/Fonts/Lexend-Regular.ttf"), 
	});
	return (
		<NavigationContainer>
			<Stack.Navigator 
				screenOptions={{
					headerShown: false
				}} 
			>
				<Stack.Screen 
					name="Introduction"
					component={CreateUserPage}
				/>

				<Stack.Screen
					name="Login"
					component={GoogleLogin}
				/>

				<Stack.Screen
					name="TutorialWelcome"
					component={TutorialWelcome}
				/>

				<Stack.Screen
					name="MainScreen"
					component={MainScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;