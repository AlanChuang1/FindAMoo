import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    loginButton: {
        marginTop: 10,
        justifyContent: 'center',
        textAlign: 'center',
        //fontFamily: 'lexend',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 3,
        width: "50%",
        height: 40,
        backgroundColor: '#FFDB47',
        borderRadius: 18
    },    
    loginText: {
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.03,
        textTransform: 'capitalize',
        color: "#000000",
    },
    titleText: {
        marginTop: 30,
        marginBottom: 30,
        //fontFamily: 'lexend',
        fontWeight: 'bold',
        fontSize: 40
    },
    cowImage: {
        width: 300,
        height: 300
    },
    imgContainer: {
        marginTop: '35%'
    }

});