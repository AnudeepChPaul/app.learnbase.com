import api from '../api'
import getAppProperties from '@/api/getAppProperties'

function Home() {
  return (
    <div className='container'>
      <span>Dashboard</span>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await getAppProperties();

  return {
    props: {
      appProps: res
    }
  }
}

export default Home
