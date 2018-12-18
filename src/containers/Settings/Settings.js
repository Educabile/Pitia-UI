import React, { Component } from 'react'
import { Button, Input, Row, Col, Section, Card } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiAccountCardDetails, mdiTranslate, mdiAt } from '@mdi/js'
import Avatar from 'react-avatar'

class Settings extends Component {
  state = {
    email: this.props.email,
    username: this.props.username,
  }

  render() {
    return (
      <Section className="grey lighten-4" style={{ minHeight: 'calc(100vh - 56px - 53px)' }}>
        <Row style={{ paddingTop: '15vh' }}>
          <Col s={12} m={6} className="push-m3">
            <Card className="rounded">
              <Row>
                <Col s={12} className="center">
                  <Avatar
                    color="#1565C0"
                    name={this.state.username}
                    email={this.state.email}
                    round
                  />
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
                          label="Email"
                          validate
                          required
                          value={this.state.email}
                          onChange={({ target: { value: email } }) => {
                            this.setState({
                              email,
                            })
                          }}>
                          <Icon path={mdiAt} size={1.175} color="#1565c0" />
                        </Input>
                        <Input
                          s={12}
                          label="Nome e Cognome"
                          validate
                          required
                          value={this.state.username}
                          onChange={({ target: { value: username } }) => {
                            this.setState({ username })
                          }}>
                          <Icon path={mdiAccountCardDetails} size={1.175} color="#1565c0" />
                        </Input>
                        <Input s={12} label="Lingua" validate value="Italiano" disabled>
                          <Icon path={mdiTranslate} size={1.175} color="#1565c0" />
                        </Input>
                      </Row>
                    </form>

                    <div className="center">
                      <Button
                        large
                        onClick={() => {
                          this.props.updateEmail(this.state.email)
                          this.props.updateUsername(this.state.username)

                          window.M.toast({
                            html: 'Informazioni aggiornate con successo',
                            classes: 'rounded',
                          })
                        }}
                        className="blueGradient hoverable white-text"
                        waves
                        style={{
                          display: 'inline-flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <span>Aggiorna informazioni</span>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Section>
    )
  }
}
Settings.propTypes = {}

export default Settings
