import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import styles from '../styles/pages/index';
import Dialog from '../components/dialog';
import api from '../services/api';
import axios from "axios";


export default function index() {

    const [ visibleModal, setVisibleModal ] = useState(true)
    const [ message, setMessage] = useState('')
    const [ percent, setPercent] = useState('0%')
    const [ input1, setInput1] = useState('')
    const [ input2, setInput2] = useState('')
    const [ subTitle, setsubTitle] = useState('Can choose someone better')
  

    function close(){
        setVisibleModal(false);
    }


    useEffect(() => {

      
    })


    async function calculator(){


        const options = {
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: {sname: input1, fname: input2},
            headers: {
              'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
              'x-rapidapi-key': 'b38fc022c6msha4bc9f5d5bb454fp13fb14jsn3050249b747b'
            }
          };
          
         await axios.request(options).then(function (response) {
            setPercent(response.data.percentage) 
            setsubTitle(response.data.result)                                     
            }).catch(function (error) {
              alert(error);
          });  

  

     

        setVisibleModal(true);

    }

 return (
<View style={styles.container}>
    <Text style={styles.title}>Vai que cola?</Text>
    <TextInput onChangeText={(text) => setInput1(text)} style={[styles.input,styles.color1]}></TextInput>
    <Modal animationType='slide' transparent={true} visible={visibleModal}>
             <View style={styles.viewDialog}>
              <Dialog percent={percent} subTitle={subTitle} close={() => close()}></Dialog>
             </View>
    </Modal>
    <Image style={styles.image} source={require('../assets/icons/love-letter.png')}/>
    <TextInput onChangeText={(text) => setInput2(text)} style={[styles.input,styles.color2]}></TextInput>
    <TouchableOpacity style={styles.button} onPress={calculator} >
        <Text style={styles.textButton}>Sorte!</Text>
    </TouchableOpacity>
</View>
  
  
   );
}