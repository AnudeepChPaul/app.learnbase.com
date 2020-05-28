import axios from 'axios'
import environment from '@/Helpers/environment'

const Api = () => {
  const devBaseUrl = 'http://localhost:5000/ssr-static-api/us-central1/api'
  const prodBaseUrl =
    'https://us-central1-ssr-static-api.cloudfunctions.net/api'
  const prodBaseHerokuUrl =
    'https://lit-citadel-65478.herokuapp.com/'

  console.log(environment)
  return axios.create({
    baseURL: environment.isProdMode() ? prodBaseHerokuUrl : prodBaseHerokuUrl
    , timeout: 10000
  })
}

export default Api
