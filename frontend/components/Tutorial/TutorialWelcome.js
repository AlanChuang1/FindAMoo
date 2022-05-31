import * as React from 'react';
import { View, Text, Image } from 'react-native';
import defaultStyles from '../css/DefaultFonts.style.js';
import styles from '../css/TutorialWelcome.style.js';

//import CowPinPoint from '../images/CowPinPoint.svg';
import CPPpng from '../images/CowPinPoint.png';
const TutorialWelcome = () => {
    return (
		<View style={styles.container}>
			<Image source={CPPpng} style={styles.cowPinPointImg}/>
			{/*<CowPinPoint style={styles.cowPinPointImg}></CowPinPoint>*/}
            {/*<Image source={CowPinPoint} style={styles.cowPinPointImg}></Image>*/}
			<Text style={[defaultStyles.h2Text, styles.textBox]}>
				Welcome, Jose to FindAMoo!
			</Text>
		</View>
	);
}

export default TutorialWelcome;