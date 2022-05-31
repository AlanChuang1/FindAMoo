import * as React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import styles from './css/CreateUserPage.style';
import defaultStyles from './css/DefaultFonts.style';

export default function CreateUserPage({navigation}) {
	const [text, onChangeText] = React.useState("fasdfasfdsa");
	return (
		<View style={styles.container}>
			<Text style={[styles.titleText, defaultStyles.h2Text]}>Create your username</Text>
			<TextInput
				style={styles.inputTextBox}
				onChangeText={textInput => onChangeText(textInput)}
				value={text}
				placeholder="Username"
			/>
			<Pressable
				style={[styles.nextButton, defaultStyles.buttonText]}
				title='Next'
				onPress={() => {
					navigation.navigate('MainScreen');
				}}
			>
				<Text>Next</Text>
			</Pressable>
		</View>
		
	);
}



