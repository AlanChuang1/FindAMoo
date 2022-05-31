import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        height: 25,
        width: '70%',
        flexDirection: 'row',
        borderRadius: 15,
        overflow: 'hidden'
    },
    progressLine: {
        flex: 1,
        width: 10,
        backgroundColor: '#DCDCDC',
        borderRightWidth: 5,
        borderRightColor: '#808080',
        borderStyle: 'solid'
    },
    progressNoLine: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
    colorGreen: {
        backgroundColor: '#008280'
    }
});
