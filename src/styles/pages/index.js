import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    container: {
      paddingVertical: 54,  
      backgroundColor: '#FF00EA',
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    title: {
        fontSize: 36,
        color: '#ffffff',
     
    },
    viewDialog: {
        flex: 1, 
        margin: 15, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#fff',
        width: 264,
        height: 39,
        borderRadius: 5,
        fontSize: 18,
        textAlign: 'center',
    },
    color1: {
        color: '#3b2c74'
    },
    color2: {
        color: '#ff4088'
    },

    image: {
        width: 56,
        height: 56,
        resizeMode: 'stretch',

    },
    button: {
        backgroundColor: '#7EE2BB',
        borderRadius: 10,
        width: 166,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 24,
        color: '#FF00EA'
    }

});