import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    piccontainer: {
        height: 120,
        width: 120,
        borderRadius: 120,
        justifyContent: 'center',
        alignContent: 'center'
    },
    titleText: {
        marginTop: 50,
        marginBottom: 27
    },
    bgPalleteContainer: {
        width: 100
    },
    bgPallete: {
        width: '80%'
    },
    palleteBut: {
        height: 50,
        width: 50,
        borderRadius: 50,
        margin: 3
    },
    row: {
        flexDirection: 'row',
        flex: 1, 
        // width: '70%',
        justifyContent: 'space-between'
    },
    cowImg: {
        // backgroundColor: 'pink',
        width: '100%',
        height: 100,
        resizeMode: 'contain'
    },
    changePalleteSection: {
        alignItems: 'center',
        width: '80%',
        marginTop: 30 
    },
    pageContainer: {
        flex: 1,
        // justifyContent: 'center'
        alignItems: 'center'
    },
    cowCollection: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        width: "90%",
        margin: 50
    },
    cowImages: {
        width: 150, 
        height: 200,
        resizeMode: 'contain'
    },
    cowImagesContainer: {
        borderWidth: 2,
        borderColor: '#E5E5E5',
        borderRadius: 25, // not working for some reason,
        marginTop: 10,
        marginBottom: 10
    }
});
