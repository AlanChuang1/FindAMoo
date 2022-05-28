import { StyleSheet, Text, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoogleLogin from "./components/GoogleLogin.js";
import CreateUserPage from "./components/CreateUserPage.js";
import CreateCowCaughtPage from './components/cowCaught.js';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
		<Stack.Navigator 
			screenOptions={{
    			headerShown: true
  			}} 

		>

			{/* <Stack.Screen 
				name="Introduction"
				component={CreateUserPage}
			/> */}
			<Stack.Screen
				name="Login"
				component={GoogleLogin}
			/>

{/* > */}
			<Stack.Screen
				name="CreateCowCaughtPages"
				component={CreateCowCaughtPage}
			/>
		</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;