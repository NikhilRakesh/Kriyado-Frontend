import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.7:8000',
  headers: {
    'Content-Type': 'application/json',

  },
});

export default api;


export const get_api = (token = null) => {

  return axios.create({
    baseURL: 'http://192.168.1.7:8000',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Token ${token ? token : null}`
    }
  })
}

export const get_api_form = (token = null) => {

  return axios.create({
    baseURL: 'http://192.168.1.7:8000',
    headers: {
      'Content-Type': 'multipart/form-data',
      "Authorization": `Token ${token ? token : null}`
    }
  })
}

export const get_api_form_register = () => {

  return axios.create({
    baseURL: 'http://192.168.1.7:8000',
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
}




