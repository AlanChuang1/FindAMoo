import * as React from 'react';
import { View, Image, Text, Pressable} from 'react-native';

import defaultStyles from '../css/DefaultFonts.style.js';
import styles from '../css/TutorialCow2.style.js';

//import CowVar from '../images/tutorial_unique/cow_variations.svg';
import CowVarPng from '../images/tutorial_unique/cow_variations.png';
const TutorialCow2 = () => {
    return(
		<View style={styles.container}>
			<View style={styles.inner_container}>
				{/*<CowVar style={styles.image}></CowVar>*/}
				{/*<Image source={CowVar} style={styles.image}></Image>*/}
				<Image source={CowVarPng} style={styles.image}></Image>
				<View style={styles.text_container}>
					<Text style={[defaultStyles.h2Text, styles.text]}>
                        Level up for more cow variations
					</Text>
					<Text style={[defaultStyles.bodyText, styles.text]}>
                        Collect more cows to level up and find cows with different colors or accessories
					</Text>
				</View>
			</View>
		</View>
	)
}

export default TutorialCow2; 