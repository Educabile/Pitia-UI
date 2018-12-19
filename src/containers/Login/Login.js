import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Card, Button } from 'react-materialize'
import { Icon } from '@mdi/react'
import { mdiAccount, mdiLogin } from '@mdi/js'
import Style from './Login.module.css'
import Avatar from 'react-avatar'
import { withNamespaces } from 'react-i18next'
class Login extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password } = this.state
    const { t, logIn } = this.props

    return this.props.loggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <Row className={Style.Login}>
        <Col>
          <Card className="rounded hoverable center">
            <Avatar
              className="blueGradient"
              color="#1565C0"
              value={<Icon path={mdiAccount} size={3} color="white" />}
              name={email.split('@')[0].replace(/\./gi, ' ')}
              email={email}
              round
              size={100}
            />
            <form
              onSubmit={e => {
                e.preventDefault()

                logIn()
              }}>
              <Row>
                <Input
                  s={12}
                  label={t('email')}
                  onChange={({ target: { value: email } }) =>
                    this.setState({
                      email,
                    })
                  }
                  type="email"
                  value={email}
                  validate
                  required
                />
                <Input
                  type="password"
                  label={t('password')}
                  s={12}
                  onChange={({ target: { value: password } }) =>
                    this.setState({
                      password,
                    })
                  }
                  value={password}
                  validate
                  required
                />
                <div className="center">
                  <Button
                    disabled={!(email.length > 0 && password.length > 0)}
                    className="blueGradient hoverable white-text"
                    large
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
                      {t('login')}
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

export default withNamespaces()(Login)
