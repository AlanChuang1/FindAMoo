import StatusBar from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import { createBottomTabNavigator, createNativeTabsNavigator } from '@react-navigation/bottom-tabs'; 

import MapPage from './MapPage.js';
import BarnPage from './BarnPage.js';
import MapIconFocused from './images/map_active.png'; 
import MapIconUnfocused from './images/map_inactive.png';

const Tab = createBottomTabNavigator(); 

export default function MainScreen() {
    return (
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
					name="BarnPage"
					component={BarnPage}
				/>
			</Tab.Navigator>
    );
}