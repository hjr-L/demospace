import axios from 'axios'

import AxiosLoading from './loading'
const loading = new AxiosLoading()

const service = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000,
    headers: {'content-type':'application/json,charset=utf-8'}
})

service.interceptors.request.use(
    (config) => {
        if(localStorage.getItem('token')){
            config.headers['Authorization'] = localStorage.getItem('token')
        }
        if(config.loading){
            loading.addLoading()
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        loading.closeLoading()
        const data = response.data;
        if (data.code === 200) {
            return data;
        } else {
            return Promise.reject(data);
        }
    },
    (error) => {
        console.log(error);
        loading.closeLoading()
        return Promise.reject(error)
    }
)

export default service