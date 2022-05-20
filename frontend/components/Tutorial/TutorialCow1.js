import * as React from 'react';
import { View, Image, Text } from 'react-native';

import defaultStyles from '../css/DefaultFonts.style.js';
import styles from '../css/TutorialCow1.style.js';

import CowOrange from '../images/tutorial_unique/cow_orange_tex.svg';
const TutorialCow1 = () => {
    return(
		<View style={styles.container}>
			<View style={styles.inner_container}> 
				<CowOrange style={styles.image}></CowOrange>
				{/*<Image source={CowOrange} style={styles.image}></Image>*/}
				<View style={styles.text_container}>
					<Text style={[defaultStyles.h2Text, styles.text]}>
                        Keep track of your herd in the barn
					</Text>
					<Text style={[defaultStyles.bodyText, styles.text]}>
                        View all the cows you've collected and share your progress with friends
					</Text>
				</View>
			</View>
		</View>
	)
}

export default TutorialCow1; 