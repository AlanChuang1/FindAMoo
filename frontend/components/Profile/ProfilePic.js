import * as React from 'react';
import { Text, View, TextInput, Pressable, ScrollView, Image} from 'react-native';
// import styles from './css/.style';
import styles from '../css/ProfilePic.style';
import axios from 'axios';
// import defaultStyles from './css/DefaultFonts.style';
import { checkCrendentials, getUserData } from '../../Utils.js';

const server = axios.create({
	baseURL: "http://localhost:5000",
	timeout: 1000
})

export default function ProfilePic() {
    const [color, changeColor] = React.useState("blue");
    const [cow, changeCow] = React.useState("cow11101");
	const [cowsUnlocked, changeCowsUnlocked] = React.useState([]);


	const loadDefaults =  async () => {
		// First load up, get all the user's cows
		// let userId = await checkCrendentials();
		let userId = "109510457720541931009";
		let userData = await server.get("/users/get_user/" + userId);
		// Returns an array of strings id corresponding to collected cows
		console.log(userData.data);
		let ownedCowsId = userData.data.collectedIDs;
		console.log(ownedCowsId);
		let cowLinks = [];

		for (let i = 0; i < ownedCowsId.length; i++) {
			let link = await server.get("/cows/" + ownedCowsId[i]);
			cowLinks.push(link.S3link);
		}
		changeCowsUnlocked();
	}
	loadDefaults();
	React.useEffect(()=>{
		{ cowsUnlocked.map((item) => 
			<View style={styles.levelimgcontainer}>
				<Image source={{uri:item}} style={{width:100, height:100, backgroundColor: 'red'}}/>
			</View>
		)}
	});
	// loadDefaults();	

	
	const ProfilePicture = () => {
		return (
			<View style={[styles.container, {backgroundColor: color}]}>
            	<Image source={{uri:"https://findamoo.s3.us-west-1.amazonaws.com/"+cow+".png"}} style={styles.cowImg}/>
				{/* <Image
					style={{width: 100, height: 100}}
					source={{uri: 
						'https://www.planwallpaper.com/static/images/9-credit-1.jpg'
					}}/> */}
			</View>
		);

	}
	const PalleteBut = (props) => {
		let colorHexCode = "#" + props.bgcolor;
		return (
			<Pressable 
				style={[styles.palleteBut, {backgroundColor: colorHexCode}]}
				title="pallete"
				onPress={() => {
					// Change color
					changeColor(colorHexCode);
				}}
			>
			</Pressable>
		);

	}


	return (
		<ScrollView>
			<View style={styles.pageContainer}>
				<Text>Edit Profile</Text>
				<ProfilePicture></ProfilePicture>
				<View style={styles.changePalleteSection}>
					<View style={styles.bgPallete}>
						<Text style={{alignSelf:'flex-start'}}>Background</Text>
						<View style={styles.row}>
							<PalleteBut bgcolor = "B12818"></PalleteBut>
							<PalleteBut bgcolor = "E9AADF"></PalleteBut>
							<PalleteBut bgcolor = "F69B7D"></PalleteBut>
							<PalleteBut bgcolor = "384D8E"></PalleteBut>
						</View>
						<View style={styles.row}>
							<PalleteBut bgcolor = "408283"></PalleteBut>
							<PalleteBut bgcolor = "3E2869"></PalleteBut>
							<PalleteBut bgcolor = "FFFFFF"></PalleteBut>
							<PalleteBut bgcolor = "000000"></PalleteBut>
						</View>
					</View>
				</View>
				<View>
				
				</View> 

			</View>
		</ScrollView>
	);
}



