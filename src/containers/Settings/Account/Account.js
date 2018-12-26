import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Row, Col, Card } from 'react-materialize'
import Button from 'components/Button'
import Select from 'components/Select/Select'
import i18n from 'src/i18n'
import Icon from '@mdi/react'
import { mdiAccountCardDetails, mdiTranslate, mdiAt } from '@mdi/js'
import Avatar from 'react-avatar'
import { SuccessToast } from 'components/Toast'
import { withNamespaces } from 'react-i18next'
import { connect } from 'react-redux'
import { changeEmail, changeUsername } from 'actions/auth'
class Account extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      nameSurname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    updateEmail: PropTypes.func.isRequired,
    updateUsername: PropTypes.func.isRequired,
  }

  state = {
    email: this.props.auth.email,
    username: this.props.auth.nameSurname,
    language: i18n.language,
    shouldUpdateEmail: false,
    shouldUpdateUsername: false,
  }

  render() {
    const { email, username, language, shouldUpdateEmail, shouldUpdateUsername } = this.state
    const { t, updateEmail, updateUsername } = this.props

    return (
      <div
        className="grey lighten-4"
        style={{ minHeight: 'calc(100vh - 56px - 48px)', margin: '0 -0.75rem' }}>
        <Row style={{ paddingTop: '15vh', marginBottom: 0 }}>
          <Col s={12} m={6} push="m3">
            <Card className="rounded hoverable">
              <Row>
                <Col s={12} className="center">
                  <Avatar className="blueGradient z-depth-2" name={username} email={email} round />
                </Col>
                <Col s={8} push="s2">
                  <div>
                    <form
                      onSubmit={e => {
                        e.preventDefault()

                        shouldUpdateEmail && updateEmail(email)
                        shouldUpdateUsername && updateUsername(username)

                        SuccessToast({
                          content: t('informazioniAggiornate'),
                        })

                        i18n.changeLanguage(language)

                        this.setState({
                          shouldUpdateEmail: false,
                          shouldUpdateUsername: false,
                        })
                      }}>
                      <Row>
                        <Input
                          type="email"
                          s={12}
                          label={t('settings:email')}
                          validate
                          required
                          value={email}
                          onChange={({ target: { value: email } }) => {
                            this.setState({
                              email,
                              shouldUpdateEmail: true,
                            })
                          }}>
                          <Icon path={mdiAt} size={1.175} color="#1565c0" />
                        </Input>
                        <Input
                          s={12}
                          label={t('settings:nomeCognome')}
                          validate
                          required
                          value={username}
                          onChange={({ target: { value: username } }) => {
                            this.setState({ username, shouldUpdateUsername: true })
                          }}>
                          <Icon path={mdiAccountCardDetails} size={1.175} color="#1565c0" />
                        </Input>
                        <Select
                          id="boo"
                          s={12}
                          label={t('settings:lingua')}
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
                      <div className="center">
                        <Button
                          large
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
                    </form>
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

const mapStateToProps = ({ auth }) => ({
  auth,
})

const mapDispatchToProps = dispatch => ({
  updateEmail: email => {
    dispatch(changeEmail(email))
  },
  updateUsername: username => {
    dispatch(changeUsername(username))
  },
})

export default withNamespaces(['notifications', 'settings'])(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Account)
)
