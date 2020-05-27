import api from '@/Api/Api'

function Home() {
  return (
    <div className='container'>
      <span>Dashboard</span>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await api().get('/getAppProperties')
  const appProps = JSON.parse(JSON.stringify(res.data))

  return {
    props: {
      appProps
    }
  }
}

export default Home
