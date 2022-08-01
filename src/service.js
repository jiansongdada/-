import axios from 'axios'
import {getToken} from '@/utils/setToken.js'
import { Message } from 'element-ui'
const service = axios.create({
    baseURL: '/api', //  baseURL会自动加载在请求地址上
    time: 3000   //指定请求超时毫秒数
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    //在请求之前做些什么（获取并设置token）
    config.headers['token'] = getToken('token')
    return  config
}, (error) =>{
    // 对请求错误做些什么
    return Promise.reject(error)
})


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let {status,message} = response.data
    if(status !==200 ){
        Message({message: message || 'error', type: 'warning'})
    }
    return response;
  },  (error) =>{
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default service