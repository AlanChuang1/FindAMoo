//import * as React from 'react';
import { Text, View, TextInput, Pressable, ScrollView, Image } from 'react-native';
import styles from './css/CowCaughtPage.style';
import defaultStyles from './css/DefaultFonts.style';
import axios from 'axios';
import { checkCrendentials, getUserData } from '../Utils';
import { setStatusBarStyle } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { NavigationType } from 'react-router';


const server = axios.create({
	baseURL: "http://localhost:5000",
	timeout: 1000
})


async function getDailyCow(){   //async
	let UserID = checkCrendentials()
	console.log("this is user ID: ")
	console.log(UserID);
	let user = await server.get('/users/get_user/' + UserID)
	//let user_lvl = user.level
	let dailyCow = await server.get("/cows/get_daily/" + user.level)
	let url = "https://findamoo.s3.us-west-1.amazonaws.com/" + dailyCow + ".png";
	console.log(url);
	return url;

}



export default function CreateCowCaughtPage(navigation) {
	const [text, onChangeText] = useState("");
	const [url, geturl] = useState("https://findamoo.s3.us-west-1.amazonaws.com/cow11105.png");
	
	// useEffect(() => {
	// 	geturl(getDailyCow());
	// });
	getDailyCow();
	return (
		<ScrollView>
		<View style={styles.container}>
			{/* <Text style={{height: 80}}> </Text> */}
			<Text style={[styles.titleText, defaultStyles.h1Text, styles.CowCaught]}>Cow Caught!</Text>

			<Image 
			style={{width: 253, height: 193, top: -220}}
			source={{uri: url}} 
			/>

			<Text style={[styles.titleText, defaultStyles.h2Text]}></Text>
			<TextInput
				style={styles.inputTextBox}
				onChangeText={onChangeText}
				value={text}
				placeholder="new cow"   //how to change n to follow number of cows collected
				placeholderTextColor='#CACACA'
			/>
		
			<Pressable
				style={[styles.barnButton, defaultStyles.buttonText]}
				title='Go To Barn'
				onPress={() => {
					navigation.navigate("BarnPage");
				}}
			>
				<Text>Go To Barn</Text>

                
			</Pressable>

            <Pressable
				style={[styles.shareButton, defaultStyles.buttonText]}
				title='Share'  //add class sheet for each button
				onPress={() => {
					
				}}
			>
				<Text>Share</Text>
			</Pressable>

		</View>
		</ScrollView>
	);
}
