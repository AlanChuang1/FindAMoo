import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        height: 7,
        width: 70,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden'
    },
    progressLine: {
        flex: 1,
        width: 10,
        backgroundColor: '#DCDCDC',
        borderRightWidth: 5,
        borderRightColor: '#808080',
        borderStyle: 'solid'
    }

});
