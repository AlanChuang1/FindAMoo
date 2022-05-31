
import * as React from 'react';
import { View } from 'react-native';
import styles from '../css/LevelBar.style';

export default function LevelBar(props) {
    const [level, setLevel] = React.useState(props.level);

    // Hardcoded way of checking for level
    // Future upkeep may want to find a better way to implement this
    const levelBarSection = () => {
        console.log(level);
        if (level == 1) {
            return (
                <View style={styles.container}>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={styles.progressLine}>
                    </View>
                    <View style={styles.progressLine}>
                    </View>            
                    <View style={styles.progressLine}>
                    </View>
                    <View style={styles.progressNoLine}>
                    </View>
                </View>
            );
        } else if (level == 2) {
            return (
                <View style={styles.container}>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={styles.progressLine}>
                    </View>            
                    <View style={styles.progressLine}>
                    </View>
                    <View style={styles.progressNoLine}>
                    </View>
                </View>
            );
        } else if (level == 3) {
            return (
                <View style={styles.container}>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>            
                    <View style={styles.progressLine}>
                    </View>
                    <View style={styles.progressNoLine}>
                    </View>
                </View>
            );
        } else if (level == 4) {            
            return (
                <View style={styles.container}>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>            
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={styles.progressNoLine}>
                    </View>
                </View>
            );
        } else if (level == 5) {            
            return (
                <View style={styles.container}>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>            
                    <View style={[styles.progressLine, styles.colorGreen]}>
                    </View>
                    <View style={[styles.progressNoLine, styles.colorGreen]}>
                    </View>
                </View>
            );
        }

        return  (
            <View style={styles.container}>
                <View style={[styles.progressLine]}>
                </View>
                <View style={styles.progressLine}>
                </View>
                <View style={styles.progressLine}>
                </View>            
                <View style={styles.progressLine}>
                </View>
                <View style={styles.progressNoLine}>
                </View>
            </View>
            
        );
    }

	return (
        <View style={{width: '100%'}}>
            { levelBarSection() }
        </View>
	);
}



