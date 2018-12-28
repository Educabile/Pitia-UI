import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Card } from 'react-materialize'
import Button from 'components/Button'
import { Icon } from '@mdi/react'
import { mdiAccount, mdiLogin } from '@mdi/js'
import Style from './Login.module.css'
import Avatar from 'react-avatar'
import { withNamespaces } from 'react-i18next'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { auth } from 'actions/auth'

class Login extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      auth: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
    }).isRequired,
    login: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password } = this.state
    const {
      t,
      login,
      auth: { auth, error },
    } = this.props

    return auth ? (
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

                login(email, password)
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
                  autoComplete="email"
                  value={email}
                  validate
                  required
                />
                <Input
                  label={t('password')}
                  s={12}
                  onChange={({ target: { value: password } }) =>
                    this.setState({
                      password,
                    })
                  }
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  validate
                  required
                />
                {error && <span className="red-text">{error}</span>}
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

const mapStateToProps = ({ auth }) => ({
  auth,
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(auth(email, password)),
})

export default compose(
  withNamespaces(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Login)
