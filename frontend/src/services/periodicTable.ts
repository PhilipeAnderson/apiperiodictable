import axios from 'axios';

export const periodic = axios.create({
  baseURL: 'https://apiperiodictable.herokuapp.com/'
})