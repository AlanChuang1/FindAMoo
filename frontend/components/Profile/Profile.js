
import * as React from 'react';
import { Image, Text, View, TextInput, Pressable } from 'react-native';
import defaultStyles from '../css/DefaultFonts.style';
import LevelBar from './LevelBar';
import GearSetting from '../images/gear.svg';
import styles from '../css/Profile.style';

export default function Profile() {
	return (
		<View style={styles.container}>
			<View style={styles.topBar}>		
				<Text>Profile</Text> 
				<Image source={GearSetting} style={styles.gearSetting}/>
			</View> 
			<View>
				<LevelBar/>
			</View>
		</View>
	);
}



