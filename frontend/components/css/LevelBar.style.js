import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        height: '7vw',
        width: '70vw',
        flexDirection: 'row',
        borderRadius: '10px',
        overflow: 'hidden'
    },
    progressLine: {
        flex: 1,
        width: '10px',
        backgroundColor: '#DCDCDC',
        borderRightWidth: '5px',
        borderRightColor: '#808080',
        borderStyle: 'solid'
    }

});
