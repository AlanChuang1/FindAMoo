import { StyleSheet } from 'react-native';
import { useGoogleFonts, Lexend_700Bold, Lexend_500Medium, Lexend_400Regular } from '@expo-google-fonts/lexend';
import { useFonts } from 'expo-font';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        width: "50%",
        padding: 5,
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: "5%",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#CACACA'
    },
    searchIcon: {
        padding: 10,
        width: 19,
        height: 19,
        marginLeft: 10,
        marginRight: 5
    },
    inputTextBox: {
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        height: 32
    },
    typeSearch: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    xButton: {
        padding: 10,
        width: 24,
        height: 24,
        marginRight: 10
    },
    cancelButton: {
        fontSize: 18,
        fontWeight: "500",
        color: "#CACACA",
        marginTop: 15,
        marginLeft: 10
    },
    titleText: {
        color: '#D63F3C',
        fontWeight: "700",
        fontSize: 30,
        width: 140,
        marginTop: 57,
        textAlign: "center"
    },
    cowsCollected: {
        color: '#D63F3C',
        fontWeight: "500",
        fontSize: 18,
        marginBottom: 15,
        textAlign: "center"
    },
    topLine: {
        width: "100%",
        borderBottomColor: "#E2E2E2",
		borderBottomWidth: 4,
        marginTop: 15
    },
    sortButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#E2E2E2',
        width: 175,
        height: 34,
        padding: 5,
        marginTop: 15,
        marginLeft: 16,
        borderRadius: 10
    },
    sortIcon: {
        width: 32,
        height: 17,
        marginTop: 2
    },
    sortButtonText: {
        fontWeight: "500",
        fontSize: 16,
        marginBottom: 3
    },
    ImagesArea: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 18,
        paddingRight: 18,
        justifyContent: 'space-between',
        marginBottom: 30
    },
    cowImageArea: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 242,
        width: "48%",
        marginTop: 30,
        borderColor: "#E5E5E5",
        borderWidth: 1,
        borderRadius: 25
    },
    cowImage: {
        width: "100%",
        height: "60%",
    },
    cowNumber: {
        fontSize: 18,
        fontWeight: "700",
        top: 15,
        marginBottom: 20
    },
    cowName: {
       fontSize: 18,
       fontWeight: "700",
       paddingBottom: 20
    },
    bottomLine: {
        width: "100%",
        borderBottomColor: "#E2E2E2",
		borderBottomWidth: 2
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        height: 87,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        bottom: 0
    },
    icons: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    barnIcon: {
        width: 50,
        height: 50,
        marginTop: 10
    },
    barnIconText: {
        fontWeight: "500",
        fontSize: 14,
        marginBottom: 20
    },
    mapIcon: {
        width: 40,
        height: 40,
        marginTop: 13,
        marginBottom: 5
    },
    otherIconText: {
        color: "#999999",
        fontWeight: "500",
        fontSize: 14,
        marginBottom: 20
    }
});