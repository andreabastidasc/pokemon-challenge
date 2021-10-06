import axios from 'axios'

const axiosApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
})

const axiosLogin = axios.create({
    baseURL: 'https://reqres.in/api',
})


export {axiosApi, axiosLogin}