import * as React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import styles from './css/CreateUserPage.style';
import defaultStyles from './css/DefaultFonts.style';

export default function CreateUserPage({navigation}) {
	const [text, onChangeText] = React.useState("");
	return (
		<View style={styles.container}>
			<Text style={[styles.titleText, defaultStyles.h2Text]}>Create your username</Text>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.inputTextBox}
					onChangeText={onChangeText}
					value={text}
					placeholder="Username"
				/>
			</View>
			<Pressable
				elevation={8}
				style={[styles.nextButton]}
				title='Next'
				onPress={() => {
					navigation.navigate('MainScreen');
				}}
			>
				<Text style={[defaultStyles.bodyText, styles.butText]}>Next</Text>
			</Pressable>
		</View>
		
	);
}



