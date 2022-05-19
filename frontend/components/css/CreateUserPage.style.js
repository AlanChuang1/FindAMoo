import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    nextButton: {
        marginTop: "120px",
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'lexend',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 3,
        width: 40,
        height: 40,
        backgroundColor: '#FFDB47',
        borderRadius: 8
    },
    inputTextBox: {
        backgroundColor: "#F9F9F9",
        padding: 20,
        height: 40,
        width: 60,
        borderRadius: 5
    },
    titleText: {
        marginBottom: 20,
        width: 50,
        textAlign: "center"
    }
});
