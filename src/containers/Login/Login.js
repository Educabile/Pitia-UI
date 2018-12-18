import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Card, Button } from 'react-materialize'
import { Icon } from '@mdi/react'
import { mdiAccount, mdiLogin } from '@mdi/js'
import Style from './Login.module.css'
import Avatar from 'react-avatar'
class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <Row className={Style.Login}>
        <Col>
          <Card className="rounded hoverable center">
            <Avatar
              value={<Icon path={mdiAccount} size={3} color="white" />}
              color="#1565C0"
              name={this.state.email.split('@')[0].replace(/\./gi, ' ')}
              email={this.state.email}
              round
              size={100}
            />
            <form
              onSubmit={e => {
                e.preventDefault()

                this.props.logIn()
              }}>
              <Row>
                <Input
                  s={12}
                  label="Email"
                  onChange={({ target: { value: email } }) =>
                    this.setState({
                      email,
                    })
                  }
                  type="email"
                  value={this.state.email}
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
                    disabled={!(this.state.email.length > 0 && this.state.password.length > 0)}
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
