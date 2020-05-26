import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import api from '../api'

class Modules extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.active) return null

    return {
      active:
        props.modules && props.modules.list ? props.modules.list[0].text : null
    }
  }

  getModuleFromSelection() {
    if (!this.props.modules) {
      return {}
    }

    return (
      this.props.modules.list.filter(
        (module) => module.text === this.state.active
      )[0] || {}
    )
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={5} md={4} sm={4} className='pl-0'>
            <Card>
              <ListGroup as='ul' variant='flush'>
                {this.props.modules &&
                  this.props.modules.list &&
                  this.props.modules.list.map((module, index) => (
                    <ListGroup.Item
                      style={{ cursor: 'pointer' }}
                      active={this.state.active === module.text}
                      as='div'
                      key={index}
                      className='text-left'
                      onClick={(el) => this.setState({ active: module.text })}>
                      {module.text}
                    </ListGroup.Item>
                    // </Link>
                  ))}
              </ListGroup>
            </Card>
          </Col>
          <Col xs={7} md={8} className='pr-0'>
            Selected {this.getModuleFromSelection().text || 'None'}
          </Col>
        </Row>
      </Container>
    )
  }
}

export async function getServerSideProps() {
  const res = await api().get('/modules/list')
  const data = JSON.parse(JSON.stringify(res.data))

  return {
    props: {
      modules: data.modules
    }
  }
}

export default withRouter(Modules)
