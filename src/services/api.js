import axios from 'axios';

const api = axios.create({
    method: 'GET',
    baseURL: 'https://love-calculator.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
        'x-rapidapi-key': 'SIGN-UP-FOR-KEY'}

});



/* params: {sname: 'Alice', fname: 'John'},
  headers: {
    'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
  } */

export default api;