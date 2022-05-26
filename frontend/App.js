import { StyleSheet, Text, Image, TextInput, Alert, View, SafeAreaView, Button, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, createNativeTabsNavigator } from '@react-navigation/bottom-tabs'; 
//import { useGoogleFonts, Lexend_700Bold, Lexend_500Medium, Lexend_400Regular } from '@expo-google-fonts/lexend';
import { useFonts } from 'expo-font';

import GoogleLogin from "./components/GoogleLogin.js";
import CreateUserPage from "./components/CreateUserPage.js";
import TutorialWelcome from './components/Tutorial/TutorialSwiper.js';
import MapPage from './components/MapPage.js'

import MapIconFocused from './components/images/map_active.png'; 
import MapIconUnfocused from './components/images/map_inactive.png';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

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
			{/*<Stack.Navigator 
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
				
			</Stack.Navigator>*/}
			<Tab.Navigator
				screenOptions={{
					headerShown: false, 
					tabBarShowLabel: false,
					style: {
						position: 'absolute', 
						bottom: 25, 
						left: 20, 
						right: 20, 
						elevation: 0,
						backgroundColor: '#ffffff', 
						borderRadius: 15, 
					}
				}}
			>
				<Tab.Screen
					name="MapPage"
					component={MapPage}
					options={{
						tabBarShowLabel: false,
						tabBarIcon: ({focused}) => (
							<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
								<Image 
									source={focused ? MapIconFocused : MapIconUnfocused}
									resizeMode="contain"
									style={{
										width: 25, 
										height: 25, 
									}}
								/>
								<Text style={{color: focused ? '#000000' : '#DADADA', fontSize: 12}}>
									MAP
								</Text>
							</View>
						),
					}}
				/>
				<Tab.Screen
				name="Dummy"
				component={MapPage}
				>
					
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;