import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        position:'absolute',
        alignItems: 'center', 
        backgroundColor: 'white',
        height:"100%",
        width:"100%",
    },
    inner_container: { //326 x 547 (w x h)
        alignItems: 'center',
        height: "65%", 
        width: "84%", 
        marginTop: "13%",
    },
    image: {
        //height: 231, // 42%
        height: '42%',
        //width: 219, // 67%
        width: '67%', 
    },
    text_container: {
        marginTop: '10%',
        alignItems: 'center', 
    },
    text: {
        marginTop: '8%',
        textAlign:'center', 
    }
});
