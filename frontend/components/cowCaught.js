import * as React from 'react';
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './css/CowCaughtPage.style';
import defaultStyles from './css/DefaultFonts.style';

export default function CreateCowCaughtPage() {
	const [text, onChangeText] = React.useState("");
	return (
		<ScrollView>
		<View style={styles.container}>
			<Text style={[styles.titleText, defaultStyles.h1Text, styles.CowCaught]}>Cow Caught!</Text>



			<Text style={[styles.titleText, defaultStyles.h2Text]}></Text>
			<TextInput
				style={styles.inputTextBox}
				onChangeText={onChangeText}
				value={text}
				placeholder="Cow #n"   //how to change n to follow number of cows collected
			/>
		
			<Pressable
				style={[styles.barnButton, defaultStyles.buttonText]}
				title='Go To Barn'
				onPress={() => {
					
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

