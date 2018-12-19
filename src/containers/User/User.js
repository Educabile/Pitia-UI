import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Row, Col, Card } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiAccountCardDetails, mdiTranslate, mdiAt } from '@mdi/js'
import Avatar from 'react-avatar'
import 'react-toastify/dist/ReactToastify.css'
import { SuccessToast } from 'components/Toast'
import { withNamespaces } from 'react-i18next'
class User extends Component {
  state = {
    email: this.props.email,
    username: this.props.username,
  }

  render() {
    const { email, username } = this.state
    const { t, updateEmail, updateUsername } = this.props

    return (
      <div
        className="grey lighten-4"
        style={{ minHeight: 'calc(100vh - 56px - 48px)', margin: '0 -0.75rem' }}>
        <Row style={{ paddingTop: '15vh', marginBottom: 0 }}>
          <Col s={12} m={6} className="push-m3">
            <Card className="rounded">
              <Row>
                <Col s={12} className="center">
                  <Avatar className="blueGradient" name={username} email={email} round />
                </Col>

                <Col s={8} className="push-s2">
                  <div>
                    <form
                      onSubmit={e => {
                        e.preventDefault()
                      }}>
                      <Row>
                        <Input
                          type="email"
                          s={12}
                          label={t('email')}
                          validate
                          required
                          value={email}
                          onChange={({ target: { value: email } }) => {
                            this.setState({
                              email,
                            })
                          }}>
                          <Icon path={mdiAt} size={1.175} color="#1565c0" />
                        </Input>
                        <Input
                          s={12}
                          label={t('Nome e Cognome')}
                          validate
                          required
                          value={username}
                          onChange={({ target: { value: username } }) => {
                            this.setState({ username })
                          }}>
                          <Icon path={mdiAccountCardDetails} size={1.175} color="#1565c0" />
                        </Input>
                        <Input s={12} label={t('lingua')} validate value="Italiano" disabled>
                          <Icon path={mdiTranslate} size={1.175} color="#1565c0" />
                        </Input>
                      </Row>
                    </form>

                    <div className="center">
                      <Button
                        large
                        onClick={() => {
                          updateEmail(email)
                          updateUsername(username)

                          SuccessToast({
                            content: t('informazioniAggiornate'),
                          })
                        }}
                        className="blueGradient hoverable white-text"
                        waves
                        style={{
                          display: 'inline-flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <span>{t('aggiornaInformazioni')}</span>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

User.propTypes = {
  t: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateUsername: PropTypes.isRequired,
}

export default withNamespaces(['notifications'])(User)
