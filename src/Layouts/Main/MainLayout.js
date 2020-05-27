import Head from 'next/head'
import Header from '../../components/header/Header'

class MainLayout extends React.Component {
  render() {
    return (
      <main>
        <div className='main_layout_wrapper'>
          <div className='main_layout_header'>
            <Header {...this.props}></Header>
          </div>
          <div className='main_layout_body'>{this.props.children}</div>
        </div>
      </main>
    )
  }
}

export default MainLayout
