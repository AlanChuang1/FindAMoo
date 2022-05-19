import { StyleSheet, PixelRatio } from 'react-native'; 

/*
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
},
title: {
    textAlign: 'center',
    marginVertical: 8,
},
fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
},
});

{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
}
*/


export default StyleSheet.create({
    textBox: {
        backgroundColor: "#F9F9F9",
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 10, 
        height: "52px", 
        width: "239px",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 7,

    },
    button: {
        justifyContent: 'center',
        textAlign:'center', 
        backgroundColor:"#FFDB47",
        borderRadius: 20,
        height: "6vh", 
        width: "61vw",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 7,
    },
    
    h1Text: {
        fontFamily: 'Lexend',
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 40,
        lineHeight: 50,

        color: "#000000",
    },
    h2Text: {
        fontFamily: 'Lexend',
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 30,
        lineHeight: 38,

        color: "#000000",
    },
    h3Text: {
        fontFamily: 'Lexend',
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 25,

        color: "#000000",
    },
    subtitleText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 20,
        lineHeight: 27,

        color: "#000000"
    },
    boldBodyText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */
        color: "#000000",
    },
    bodyText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 20,
        lineHeight: 26,
        /* identical to box height, or 130% */

        color: "#000000",
    },
    smallText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 22,
        color: "#000000",
    },
    buttonText: {
        fontFamily: 'Lexend',
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 20,
        /* identical to box height */

        letterSpacing: 0.03,
        textTransform: 'capitalize',

        color: "#000000",
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})