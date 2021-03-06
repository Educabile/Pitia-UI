import React from 'react'
import PropTypes from 'prop-types'
import cx from 'class-names'
import { Row, Col, Badge, Tab } from 'react-materialize'
import Tabs from 'components/Tabs/Tabs'
import Icon from '@mdi/react'
import { mdiCheckbook, mdiInformationOutline, mdiAlert, mdiAlertCircle } from '@mdi/js'
import { Timeline } from 'react-event-timeline'
import Select from 'components/Select/Select'
import Notification from 'components/Notifications'
import { withNamespaces } from 'react-i18next'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  infoNotificationsReverse,
  warningNotificationsReverse,
  errorNotificationsReverse,
} from 'actions/notifications'

const Logger = ({
  networks: { networks },
  reverseInfoNotifications,
  reverseWarningNotifications,
  reverseErrorNotifications,
  notifications: {
    infoNotifications: { notifications: infoNotifications },
    warningNotifications: { notifications: warningNotifications },
    errorNotifications: { notifications: errorNotifications },
  },
  t,
}) => (
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
          {t('attivita')}
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
              {t('informazioni')}
            </span>
          </span>
        }
        active>
        <Row>
          <Select
            label={t('ordinaPer')}
            value={'Piu recenti'}
            disabled={!infoNotifications.length}
            onChange={() => {
              reverseInfoNotifications()
            }}>
            <option value="3,4">{t('piuRecenti')}</option>
            <option value="4">{t('menoRecenti')}</option>
          </Select>
          <Col s={12} className="flow-text">
            {infoNotifications.length ? (
              <Timeline lineColor="#1565C0">
                {infoNotifications.map((event, index) => (
                  <Notification key={index} event={event} />
                ))}
              </Timeline>
            ) : null}
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
              {t('warnings')}
            </span>
          </span>
        }>
        <Select
          label={t('ordinaPer')}
          value={'Piu recenti'}
          onChange={() => {
            reverseWarningNotifications()
          }}
          disabled={!warningNotifications.length}>
          <option value="3,4">{t('piuRecenti')}</option>
          <option value="4">{t('menoRecenti')}</option>
        </Select>
        <Select label={t('ordinaPer')} disabled={!warningNotifications.length} defaultValue="all">
          <option value="all">All Networks</option>
          {networks.map(network => (
            <option key={network.networkName} value={network.networkName}>
              {network.networkName}
            </option>
          ))}
        </Select>
        <Col s={12}>
          {warningNotifications.length ? (
            <Timeline lineColor="#FFA000">
              {warningNotifications.map((event, index) => (
                <Notification key={index} event={event} />
              ))}
            </Timeline>
          ) : null}
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
              {t('errori')}
            </span>
          </span>
        }>
        <Select
          label={t('ordinaPer')}
          value={'Piu recenti'}
          onChange={() => {
            reverseErrorNotifications()
          }}
          disabled={!errorNotifications.length}>
          <option value="3,4">{t('piuRecenti')}</option>
          <option value="4">{t('menoRecenti')}</option>
        </Select>
        <Select
          label={t('ordinaPer')}
          disabled={!errorNotifications.length}
          defaultValue="all"
          options={{
            classes: '',
            dropdownOptions: {
              coverTrigger: false,
              constrainWidth: false,
            },
          }}>
          <option value="all">All Networks</option>
          {networks.map(network => (
            <option key={network.networkName} value={network.networkName}>
              {network.networkName}
            </option>
          ))}
        </Select>
        <Col s={12}>
          {errorNotifications.length ? (
            <Timeline lineColor="#fb3349">
              {errorNotifications.map((event, index) => (
                <Notification key={index} event={event} />
              ))}
            </Timeline>
          ) : null}
        </Col>
      </Tab>
    </Tabs>
  </>
)

Logger.propTypes = {
  t: PropTypes.func.isRequired,
  infoNtifications: PropTypes.array,
  warningNotifications: PropTypes.array,
  errorNotifications: PropTypes.array,
}

const mapStateToProps = ({ notifications, networks }) => ({
  notifications,
  networks,
})

const mapDispatchToProps = dispatch => ({
  reverseInfoNotifications: () => dispatch(infoNotificationsReverse()),
  reverseWarningNotifications: () => dispatch(warningNotificationsReverse()),
  reverseErrorNotifications: () => dispatch(errorNotificationsReverse()),
})

export default compose(
  withNamespaces(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Logger)
