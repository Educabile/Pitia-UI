import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Row, Col, Card } from 'react-materialize'
import Button from 'components/Button/Button'
import Select from 'components/Select/Select'
import Icon from '@mdi/react'
import { mdiAccountCardDetails, mdiTranslate, mdiAt } from '@mdi/js'
import Avatar from 'react-avatar'
import 'react-toastify/dist/ReactToastify.css'
import { SuccessToast } from 'components/Toast'
import { withNamespaces } from 'react-i18next'
import i18n from '../../i18n'
class User extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    updateEmail: PropTypes.func.isRequired,
    updateUsername: PropTypes.func.isRequired,
  }

  state = {
    email: this.props.email,
    username: this.props.username,
    language: i18n.language,
  }

  render() {
    const { email, username, language } = this.state
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
                          label={t('common:Nome e Cognome')}
                          validate
                          required
                          value={username}
                          onChange={({ target: { value: username } }) => {
                            this.setState({ username })
                          }}>
                          <Icon path={mdiAccountCardDetails} size={1.175} color="#1565c0" />
                        </Input>
                        <Select
                          id="boo"
                          s={12}
                          label={t('common:lingua')}
                          value={language}
                          icon={<Icon path={mdiTranslate} size={1.175} color="#1565c0" />}
                          onChange={({ currentTarget: { value: language } }) => {
                            this.setState({
                              language,
                            })
                          }}>
                          <option value="it">Italiano</option>
                          <option value="en">English</option>
                        </Select>
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

                          i18n.changeLanguage(language)
                        }}
                        className="blueGradient hoverable white-text"
                        waves
                        style={{
                          display: 'inline-flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <span>{t('common:aggiornaInformazioni')}</span>
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

export default withNamespaces(['notifications'])(User)
