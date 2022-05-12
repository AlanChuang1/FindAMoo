
import * as React from 'react';
import { View } from 'react-native';
import styles from '../css/LevelBar.style';

export default function LevelBar() {
    // let levelCap = 4;
    // let progressLines = [];
    // async function renderProgressBar(level) {
    //     for (let i = 0; i < levelCap; i++) {
    //         if (level > i) {
    //             progressLines.push()
    //         } else {

    //         }
    //     }
    // }

    // renderProgressBar();

	return (
		<View style={styles.container}>
            <View style={styles.progressLine}>
            </View>
            <View style={styles.progressLine}>
            </View>
            <View style={styles.progressLine}>
            </View>
            <View style={styles.progressLine}>
            </View>
		</View>
		
	);
}



