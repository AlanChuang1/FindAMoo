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
        borderWidth: "1px",
        borderColor: "#CACACA",
        borderRadius: "10px", 
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

        placeholderTextColor: "#B0B0B0",
    },
    button: {
        justifyContent: 'center',
        backgroundColor:"#FFDB47",
        borderRadius:"20px",
        height: "47px", 
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
    
    h1Text: {
        fontFamily: 'Lexend',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: "50px",

        color: "#000000",
    },
    h2Text: {
        fontFamily: 'Lexend',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: "38px",

        color: "#000000",
    },
    h3Text: {
        fontFamily: 'Lexend',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "25px",

        color: "#000000",
    },
    subtitleText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "27px",

        color: "#000000"
    },
    boldBodyText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "25px",
        /* identical to box height */
        color: "#000000",
    },
    bodyText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "26px",
        /* identical to box height, or 130% */

        color: "#000000",
    },
    smallText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "22px",
        color: "#000000",
    },
    buttonText: {
        fontFamily: 'Lexend',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "20px",
        /* identical to box height */

        letterSpacing: "0.03em",
        textTransform: 'capitalize',

        color: "#000000",
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})