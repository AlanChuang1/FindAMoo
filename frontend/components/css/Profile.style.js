import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: 'red'
    },
    topBar: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    gearSetting: {
        height: 30,
        width: 30
    },
    progressLine: {
        flex: 1,
        width: 10,
        backgroundColor: '#DCDCDC',
        borderRightWidth: 5,
        borderRightColor: '#808080',
        borderStyle: 'solid'
    },
    unlockedCows: {
        width: 70,
        backgroundColor: 'blue',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 10
    },
    lockImages: {
        height: 50,
        width: 50,
        backgroundColor: "blue"
    },
    descriptionText: { 
        backgroundColor: "yellow",
        width: '50%'
        
    },
    levelContentContainer: {
        alignItems: 'center'
    }

});
