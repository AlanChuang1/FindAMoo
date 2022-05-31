import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    topBar: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
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
        flexDirection: 'column',
        margin: 10
    },
    lockImages: {
        height: 50,
        width: 50
    },
    descriptionText: { 
        width: '55%',
        alignItems: 'center',
        margin: 15
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
        alignItems: 'center'
    },
    cowImagePNG: {
        width: '100%',
        height: 50,
        resizeMode: 'contain'
    }
});
