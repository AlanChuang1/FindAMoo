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
        marginTop: 120,
        justifyContent: 'center',
        textAlign: 'center',
        //fontFamily: 'lexend',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 3,
        width: "40%",
        height: 40,
        backgroundColor: '#FFDB47',
        borderRadius: 8
    },
    inputTextBox: {
        backgroundColor: "#F9F9F9",
        color: '#000000',
        padding: 2,
        paddingLeft: 15,
        paddingRight: 15,
        width: "60%",
        flex: 1,
        borderRadius: 5,
        fontSize: 18,
        fontWeight: "500"
    },
    titleText: {
        marginBottom: 20,
        width: "50%",
        textAlign: "center"
    },
    textInputContainer: {
        width: '90%',
        height: 50,
        alignItems: 'center'
    },
    butText: {
        textAlign: 'center'
    }
});
