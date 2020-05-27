import axios from 'axios'
import environment from '@/Helpers/environment'

const Api = () => {
  const devBaseUrl = 'http://localhost:5000/ssr-static-api/us-central1/api'
  const prodBaseUrl =
    'https://us-central1-ssr-static-api.cloudfunctions.net/api'

  console.log(environment)
  return axios.create({
    baseURL: environment.isProdMode() ? devBaseUrl : prodBaseUrl
    , timeout: 10000
  })
}

export default Api
