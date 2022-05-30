import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: "0%",
        marginBottom: "100%",
        resizeMode: 'contain',
        width: "100%",
        height: "100%"
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
        backgroundColor: '#D3D3D3',
        borderRadius: 8,
        position: 'relative',
        bottom: 0,
        paddingHorizontal: 12,
        top: -200,
        fontWeight: 'bold'
        
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
        top: -500,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1
        fontWeight: 'bold'
       
    },
    inputTextBox: {
        backgroundColor: "#F9F9F9",
        //padding: 20,
        top: -320,
        alignItems: 'center',
        textAlign: 'center',
        //paddingHorizontal: 50,
        justifyContent: 'center',
        height: 40,
        width: 150,
        borderRadius: 5,
        fontWeight: 'bold'
        
    },
    
    titleText: {
        marginBottom: 100,
        width: 200,
        textAlign: "center"
    },
    CowCaught : {
        backgroundColor: "#FFFFFF",
        width: "70%",
        height: 100,
        textAlign: "center",
        top: -100

    },

    CowImage : {
        resizeMode: 'cover', 
        width: '30%', 
        height: '30%',
        backgroundColor: "blue" 
    
    }
});
