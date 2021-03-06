import * as React from 'react';
import { Text, View, TextInput, Image, ScrollView, Keyboard, Pressable, TouchableOpacity } from 'react-native';
import styles from './css/BarnPage.style.js';
import defaultStyles from './css/DefaultFonts.style.js';
import SearchIcon from './images/icons/search.svg';
import XButton from './images/icons/x-circle.svg';
import SortIcon from './images/icons/updown_arrows.png';
import axios from 'axios';


export default function BarnPage({navigation}) {
	const [searchInput, onChangeText] = React.useState("");
	const [isFocused, setIsFocused] = React.useState(false);
	const [sortOrder, changeSortOrder] = React.useState("Newest - Oldest");
	const [Cows, setCows] = React.useState([]);

	async function getAllCows() { 
		try{
			const promise = await axios.get('https://frtl1ho6me.execute-api.us-west-1.amazonaws.com/production/cows/get_all_cows');
			return promise.data;
		} catch(err) {
			console.log(err);
		}
	}

	React.useEffect(() => {
		const fetchCows = async () => {
			setCows(await getAllCows());
			return Cows;
		}

		fetchCows()
		.catch((err) => {console.log(err)})
	}, [])

	const onFocusChange = () => {
		setIsFocused(true)
	}

	const displayXButton = () => {
		if(isFocused === true) {
			return (
				<TouchableOpacity
					onPress={() => {
						onChangeText("")
					}}>
					<XButton style={styles.xButton}/>
				</TouchableOpacity>
			);
		}
	}

	const displayCancelButton = () => {
		if(isFocused === true) {
			return (
				<TouchableOpacity
					onPress={() => {
						onChangeText("")
						setIsFocused(false)
						Keyboard.dismiss()
					}}>
					<Text style={styles.cancelButton}> Cancel </Text>
				</TouchableOpacity>
			);
		}
	}

	const updateSortOrder = () => {
		if(sortOrder === "Newest - Oldest") {
			changeSortOrder("Oldest - Newest")
		}
		else if(sortOrder === "Oldest - Newest") {
			changeSortOrder("Newest - Oldest")
		}
	}

	const displayCowImage = (img_url) => {
		let url = {uri: img_url}
		return(
			<Image source={url} style={styles.cowImage}/>
		)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.titleText}> The Barn </Text>
			<Text style={styles.cowsCollected}> Cows Collected: </Text>
			
			<View style={styles.typeSearch}>
				<View style={styles.searchSection}>
					<SearchIcon style={styles.searchIcon}/>
					<TextInput 
						style={styles.inputTextBox}
						placeholder="Search name, location, etc."
						placeholderTextColor="#CACACA"
						onFocus={() => onFocusChange()}
						onChangeText={text => onChangeText(text)}
						value={searchInput}
					/>
					{displayXButton()}
				</View>
			
				{displayCancelButton()}
			</View>

			<View style={styles.topLine}/>

			<ScrollView>
				<View>
					<TouchableOpacity style={styles.sortButton} onPress={() => updateSortOrder()}>
						<Image style={styles.sortIcon} source={SortIcon}/>
						<Text style={styles.sortButtonText}> {sortOrder} </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.ImagesArea}>
					{Cows.map(item => {
							return (
								<Pressable key={item.layersID} style={styles.cowImageArea}>
									<Text style={styles.cowNumber}>{item.layersID}</Text>
									{displayCowImage(item.S3link)}
									<Text style={styles.cowName}>{item.name}</Text>
								</Pressable>
							) }
					)}
				</View> 
			</ScrollView>

			<View style={styles.bottomLine}/>
		</View>
	);
}