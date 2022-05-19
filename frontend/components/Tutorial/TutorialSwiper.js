import * as React from 'react';
import { View, Image, Pressable, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-detect";
import AppIntroSlider from 'react-native-app-intro-slider';

// STYLES
import defaultStyles from '../css/DefaultFonts.style.js';
import styles from '../css/TutorialSwiper.style.js';

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

const TutorialSwiper = () => {
    let myUser = "JOE"
	const [showRealApp, setShowRealApp] = React.useState(false); 
	const [isLastSlide, setIsLastSlide] = React.useState(false); 

	const _onDone = () => {
		// User finished the introduction. Show real app through
		// navigation or simply by controlling state
		setShowRealApp(true);
		console.log("Done button!"); 
	}

	function ButtonContainer(props) {
		return (
			<View style={[styles.buttonContainer]}>
				<TouchableOpacity
					style={[styles.nextButton, defaultStyles.button]}>
					<Text style={defaultStyles.buttonText}>Get started</Text>
				</TouchableOpacity>
			</View>
		)
	}
	
	return (
		<AppIntroSlider 
			renderItem={_renderItem} 
			data={slides} 
			onDone={_onDone}
/*
			renderPagination={
				(activeIndex) => {
					return (
						<View style={styles.paginationContainer}>
							<ButtonContainer isLastSlide={activeIndex === slides.length}/>
							<SafeAreaView>
								<View style={styles.paginationDots}>
								{slides.length > 1 &&
									slides.map((_, i) => (
									<TouchableOpacity
										key={i}
										style={[
										styles.dot,
										i === activeIndex
											? {backgroundColor: 'white'}
											: {backgroundColor: 'rgba(0, 0, 0, .2)'},
										]}
										onPress={() => {goToSlide(i, true)}}
									/>
									))}
								</View>
							</SafeAreaView>
						</View>
					);
			    }
			}
*/
/*		
			showPrevButton={true}
			renderPrevButton={() => {
				return (
					<Text style={[defaultStyles.buttonText]}>Prev</Text>
				)
			}}
*/
/*
			renderNextButton={() => {
				return (
					<Text style={[defaultStyles.buttonText]}>Next</Text>
				)
			}}
*/
/*
			renderDoneButton={() => {
				return(
					<Text style={[defaultStyles.buttonText]}>Get started</Text>
				)
			}}
*/
		/>
	);
}

export default TutorialSwiper



