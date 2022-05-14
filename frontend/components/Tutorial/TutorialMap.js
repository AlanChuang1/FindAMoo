import * as React from 'react';
import { View, Image, Text } from 'react-native';

import defaultStyles from '../css/DefaultFonts.style.js';
import styles from '../css/TutorialMap.style.js';

import MapIcon from '../images/tutorial_unique/map_icon.svg';
const TutorialMap = () => {
    return(
		<View style={styles.container}>
			<View style={styles.inner_container}> 
				<Image source={MapIcon} style={styles.image}></Image>
				<View style={styles.text_container}>
					<Text style={[defaultStyles.h2Text, styles.text]}>
						Find and collect a cow daily
					</Text>
					<Text style={[defaultStyles.bodyText, styles.text]}>
						FindAMoo is a UC Davis scavenger hunt game where players walk or bike to a location on campus to collect a virtual cow
					</Text>
				</View>
				
			</View>
		</View>
	)
}

export default TutorialMap; 