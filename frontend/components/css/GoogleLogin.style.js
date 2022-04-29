import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center'
    },
    loginButton: {
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'lexend',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 3,
        width: 160,
        height: 40,
        backgroundColor: '#FFDB47',
        borderRadius: 8
    },
    titleText: {
        fontFamily: 'lexend',
        fontWeight: 'bold',
        fontSize: 40
    }

});