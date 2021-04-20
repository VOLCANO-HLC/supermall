import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    // console.log("err");
    return config
  }, err => {
    console.log("err");
  })
  instance.interceptors.response.use(res => {
    // console.log("err");
    return res.data
  }, err => {
    console.log("er");
  })
  return instance(config)
}