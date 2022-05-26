import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: "0%",
        marginBottom: "100%"
    },
    barnButton: {
        marginTop: 120,
        justifyContent: 'center',
        textAlign: 'center',
        //fontFamily: 'lexend',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 3,
        width: 100,
        height: 40,
        backgroundColor: 'grey',
        borderRadius: 8,
        position: 'absolute',
        bottom: 0
    },

    shareButton: {
        marginTop: 120,
        justifyContent: 'center',
        textAlign: 'center',
        //fontFamily: 'lexend',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 3,
        width: 100,
        height: 40,
        backgroundColor: '#FFDB47', 
        borderRadius: 8,
        flex: 1
       
    },
    inputTextBox: {
        backgroundColor: "#F9F9F9",
        padding: 20,
        height: 40,
        width: 150,
        borderRadius: 5
    },
    titleText: {
        marginBottom: 20,
        width: 200,
        textAlign: "center"
    },
    CowCaught : {
        backgroundColor: "#FFFFFF",
        width: "70%",
        height: 100,
        textAlign: "center"

    },

    CowImage : {
        resizeMode: 'cover', 
        width: '30%', 
        height: '30%',
        backgroundColor: "blue" 
    
    }
});
