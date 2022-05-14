import * as React from 'react';
import { View, Image, Text } from 'react-native';
import defaultStyles from '../css/DefaultFonts.style.js';
import styles from '../css/TutorialWelcome.style.js';

import CowPinPoint from '../images/CowPinPoint.svg';
const TutorialWelcome = () => {
    return (
		<View style={styles.container}>
            <View style={styles.imgContainer}>
				<Image source={CowPinPoint} style={styles.cowPinPointImg}></Image>
			</View>
			<Text style={[defaultStyles.h2Text, styles.textBox]}>
				Welcome, JOE to FindAMoo!
			</Text>
		</View>
	);
}

export default TutorialWelcome;