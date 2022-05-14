import * as React from 'react';
import { View, Image } from 'react-native';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-detect";
import AppIntroSlider from 'react-native-app-intro-slider';

// STYLES
import defaultStyles from '../css/DefaultFonts.style.js';

// PAGES
import Welcome from './TutorialWelcome.js';
import TMap from './TutorialMap.js';
import TCow1 from './TutorialCow1';
import TCow2 from './TutorialCow2'; 



const slides = [
	Welcome, 
	TMap,
	TCow1, 
	TCow2,
  ];

const _renderItem = ({item}) => {
    return item();
}
const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
}

const TutorialSwiper = () => {
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

export default TutorialSwiper



