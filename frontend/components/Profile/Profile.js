
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
import { LEVEL1COWS, LEVEL2COWS, LEVEL3COWS, LEVEL4COWS, LEVEL5COWS } from '../images/Preview/index.js'
// cows level 1

const server = axios.create({
	baseURL: "http://localhost:5001",

	timeout: 1000
})

export default function Profile() {
	
	const [level, setLevel] = React.useState(1);
	const [collectedCows, setCollectedCows] = React.useState([]);
	
	const loadUserInfo = async () => {
		console.log("Loading default data");
		let userId = await checkCrendentials();
		// let userId = "109510457720541931009";
		let userData = await server.get("/users/get_user/" + userId);
		let levelData = userData.data.level;
		changeLevel(levelData);
	}
	loadUserInfo();


	const lockedLevel = (imgsArray, inputLevel) => {
		if(inputLevel === 1 && level >= 1){
			return (imgsArray.map((item) => 
			<View style={styles.levelimgcontainer} key={item.name}>
				<Image source={item.img} style={styles.cowImagePNG}/>
			</View>))
		}
		if(inputLevel === 2 && level >= 2){
			return (imgsArray.map((item) => 
			<View style={styles.levelimgcontainer} key={item.name}>
				<Image source={item.img} style={styles.cowImagePNG}/>
			</View>))
		}
		if(inputLevel === 3 && level >= 3){
			return (imgsArray.map((item) => 
			<View style={styles.levelimgcontainer} key={item.name}>
				<Image source={item.img} style={styles.cowImagePNG}/>
			</View>))
		}
		if(inputLevel === 4 && level >= 4){
			return (imgsArray.map((item) => 
			<View style={styles.levelimgcontainer} key={item.name}>
				<Image source={item.img} style={styles.cowImagePNG}/>
			</View>))
		}
		if(inputLevel === 5 && level >= 5){
			return (imgsArray.map((item) => 
			<View style={styles.levelimgcontainer} key={item.name}>
				<Image source={item.img} style={styles.cowImagePNG}/>
			</View>))
		}
		return (<View style={styles.levelimgcontainer}>
					{/* <Lock/> */}
				</View>);
	}
	const UnlockedCows1 = (props) => {
		let level1 = [  {name: "cowbrown_front", img: LEVEL1COWS.cowbrown_front},
						{name: "cowbrown_long", img: LEVEL1COWS.cowbrown_long}, 
						{name: "cowdarkbrown_front", img: LEVEL1COWS.cowdarkbrown_front}, 
						{name: "cowwhite_front", img: LEVEL1COWS.cowwhite_front},
						{name: "cowwhite_long", img: LEVEL1COWS.cowwhite_long}	
					];
		return (
			<View style={styles.unlockedCows}>
				<Text style={styles.levelName}>{props.level}</Text>
				<Text>Collect {props.required} cows</Text>
				<View style={styles.unlockedImgContainer}>
					{ lockedLevel(level1, 1) }
				</View>
			</View>
		);
	}
	const UnlockedCows2 = (props) => {
		let level2 = [  {name: "cowblue_front", img: LEVEL2COWS.cowblue_front},
						{name: "coworange_front", img: LEVEL2COWS.coworange_front},
						{name: "cowpurple_front", img: LEVEL2COWS.cowpurple_front}, 
						{name: "cowred_front", img: LEVEL2COWS.cowred_front}
					];
		return (
			<View style={styles.unlockedCows}>
				<Text style={styles.levelName}>{props.level}</Text>
				<Text>Collect {props.required} cows</Text>
				<View style={styles.unlockedImgContainer}>
					{ lockedLevel(level2, 2) }
				</View>
			</View>
		);
	}
	const UnlockedCows3 = (props) => {
		let level3 = [  {name: "bells30", img: LEVEL3COWS.bells30},
						{name: "bells31", img: LEVEL3COWS.bells31}, 
						{name: "bells32", img: LEVEL3COWS.bells32}, 
						{name: "bells33", img: LEVEL3COWS.bells33},
						{name: "bells34", img: LEVEL3COWS.bells34}	];
		return (
			<View style={styles.unlockedCows}>
				<Text style={styles.levelName}>{props.level}</Text>
				<Text>Collect {props.required} cows</Text>
				<View style={styles.unlockedImgContainer}>
					{/* <Lock/> */}
					{ lockedLevel(level3, 3) }
							
						
				</View>
			</View>
		);
	}
	const UnlockedCows4 = (props) => {
		let level4 = [  {name: "crown", img: LEVEL4COWS.crown},
						{name: "gardenhat", img: LEVEL4COWS.gardenhat}, 
						{name: "partyhat", img: LEVEL4COWS.partyhat}, 
						{name: "tophat", img: LEVEL4COWS.tophat},
						{name: "witchhat", img: LEVEL4COWS.witchhat}	
					];
		return (
			<View style={styles.unlockedCows}>
				<Text style={styles.levelName}>{props.level}</Text>
				<Text>Collect {props.required} cows</Text>
				<View style={styles.unlockedImgContainer}>
					{/* <Lock/> */}
					{ lockedLevel(level4, 4) }
				
				</View>
			</View>
		);
	}
	const UnlockedCows5 = (props) => {
		let level5 = [  {name: "bow", img: LEVEL5COWS.bow},
						{name: "mustache", img: LEVEL5COWS.mustache},
						{name: "sunglasses", img: LEVEL5COWS.sunglasses}, 
						{name: "sprout", img: LEVEL5COWS.sprout},
						{name: "starglasses", img: LEVEL5COWS.starglasses} 
					];
		return (
			<View style={styles.unlockedCows}>
				<Text style={styles.levelName}>{props.level}</Text>
				<Text>Collect {props.required} cows</Text>
				{/* <Image source={Lock} style={styles.lockImages}/>	 */}
				<View style={styles.unlockedImgContainer}>
					{/* <StripeBG style={{ width: 1, height: 1}}/> */}
					{/* <Lock/> */}
					{ lockedLevel(level5, 5) }
					{/* <Image source={LEVEL1COWS.cowbrown_front} style={{height:50, width:50}}/> */
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
	React.useEffect(() => {
		// console.log("Rendering");
	});

	return (
		<ScrollView style={styles.container}>
			<View style={styles.topBar}>		
				<Text>Profile</Text> 
				{/* <GearSetting style={styles.gearSetting}/> */}
			</View> 
			<View style={styles.levelContentContainer}>
				<LevelBar/>
				<LevelDescription/>
				<UnlockedCows1 level="Level 1: Spotless cow"/>
				<UnlockedCows2 level="Level 2: Spotted cow" required="5"/>
				<UnlockedCows3 level="Level 3: Cowbell" required="10"/>
				<UnlockedCows4 level="Level 4: Hat" required="20"/>
				<UnlockedCows5 level="Level 5: Special Accessories" required="35"/>
			</View>
		</ScrollView>
	);
}



