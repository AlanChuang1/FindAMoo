import * as React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import styles from './css/CreateUserPage.style';
import defaultStyles from './css/DefaultFonts.style';

export default function CreateUserPage() {
	const [text, onChangeText] = React.useState("");
	return (
		<View style={styles.container}>
			<Text style={[styles.titleText, defaultStyles.h2Text]}>Create your username</Text>
			<TextInput
				style={styles.inputTextBox}
				onChangeText={onChangeText}
				value={text}
				placeholder="Username"
			/>
			<Pressable
				style={[styles.nextButton, defaultStyles.buttonText]}
				title='Next'
				onPress={() => {
					
				}}
			>
				<Text>Next</Text>
			</Pressable>
		</View>
		
	);
}



