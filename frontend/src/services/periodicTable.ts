import axios from 'axios';

export const periodic = axios.create({
  baseURL: 'https://apiperiodictable.herokuapp.com/'
})

export const github = axios.create({
  baseURL: 'https://api.github.com'
})

export const db = axios.create({
  baseURL: 'http://localhost:3000/'
})