import * as React from 'react';
import { Text, View, Image, TextInput, Pressable } from 'react-native';
import styles from '../css/TutorialWelcome.style.js';
import defaultStyles from '../css/DefaultFonts.style.js';

import CowPinPoint from '../images/CowPinPoint.svg';
import MainCow from '../images/cows/cowmain_front.svg';

export default function TutorialWelcome() {
    let myUser = "JOE"
	return (
		<View style={styles.container}>
            <View style={styles.imgContainer}>
				<Image source={MainCow} styles={styles.cowPinPointImg}></Image>
			</View>
			<Text style={defaultStyles.h2Text}>Welcome, {myUser} to FindAMoo!</Text>
		</View>
	);
}



