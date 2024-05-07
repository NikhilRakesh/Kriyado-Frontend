import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.136.141:8000/api',
  headers: {
    'Content-Type': 'application/json',

  },
});

export default api;


export const get_api = (token = null) => {

  return axios.create({
    baseURL: 'http://192.168.136.141:8000/api',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Token ${token ? token : null}`
    }
  })
}

export const get_api_form = (token = null) => {  

  return axios.create({
    baseURL: 'http://192.168.136.141:8000/api',
    headers: {
      'Content-Type': 'multipart/form-data',
      "Authorization": `Token ${token ? token : null}`
    }
  })
}
export const get_api_form2 = () => {

  return axios.create({
    baseURL: 'http://192.168.136.141:8000/api',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const get_api_form_register = () => {

  return axios.create({
    baseURL: 'http://192.168.136.141:8000/api',
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
}




