
import * as React from 'react';
import { Image, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import defaultStyles from '../css/DefaultFonts.style';
import LevelBar from './LevelBar';
import GearSetting from '../images/gear.svg';
import Lock from "../images/lock.svg";
import styles from '../css/Profile.style';
import StripeBG from '../images/stripebg.svg';
import {getUserData} from '../../Utils.js';
import {checkCrendentials} from '../../Utils.js';
import axios from 'axios';

// cows level 1

const server = axios.create({
	baseURL: "https://frtl1ho6me.execute-api.us-west-1.amazonaws.com/production/",
	timeout: 1000
})

export default function Profile() {
	//let unlockedCows = 
	const [level, setLevel] = React.useState(0);
	const [collectedCows, setCollectedCows] = React.useState([]);
	
	const loadUserInfo = async () => {
		console.log("Loading default data");
		//let userData = await getUserData();
		// console.log(userData);

		//changeLevel();
	}

	// Calculates the level of the user based on collected cows
	// INPUT: expects an array of collected cow IDS
	const calculateLevel = async (collectedIDS) => {
		
	}
	const UnlockedCows = (props) => {
		return (
			<View style={styles.unlockedCows}>
				<Text style={styles.levelName}>{props.level}</Text>
				<Text>Collect {props.required} cows</Text>
				{/* <Image source={Lock} style={styles.lockImages}/>	 */}
				<View style={styles.unlockedImgContainer}>
					{/* <StripeBG style={{ width: 1, height: 1}}/> */}
					<Lock/>
				</View>
			</View>
		);
	}
	const LevelDescription = () => {
		return (
			<View style={styles.descriptionText}>
				<Text style={styles.levelDescriptionTitle}>Level System</Text>
				<Text style={styles.levelDescriptionHeader}>Collect more cows to level up and unlock a new cow variation!</Text>
			</View>
		);
	}
	const LevelList = () => {

	}
	// https://www.freakyjolly.com/react-dynamic-list-using-map-else-and-switch-conditional-expression-in-jsx-template-rendering/
	const levelCows = (list) => {
		return (	
			<View>
				{ list.map((item) => 
					<View>
						<Image source={item.image} style={{height:"50", width:"150"}}/>
					</View>
				)};
			</View>
		);
	}

	React.useEffect(() => {
		console.log("Rendering");
		const getUserData = server.get('/users/get_user', {
			method: 'GET',
			headers: {
				id : checkCrendentials()
			},
		});
		setCollectedCows(getUserData);
		console.log(getUserData);
	
	});

	return (
		<ScrollView style={styles.container}>
			<View style={styles.topBar}>		
				<Text>Profile</Text> 
				{/* <Image source={GearSetting} style={styles.gearSetting}/> */}
				<GearSetting style={styles.gearSetting}/>
			</View> 
			<View style={styles.levelContentContainer}>
				<LevelBar/>
				<UnlockedCows/>
				<LevelDescription/>
				<UnlockedCows level="Level 1: Spotless cow"/>
				<UnlockedCows level="Level 2: Spotted cow" required="5"/>
				<UnlockedCows level="Level 3: Cowbell" required="10"/>
				<UnlockedCows level="Level 4: Hat" required="20"/>
				<UnlockedCows level="Level 5: Special Accessories" required="35"/>
			</View>
		</ScrollView>
	);
}



