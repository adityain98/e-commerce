import axios from 'axios'
const token = localStorage.getItem('token')
const axiosConnect = axios.create({
  // baseURL: 'http://umonk-server.indraaditya.online',
  baseURL: 'http://localhost:3000',
  // headers: {
  //   access_token: localStorage.getItem('token')
  // }
})

export default axiosConnect