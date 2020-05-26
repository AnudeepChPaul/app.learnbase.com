import React from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import api from '../../api'

class Modules extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>
            {this.props.moduleProps ? this.props.moduleProps.title : ''}
          </title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='container'>
          {this.props.moduleProps
            ? this.props.moduleProps.title
            : this.props.router.query.moduleId}
        </div>
      </>
    )
  }
}

export async function getStaticProps(query) {
  const res = await api().get('/modules/' + query.params.moduleId)
  const data = JSON.parse(JSON.stringify(res.data))

  return {
    props: {
      moduleProps: data
    }
  }
}

export async function getStaticPaths() {
  const res = await api().get('/modules/list')
  const data = JSON.parse(JSON.stringify(res.data))

  const paths = data.modules.list.map((module) => data.modules.baseUrl + module.url)

  return {
    paths
    , fallback: false
  }
}

// export async function getServerSideProps() {
//   const res = await api().get('/modules/' + query.params.moduleId)
//   const data = JSON.parse(JSON.stringify(res.data))

//   return {
//     props: {
//       moduleProps: data
//     }
//   }
// }

export default withRouter(Modules)
