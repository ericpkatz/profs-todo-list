import axios from 'axios'

axios.defaults.withCredentials = true // just in case someone uses `axios` directly

const todosAPI = axios.create({
    baseURL: 'https://fullstack-todo-api.herokuapp.com/api/',
    withCredentials: true
})

export default todosAPI
