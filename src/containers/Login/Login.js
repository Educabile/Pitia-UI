import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Card, Button } from 'react-materialize'
import { Icon } from '@mdi/react'
import { mdiAccount, mdiLogin } from '@mdi/js'
import Style from './Login.module.css'
class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <Row className={Style.Login}>
        <Col>
          <Card className="rounded hoverable">
            <Icon path={mdiAccount} size={5} color="#1565c0" className="center-block" />
            <form
              onSubmit={e => {
                e.preventDefault()

                if (this.state.username === 'educabile') {
                  this.props.logIn()
                }
              }}>
              <Row>
                <Input
                  s={12}
                  label="Username"
                  onChange={({ target: { value: username } }) =>
                    this.setState({
                      username,
                    })
                  }
                  value={this.state.username}
                  validate
                  required
                />
                <Input
                  type="password"
                  label="Password"
                  s={12}
                  onChange={({ target: { value: password } }) =>
                    this.setState({
                      password,
                    })
                  }
                  value={this.state.password}
                  validate
                  required
                />
                <div className="center">
                  <Button
                    disabled={!(this.state.username.length > 0 && this.state.password.length > 0)}
                    className="blueGradient hoverable white-text"
                    waves
                    style={{
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <span
                      style={{
                        marginRight: '1em',
                      }}>
                      Login
                    </span>
                    <Icon path={mdiLogin} size={1} color="white" />
                  </Button>
                </div>
              </Row>
            </form>
          </Card>
        </Col>
      </Row>
    )
  }
}

Login.propTypes = {}

export default Login
