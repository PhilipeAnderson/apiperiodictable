import axios from 'axios';

export const periodic = axios.create({
  baseURL: 'https://apiperiodictable.herokuapp.com/'
})

export const github = axios.create({
  baseURL: 'https://api.github.com'
})