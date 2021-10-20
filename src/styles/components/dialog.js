import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    container: {  
      width: 338,
      height: 326,
      backgroundColor: '#FFA65E',
      borderRadius: 5,      
      alignItems: 'center',
      justifyContent: 'space-evenly',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,      
    },
    image: {
        width: 36,
        height: 64,
        resizeMode: 'stretch',

    },
    title: {
        fontSize: 36,
        color: '#fff'
    },
    subTitle: {
        fontSize: 18,
        color: '#fff'
    },
    button: {
        width: 98,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F24E1E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 24

    }

});