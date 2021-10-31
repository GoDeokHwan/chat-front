import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8180'

axios.interceptors.request.use(config => {
    if (!config.url.includes('/auth/login')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config
})

axios.interceptors.response.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

export default axios