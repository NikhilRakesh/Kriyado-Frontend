import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.137.208:8000',
  headers: {
    'Content-Type': 'application/json',

  },
});

export default api;


export const get_api = (token = null) => {

  return axios.create({
    baseURL: 'http://192.168.137.208:8000',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Token ${token ? token : null}`
    }
  })
}




