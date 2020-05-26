import axios from 'axios'

const api = () => {
  const devBaseUrl = 'http://localhost:5000/ssr-static-api/us-central1/api'
  const prodBaseUrl =
    'https://us-central1-ssr-static-api.cloudfunctions.net/api'

  return axios.create({
    baseURL: process.env.NODE_ENV !== 'production' ? devBaseUrl : prodBaseUrl
    , timeout: 10000
  })
}

export default api
