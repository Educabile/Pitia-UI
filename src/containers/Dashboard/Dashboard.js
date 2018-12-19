import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize'
import Icon from '@mdi/react'
import {
  mdiPencil,
  mdiPlus,
  mdiEye,
  mdiPlusNetwork,
  mdiGoogleNearby,
  mdiCodeTagsCheck,
  mdiCursorMove,
} from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import { Redirect } from 'react-router-dom'
import Logger from 'components/Logger/Logger'
import Resizable from 're-resizable'
import Button from 'components/Button/Button'
import Style from './Dashboard.module.css'

const Dashboard = ({ t, loggedIn, infoEventMock, addInfoEvent }) =>
  !loggedIn ? (
    <Redirect to="/login" />
  ) : (
    <Row style={{ marginBottom: 0 }}>
      <Col s={12} m={8}>
        <Row
          className="grey lighten-5"
          style={{
            minHeight: 'calc(100vh - 56px)',
            maxHeight: 'calc(100vh - 56px)',
            marginBottom: 0,
            overflowX: 'hidden',
            overflowY: 'auto',
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
        <Button
          floating
          fab="vertical"
          waves="light"
          icon={
            <Icon
              path={mdiPencil}
              size={1.25}
              color="white"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          }
          className="blueGradient hoverable"
          large
          style={{
            bottom: 20,
            right: 560,
          }}>
          <Button
            floating
            icon={
              <Icon
                path={mdiCursorMove}
                size={1.25}
                color="white"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            }
            className="orangeGradient"
            tooltip="Riorganizza widget"
            tooltipOptions={{
              position: 'left',
            }}
          />
          <Button
            onClick={() => {
              window.$('#widgets-modal').modal('open')
            }}
            floating
            icon={
              <Icon
                path={mdiPlus}
                size={1.25}
                color="white"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            }
            className="greenGradient"
            tooltip="Aggiungi widget"
            tooltipOptions={{
              position: 'left',
            }}
          />
        </Button>
      </Col>
      <Col s={12} m={4} className={cx('z-depth-1', Style.Col)}>
        <Logger infoEventMock={infoEventMock} />
      </Col>
    </Row>
  )

Dashboard.propTypes = {
  t: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
}

export default withNamespaces()(Dashboard)
