import { StyleSheet, Text, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoogleLogin from "./screens/GoogleLogin.js"

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