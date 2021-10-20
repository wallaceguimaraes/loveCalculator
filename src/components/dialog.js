import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/components/dialog';

export default function Dialog(props) {
 return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/icons/icons8-temperatura-48.png')}/>
        <Text style={styles.title}>{props.percent}%</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
        <TouchableOpacity style={styles.button} onPress={props.close} >
            <Text style={styles.textButton}>Ok</Text>
        </TouchableOpacity>

    </View>

    );
}