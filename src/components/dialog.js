import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/components/dialog';

export default function Dialog(props) {
 return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/icons/dialogBack.png')} style={styles.imageBackground}> 

        <Image style={styles.image} source={require('../assets/icons/icons8-temperatura-48.png')}/>
        <Text style={styles.title}>{props.percent}%</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
        <TouchableOpacity style={styles.button} onPress={props.close} >
            <Text style={styles.textButton}>Ok</Text>
        </TouchableOpacity>
    </ImageBackground>
    </View>

    );
}