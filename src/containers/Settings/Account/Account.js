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
import { compose } from 'redux'
import { changeEmail, changeUsername, changeLanguage } from 'actions/account'
class Account extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    account: PropTypes.shape({
      nameSurname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
    }).isRequired,
    updateEmail: PropTypes.func.isRequired,
    updateUsername: PropTypes.func.isRequired,
    updateLanguage: PropTypes.func.isRequired,
  }

  state = {
    email: this.props.account.email,
    username: this.props.account.nameSurname,
    language: this.props.account.language,
    shouldUpdateEmail: false,
    shouldUpdateUsername: false,
    shouldUpdateLanguage: false,
  }

  render() {
    const {
      email,
      username,
      language,
      shouldUpdateEmail,
      shouldUpdateUsername,
      shouldUpdateLanguage,
    } = this.state
    const { t, updateEmail, updateUsername, updateLanguage } = this.props

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

                        shouldUpdateEmail && updateEmail(this.props.account.email, email)
                        shouldUpdateUsername && updateUsername(username)
                        shouldUpdateLanguage && updateLanguage(language)

                        SuccessToast({
                          content: t('informazioniAggiornate'),
                        })

                        i18n.changeLanguage(language)

                        this.setState({
                          shouldUpdateEmail: false,
                          shouldUpdateUsername: false,
                          shouldUpdateLanguage: false,
                        })
                      }}>
                      <Row>
                        <Input
                          type="email"
                          autoComplete="email"
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
                          autoComplete="name"
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
                          s={12}
                          label={t('settings:lingua')}
                          value={language}
                          icon={<Icon path={mdiTranslate} size={1.175} color="#1565c0" />}
                          onChange={({ currentTarget: { value: language } }) => {
                            this.setState({
                              language,
                              shouldUpdateLanguage: true,
                            })
                          }}>
                          <option value="it">Italiano</option>
                          <option value="en">English</option>
                        </Select>
                      </Row>
                      <div className="center">
                        <Button
                          disabled={
                            !(shouldUpdateEmail || shouldUpdateLanguage || shouldUpdateUsername)
                          }
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

const mapStateToProps = ({ account }) => ({
  account,
})

const mapDispatchToProps = dispatch => ({
  updateEmail: (currentEmail, newEmail) => {
    dispatch(changeEmail(currentEmail, newEmail))
  },
  updateUsername: username => {
    dispatch(changeUsername(username))
  },
  updateLanguage: language => {
    dispatch(changeLanguage(language))
  },
})

export default compose(
  withNamespaces(['notifications', 'settings']),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Account)
