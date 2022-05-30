import * as React from 'react';
import { Text, View, TextInput, Image, ScrollView, Keyboard, Pressable, TouchableOpacity } from 'react-native';
import styles from './css/BarnPage.style.js';
import defaultStyles from './css/DefaultFonts.style.js';
import SearchIcon from './images/icons/search.svg';
import XButton from './images/icons/x-circle.svg';
import SortIcon from './images/icons/updown_arrows.png';
import BarnIcon from './images/icons/barn_active.svg';
import MapIconInactive from './images/icons/map_inactive.svg';
import ProfileIconInactive from './images/icons/profile_active-43.svg';
import axios from 'axios';


export default function BarnPage({navigation}) {
	const [searchInput, onChangeText] = React.useState("");
	const [isFocused, setIsFocused] = React.useState(false);
	const [sortOrder, changeSortOrder] = React.useState("Newest - Oldest");
	const [showNavBar, setShowNavBar] = React.useState(true);

	async function getAllCows() { 
		try{
			const promise = await axios.get('http://localhost:5001/cows/get_all_cows');
			return promise.data;
		} catch(err) {
			console.log(err);
		}
	}

	var Cows = [];

	React.useEffect(() => {
		const fetchCows = async () => {
			Cows = await getAllCows();
			return Cows;
		}

		fetchCows()
		.catch((err) => {console.log(err)})
	}, [])

	const onFocusChange = () => {
		setIsFocused(true)
		setShowNavBar(false)
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
						setShowNavBar(true)
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

	const displayNavBar = () => {
		if(showNavBar === true) {
			return(
				<View style={styles.navigationBar}>
					<View style={styles.icons}>
						<TouchableOpacity>
							<BarnIcon style={styles.barnIcon}/>
						</TouchableOpacity>
						<Text style={styles.barnIconText}> Barn </Text>
					</View>
					<View style={styles.icons}>
						<TouchableOpacity 
							style={styles.mapIcon}
							onPress={() => {
								navigation.navigate("Test")
							}}>
							<MapIconInactive width={45} height={45}/>
						</TouchableOpacity>
						<Text style={styles.otherIconText}> Map </Text>
					</View> 
					<View style={styles.icons}>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Test")
							}}>
							<ProfileIconInactive style={styles.barnIcon}/>
						</TouchableOpacity>
						<Text style={styles.otherIconText}> Profile </Text>
					</View> 
				</View>
			);
		}
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

			<ScrollView onTouchEnd={() => setShowNavBar(true)}>
				<View>
					<TouchableOpacity style={styles.sortButton} onPress={() => updateSortOrder()}>
						<Image style={styles.sortIcon} source={SortIcon}/>
						<Text style={styles.sortButtonText}> {sortOrder} </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.ImagesArea}>
					{/* {Cows.map(item => {
							return (
								<Pressable key={item.layersID} style={styles.cowImageArea}>
									<Text style={styles.cowNumber}>{item.layersID}</Text>
									{displayCowImage(item.S3link)}
									<Text style={styles.cowName}>{item.name}</Text>
								</Pressable>
							) }
					)} */}
				</View> 
			</ScrollView>

			<View style={styles.bottomLine}/>

			{displayNavBar()}
		</View>
	);
}