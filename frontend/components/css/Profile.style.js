import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    topBar: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    gearSetting: {
        height: '30px',
        width: '30px'
    },
    progressLine: {
        flex: 1,
        width: '10px',
        backgroundColor: '#DCDCDC',
        borderRightWidth: 5,
        borderRightColor: '#808080',
        borderStyle: 'solid'
    },
    unlockedCows: {
        height: '100px',
        width: '70vw',
        backgroundColor: 'red',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '10px'
    },
    lockImages: {
        height: '50px',
        width: '50px',
        backgroundColor: "blue"
    }
});
