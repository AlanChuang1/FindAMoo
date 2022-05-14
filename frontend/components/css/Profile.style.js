import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
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
    }

});
