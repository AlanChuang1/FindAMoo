import * as React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
// import styles from './css/.style';
import styles from './css/ProfilePic.js';
import defaultStyles from './css/DefaultFonts.style';

export default function CreateUserPage() {
	const [text, onChangeText] = React.useState("");
    const [color, changeColor] = React.useState("blue");
    const [cow, changeCow] = React.useState("");

	

	return (
		<View style={[styles.container, {backgroundColor: color}]}>
            
		</View>
		
	);
}



