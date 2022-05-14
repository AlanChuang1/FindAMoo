import * as React from 'react';
import { Text, View, Image, TextInput, Pressable } from 'react-native';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-detect";
import AppIntroSlider from 'react-native-app-intro-slider';

// STYLES
import styles from '../css/TutorialWelcome.style.js';
import defaultStyles from '../css/DefaultFonts.style.js';

// ASSETS
import CowPinPoint from '../images/CowPinPoint.svg';
import MainCow from '../images/cows/cowmain_front.svg';

const slides = [
	(
		<View style={styles.container}>
            <View style={styles.imgContainer}>
				<Image source={CowPinPoint} style={styles.cowPinPointImg}></Image>
			</View>
			<Text style={defaultStyles.h2Text}>Welcome, JOE to FindAMoo!</Text>
		</View>
	)
	/*
	{
	  key: 'one',
	  title: 'Title 1',
	  text: 'Description.\nSay something cool',
	  image: { CowPinPoint },
	  backgroundColor: '#59b2ab',
	},
	{
	  key: 'two',
	  title: 'Title 2',
	  text: 'Other cool stuff',
	  image: {CowPinPoint},
	  backgroundColor: '#febe29',
	},
	{
	  key: 'three',
	  title: 'Rocket guy',
	  text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
	  image: {CowPinPoint},
	  backgroundColor: '#22bcb5',
	}
	*/
  ];

const _renderItem = ({ item }) => {
    return (item);
}
const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
}

export default function TutorialWelcome() {
    let myUser = "JOE"
	const [showRealApp, setShowRealApp] = React.useState(); 
	return (
		<AppIntroSlider 
			renderItem={_renderItem} 
			data={slides} 
			onDone={_onDone}
		/>
	);
}



