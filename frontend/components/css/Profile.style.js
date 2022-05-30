import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: 'red'
    },
    topBar: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginBottom: 25,
        borderColor: '#DCDCDC',
        borderTopWidth: 5
    },
    gearSetting: {
        position: 'absolute',
        top: '10%',
        left: '90%',
        height: 30,
        width: 30
    },
    progressLine: {
        flex: 1,
        width: 10,
        backgroundColor: '#DCDCDC',
        borderRightWidth: 5,
        borderRightColor: '#808080',
        borderStyle: 'solid'
    },
    unlockedCows: {
        width: '80%',
        // alignItems: 'center',
        flexDirection: 'column',
        margin: 10
    },
    lockImages: {
        height: 50,
        width: 50,
        backgroundColor: "blue"
    },
    descriptionText: { 
        backgroundColor: "yellow",
        width: '55%',
        alignItems: 'center'
    },
    levelContentContainer: {
        alignItems: 'center'
    },
    levelDescriptionTitle: {
        flex: 1
    },
    levelDescriptionHeader: {
        flex: 1,
        textAlign: 'center',
    },
    levelName: {
        // alignSelf: 'flex-start',
        // margin: 7
    },
    unlockedImgContainer: {
        flex: 1,
        height: 100,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        borderColor: '#808080',
        borderWidth: 1,
        borderRadius: 10,
    },
    levelimgcontainer: {
        flex: 1,
        height: 50,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'yellow'
    },
    cowImagePNG: {
        backgroundColor: 'pink',
        width: '100%',
        height: 50,
        resizeMode: 'contain'
    }
});
