import * as React from 'react';
import { Text, View, TextInput, Pressable, ScrollView, Image} from 'react-native';
// import styles from './css/.style';
import styles from '../css/ProfilePic.style';
import axios from 'axios';
import defaultStyles from '../css/DefaultFonts.style';
import { checkCrendentials, getUserData } from '../../Utils.js';

const server = axios.create({
	baseURL: "https://frtl1ho6me.execute-api.us-west-1.amazonaws.com/production/",
	timeout: 1000
})

export default function ProfilePic() {
    const [color, changeColor] = React.useState("blue");
    const [cow, changeCow] = React.useState("https://findamoo.s3.us-west-1.amazonaws.com/cow11101.png");
	const [cowsUnlocked, changeCowsUnlocked] = React.useState([]);

	const loadDefaults = async () => {
		// First load up, get all the user's cows
		try {
			let userId = await checkCrendentials();
			let userData = await server.get("/users/get_user/" + userId);
			// Returns an array of strings id corresponding to collected cows
			let ownedCowsId = userData.data.collectedIDs;
			let cowLinks = [];

			// Put all the uris to cow images into an array that will be used to display owned cows
			for (let i = 0; i < ownedCowsId.length; i++) {
				let link = await server.get("/cows/get_cow/" + ownedCowsId[i]);
				cowLinks.push({ id: "cow"+i,
						 	    img: link.data.S3link });
			}
			changeCowsUnlocked(cowLinks);
		} catch (error) {
			console.log("failed to load in profile pic :" + error);
		}
	}

	React.useEffect(() => {
		loadDefaults();
	}, [])
	
	const ProfilePicture = () => {
		return (
			<View style={[styles.piccontainer, {backgroundColor: color}]}>
            	<Image 
					source={{uri:cow}} 
					style={styles.cowImg}
				/>
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
				<Text style={[defaultStyles.h2Text, styles.titleText]}>Edit Profile</Text>
				<ProfilePicture></ProfilePicture>
				<View style={styles.changePalleteSection}>
					<View style={styles.bgPallete}>
						<Text style={[{alignSelf:'flex-start'}, defaultStyles.h3Text]}>Background</Text>
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
				<View style={styles.cowCollection}>
					{ cowsUnlocked.map((item) => 
						<View style={styles.cowImagesContainer} key={item.id}>
							<Pressable onPress={()=>{changeCow(item.img)}}>
							<Image 
								source={{uri:item.img}} 
								style={styles.cowImages}
								/>
							</Pressable>
						</View>
					)}
				</View> 
		
			</View>
		</ScrollView>
	);

}



