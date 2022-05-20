
import * as React from 'react';
import { Image, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import defaultStyles from '../css/DefaultFonts.style';
import LevelBar from './LevelBar';
import GearSetting from '../images/gear.svg';
import Lock from "../images/lock.svg";
import styles from '../css/Profile.style';
import {getUserData} from '../../Utils.js';

export default function Profile() {
	//let unlockedCows = 
	const [unlockedCowsList, setCowList] = React.useState([[]]);;
	const [level, setLevel] = React.useState(0);

	const loadUserInfo = async () => {
		console.log("Loading default data");
		//let userData = await getUserData();
		// console.log(userData);

		//changeLevel();
	}
	const UnlockedCows = (props) => {
		return (
			<View style={styles.unlockedCows}>
				<Text>{props.level}</Text>
				<Text>Collect {props.required} cows</Text>
				{/* <Image source={Lock} style={styles.lockImages}/>	 */}
				<Lock/>
			</View>
		);
	}
	const LevelDescription = () => {
		return (
			<View style={styles.descriptionText}>
				<Text>Level System</Text>
				<Text>Collect more cows to level up and unlock a new cow variation!</Text>
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
		console.log("wroking");
	});

	return (

		<ScrollView style={styles.container}>
			<View style={styles.topBar}>		
				<Text style={[defaultStyles.h1Text]}>Profile</Text> 
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
				
				<UnlockedCows level="Level 5: Special Accessories" required="35"/>
				<UnlockedCows level="Level 5: Special Accessories" required="35"/>
				<UnlockedCows level="Level 5: Special Accessories" required="35"/>
			</View>
		
		</ScrollView>
	);
}



