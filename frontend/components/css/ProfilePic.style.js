import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        height: 75,
        width: 75,
        borderRadius: 75
    },
    bgPalleteContainer: {
        width: 100,
        backgroundColor: 'pink',
    },
    bgPallete: {
        width: '80%',
        backgroundColor: 'red'
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
        justifyContent: 'space-between',
        backgroundColor: 'yellow'
    },
    cowImg: {
        // backgroundColor: 'pink',
        width: '100%',
        height: 70,
        resizeMode: 'contain'
    },
    changePalleteSection: {
        alignItems: 'center',
        backgroundColor: 'pink',
        width: '80%'    
    },
    pageContainer: {
        flex: 1,
        // justifyContent: 'center'
        alignItems: 'center'
    }

    
    
});
