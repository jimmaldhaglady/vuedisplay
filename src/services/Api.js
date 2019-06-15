import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/'

export default() => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

