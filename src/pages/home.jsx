import getAppProperties from '@/Api/GetAppProperties'

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
