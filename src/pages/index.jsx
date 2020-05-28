import api from '@/Api/Api'
import getAppProperties from "@/Api/GetAppProperties";

function Home() {
  return (
    <div className='container'>
      <span>Dashboard</span>
    </div>
  )
}

export async function getServerSideProps() {
  const appProps = await getAppProperties()

  return {
    props: {
      appProps
    }
  }
}

export default Home
