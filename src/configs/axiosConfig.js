import axios from 'axios';



export const instance = axios.create({
    baseURL: 'https://api.weekday.technology/adhoc/getSampleJdJSON',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });