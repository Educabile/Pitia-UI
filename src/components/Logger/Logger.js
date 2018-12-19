import React from 'react'
import cx from 'class-names'
import { Row, Col, Badge, Tab } from 'react-materialize'
import Tabs from 'components/Tabs/Tabs'
import Icon from '@mdi/react'
import {
  mdiCheckbook,
  mdiPlusNetwork,
  mdiAccessPointNetwork,
  mdiInformationOutline,
  mdiAlert,
  mdiAlertCircle,
  mdiKeyboardTab,
} from '@mdi/js'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import Select from 'components/Select/Select'
import { withRouter } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import italianStrings from 'react-timeago/lib/language-strings/it'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import Button from 'components/Button/Button'

const formatter = buildFormatter(italianStrings)

const Logger = ({ history, infoEventMock }) => (
  <>
    <div
      className="collapsible-header flow-text white"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 2,
      }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}>
        <Icon path={mdiCheckbook} size={1.5} color="#1565c0" />
        <span style={{ marginLeft: '1em' }}>
          Attivita'
          <Badge
            className="blueGradient"
            style={{
              marginLeft: '1em',
              color: 'white',
            }}>
            1 info
          </Badge>
          <Badge
            className="orangeGradient"
            style={{
              marginLeft: '1em',
              color: 'white',
            }}>
            1 new warning
          </Badge>
          <Badge
            className="redGradient"
            style={{
              marginLeft: '1em',
              color: 'white',
            }}>
            1 new error
          </Badge>
        </span>
      </span>
    </div>
    <Tabs
      className={cx('z-depth-1 tabs-fixed-width')}
      style={{
        position: 'sticky',
        top: 65,
        zIndex: 2,
      }}>
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
          <Select label="Ordina per" value={'Piu recenti'}>
            <option value="3,4">Piu' recenti</option>
            <option value="4">Meno recenti</option>
          </Select>
          <Col s={12} className="flow-text">
            <Timeline lineColor="#1565C0">
              {infoEventMock.map((event, index) => (
                <TimelineEvent
                  key={index}
                  buttons={
                    <Button
                      className="white-text btn-small"
                      flat
                      waves
                      onClick={() => history.push('/networks')}
                      tooltip="Visualizza l'evento"
                      tooltipOptions={{
                        position: 'left',
                        enterDelay: 250,
                      }}>
                      <Icon path={mdiKeyboardTab} size={1.2} color="#1565C0" />
                    </Button>
                  }
                  collapsible
                  className="flow-text"
                  bubbleStyle={{
                    borderColor: '#1565C0',
                  }}
                  contentStyle={{ backgroundColor: '#1565C0ed', color: 'white' }}
                  title={event.type === 'newNetwork' ? event.content : 'Nodo di rete aggiunto'}
                  createdAt={<TimeAgo date={event.date} formatter={formatter} />}
                  icon={
                    event.type === 'newNetwork' ? (
                      <Icon path={mdiPlusNetwork} size={1} color="#1565C0" />
                    ) : (
                      <Icon path={mdiAccessPointNetwork} size={1} color="#1565C0" />
                    )
                  }>
                  {event.details}
                </TimelineEvent>
              ))}
            </Timeline>
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
            <Icon path={mdiAlert} size={1.25} color="#ffa000" />
            <span
              style={{
                marginLeft: '1em',
                color: '#ffa000',
              }}>
              Warnings
            </span>
          </span>
        }>
        <Select label="Ordina per" value={'Piu recenti'}>
          <option value="3,4">Piu' recenti</option>
          <option value="4">Meno recenti</option>
        </Select>
        <Col s={12}>
          <Timeline lineColor="#ffa000">
            <TimelineEvent
              collapsible
              className="flow-text"
              bubbleStyle={{
                borderColor: '#ffa000',
              }}
              contentStyle={{ backgroundColor: '#fffae6', color: '#957b5a' }}
              title="Nuova rete creata"
              createdAt={<TimeAgo date={'2018-06-12 10:06 PM'} formatter={formatter} />}
              icon={<Icon path={mdiPlusNetwork} size={1} color="#1565C0" />}>
              E' stata creata una nuova rete: `Network Placeholder`
            </TimelineEvent>
            <TimelineEvent
              collapsible
              className="flow-text"
              bubbleStyle={{
                borderColor: '#ffa000',
              }}
              contentStyle={{ backgroundColor: '#fffae6', color: '#957b5a' }}
              title="Nuova noodo creato"
              createdAt={<TimeAgo date={'2018-12-18 10:06 AM'} formatter={formatter} />}
              icon={<Icon path={mdiAccessPointNetwork} size={1} color="#1565C0" />}>
              E' stato aggiunto un nuovo nodo `Node Placeholder` alla rete `Network Placeholder`
            </TimelineEvent>
          </Timeline>
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
            <Icon path={mdiAlertCircle} size={1.25} color="#fb3349" />
            <span
              style={{
                marginLeft: '1em',
                color: '#fb3349',
              }}>
              Errors
            </span>
          </span>
        }>
        <Select label="Ordina per" value={'Piu recenti'}>
          <option value="3,4">Piu' recenti</option>
          <option value="4">Meno recenti</option>
        </Select>
        <Col s={12}>
          <Timeline lineColor="#fb3349">
            <TimelineEvent
              collapsible
              className="flow-text"
              bubbleStyle={{
                borderColor: '#fb3349',
              }}
              contentStyle={{ backgroundColor: '#ffeff0', color: '#ff677e' }}
              title="Nuova rete creata"
              createdAt={<TimeAgo date={'2018-12-18 13:00 AM'} formatter={formatter} />}
              icon={<Icon path={mdiPlusNetwork} size={1} color="#1565C0" />}>
              E' stata creata una nuova rete: `Network Placeholder`
            </TimelineEvent>
            <TimelineEvent
              collapsible
              className="flow-text"
              bubbleStyle={{
                borderColor: '#fb3349',
              }}
              contentStyle={{ backgroundColor: '#ffeff0', color: '#ff677e' }}
              title="Nuova noodo creato"
              createdAt={<TimeAgo date={'2017-05-12 10:06 PM'} formatter={formatter} />}
              icon={<Icon path={mdiAccessPointNetwork} size={1} color="#1565C0" />}>
              E' stato aggiunto un nuovo nodo `Node Placeholder` alla rete `Network Placeholder`
            </TimelineEvent>
          </Timeline>
        </Col>
      </Tab>
    </Tabs>
  </>
)

export default withRouter(Logger)
