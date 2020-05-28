import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'next/app'
import MainLayout from '@/Layouts/Main/MainLayout'
import api from '@/Api/Api'

export function redirectUser(ctx, location) {
  if (ctx.res && typeof ctx.res.writeHead === "function") {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  }
}

export default class MyApp extends App {
    static async getInitialProps({Component, router, ctx}) {
        const res = await api().get('/getAppProperties');
        const data = JSON.parse(JSON.stringify(res.data));
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        pageProps.appProps = data;

        if (ctx.pathname === "/" || ctx.pathname === "/_error") {
            redirectUser(ctx, "/home");
            return {pageProps};
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props;

        return (
            <MainLayout {...pageProps.appProps}>
                <Component {...pageProps}></Component>
            </MainLayout>
        )
    }
}
