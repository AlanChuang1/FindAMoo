import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    paginationContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
    },
    paginationDots: {
        height: 16,
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
    },
    buttonContainer: {
        alignSelf:'center',
        justifyContent:'center',
    },
/*
    button: {
        flex: 1,
        paddingVertical: 20,
        marginHorizontal: 8,
        borderRadius: 24,
        backgroundColor: '#1cb278',
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
*/
})