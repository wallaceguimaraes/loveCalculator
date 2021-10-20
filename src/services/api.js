import axios from 'axios';
import React from "react";

 const calculator = (obj) => {
 
  const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {sname: obj.sname, fname: obj.fname},
    headers: {
      'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
      'x-rapidapi-key': 'b38fc022c6msha4bc9f5d5bb454fp13fb14jsn3050249b747b'
    }
  };
  
  axios.request(options).then(function (response) {
  
  return response;
  
    }).catch(function (error) {
      alert(error);
  });  

}

export default {
  calculator
};