import React from 'react'
import cx from 'class-names'
import Chart from 'components/Chart/Chart'
import { Row, Col, Card, Badge, Collapsible, CollapsibleItem, Tabs, Tab } from 'react-materialize'
import Icon from '@mdi/react'
import {
  mdiPlus,
  mdiEye,
  mdiCheckbook,
  mdiInformationOutline,
  mdiAlert,
  mdiAlertCircle,
  mdiPlusNetwork,
  mdiGoogleNearby,
  mdiCodeTagsCheck,
} from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import { Redirect, Link } from 'react-router-dom'
import Resizable from 're-resizable'
import Button from 'components/Button/Button'
import Style from './Dashboard.module.css'

const Dashboard = ({ t, loggedIn }) =>
  !loggedIn ? (
    <Redirect to="/login" />
  ) : (
    <Row style={{ marginBottom: 0 }}>
      <Col s={12} m={8}>
        <Row
          className="grey lighten-5"
          style={{
            height: 'calc(100vh - 108px)',
            marginBottom: 0,
          }}>
          <Col>
            <Resizable
              defaultSize={{
                width: 240,
                height: 213.25,
              }}
              minWidth={240}
              maxWidth={515}
              minHeight={213.25}
              snap={{ x: [240, 515] }}>
              <Collapsible>
                <CollapsibleItem
                  className="white flow-text"
                  expanded
                  header={
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}>
                      <Icon path={mdiEye} size={1.5} color="#1565c0" />
                      <span style={{ marginLeft: '1em' }}>A colpo d'occhio</span>
                    </span>
                  }>
                  <Row>
                    <Col s={12}>4 Network</Col>
                    <Col s={12}>20 Sensori</Col>
                  </Row>
                </CollapsibleItem>
              </Collapsible>
            </Resizable>
          </Col>
          <Col>
            <Resizable
              defaultSize={{
                width: 515,
                height: 300,
              }}
              minWidth={515}
              maxWidth={615}
              minHeight={213.25}
              snap={{ x: [515, 615] }}>
              <Collapsible>
                <CollapsibleItem
                  className="white flow-text"
                  expanded
                  header={
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}>
                      <Icon path={mdiPlus} size={1.5} color="#1565c0" />
                      <span style={{ marginLeft: '1em' }}>Creazione Rapida</span>
                    </span>
                  }>
                  <Button
                    flat
                    onClick={() => {
                      window.$('#networks-modal').modal('open')
                    }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}>
                      <Icon path={mdiPlusNetwork} size={1.5} color="#1565c0" />
                      <span style={{ marginLeft: '1em' }}>Crea un nuovo network</span>
                    </span>
                  </Button>
                  <hr />
                  <Button
                    flat
                    onClick={() => {
                      window.$('#nodes-modal').modal('open')
                    }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}>
                      <Icon path={mdiGoogleNearby} size={1.5} color="#1565c0" />
                      <span style={{ marginLeft: '1em' }}>Aggiungi un nodo alla rete</span>
                    </span>
                  </Button>
                  <hr />
                  <Button
                    flat
                    onClick={() => {
                      window.$('#networks-modal').modal('open')
                    }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}>
                      <Icon path={mdiCodeTagsCheck} size={1.5} color="#1565c0" />
                      <span style={{ marginLeft: '1em' }}>Aggiungi regole al network</span>
                    </span>
                  </Button>
                </CollapsibleItem>
              </Collapsible>
            </Resizable>
          </Col>
        </Row>
      </Col>
      <Col s={12} m={4} className={cx('z-depth-1', Style.Col)}>
        <div className="collapsible-header">
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}>
            <Icon path={mdiCheckbook} size={1.5} color="#1565c0" />
            <span style={{ marginLeft: '1em' }}>
              Attivita' recente
              <Badge
                style={{
                  marginLeft: '1em',
                  backgroundColor: '#1565c0',
                  color: 'white',
                }}>
                1 info
              </Badge>
              <Badge
                style={{
                  marginLeft: '1em',
                  backgroundColor: '#feb93d',
                  color: 'white',
                }}
                className="amber darken-2">
                1 new warning
              </Badge>
              <Badge
                style={{
                  marginLeft: '1em',
                  backgroundColor: '#fb3349',
                  color: 'white',
                }}>
                1 new error
              </Badge>
            </span>
          </span>
        </div>
        <Tabs className={cx('z-depth-1 tabs-fixed-width')}>
          <Tab
            title={
              <span
                style={{
                  display: 'flex',
                  textTransform: 'uppercase',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <Icon path={mdiInformationOutline} size={1.25} color="#1565c0" />
                <span
                  style={{
                    marginLeft: '1em',
                  }}>
                  Informations
                </span>
              </span>
            }
            active>
            <Row>
              <Col s={12} className="flow-text">
                La rete `Network Placeholder` e' stata creata 2 giorni fa
              </Col>
            </Row>
          </Tab>
          <Tab
            title={
              <span
                style={{
                  display: 'flex',
                  textTransform: 'uppercase',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <Icon path={mdiAlert} size={1.25} color="#1565c0" />
                <span
                  style={{
                    marginLeft: '1em',
                  }}>
                  Warnings
                </span>
              </span>
            }>
            <Col s={12}>
              <span style={{ backgroundColor: '#fffae6', color: '#957b5a' }} className="flow-text">
                <Icon path={mdiAlert} size={1.25} color="#ffa000" /> Il nodo `2` della rete `Network
                Placeholder` ha segnalato un comportamento anomalo
              </span>
            </Col>
          </Tab>
          <Tab
            title={
              <span
                style={{
                  display: 'flex',
                  textTransform: 'uppercase',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <Icon path={mdiAlertCircle} size={1.25} color="#1565c0" />
                <span
                  style={{
                    marginLeft: '1em',
                  }}>
                  Errors
                </span>
              </span>
            }>
            <Col s={12}>
              <span style={{ backgroundColor: '#ffeff0', color: '#ff677e' }} className="flow-text">
                <Icon path={mdiAlertCircle} size={1.25} color="#fb3349" /> Il network `Network
                Placeholder` non e' raggiungibile
              </span>
            </Col>{' '}
          </Tab>
        </Tabs>
      </Col>
    </Row>
  )

export default withNamespaces()(Dashboard)
