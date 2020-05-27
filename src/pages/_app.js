import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'next/app'
import MainLayout from '@/Layouts/Main/MainLayout'
import api from '@/Api/Api'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const res = await api().get('/getAppProperties')
    const data = JSON.parse(JSON.stringify(res.data))

    return {
      pageProps: {
        appProps: data
      }
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout {...pageProps.appProps}>
        <Component {...pageProps}></Component>
      </MainLayout>
    )
  }
}
