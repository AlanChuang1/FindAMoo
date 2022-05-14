import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        height: '7vw',
        width: '70vw',
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden'
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
