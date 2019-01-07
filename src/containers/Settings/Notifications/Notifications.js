import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiBellRing } from '@mdi/js'
import { Col, Card, Row } from 'react-materialize'
import { ErrorToast, SuccessToast, InfoToast, WarningToast } from 'components/Toast'
import { withNamespaces } from 'react-i18next'
import Button from 'components/Button'
import NotificationForm from 'components/NotificationForm'
import {
  infoNotificationSoundChange,
  infoNotificationDurationChange,
  successNotificationSoundChange,
  successNotificationDurationChange,
  warningNotificationSoundChange,
  warningNotificationDurationChange,
  errorNotificationSoundChange,
  errorNotificationDurationChange,
} from 'actions/notifications'
import { compose } from 'redux'
import { connect } from 'react-redux'

const Notifications = ({
  t,
  notifications: {
    infoNotifications: { duration: infoNotificationDuration, sound: infoNotificationSound },
    successNotifications: {
      duration: successNotificationDuration,
      sound: successNotificationSound,
    },
    warningNotifications: {
      duration: warningNotificationDuration,
      sound: warningNotificationSound,
    },
    errorNotifications: { duration: errorNotificationDuration, sound: errorNotificationSound },
  },
  changeInfoNotificationSound,
  changeInfoNotificationDuration,
  changeSuccessNotificationSound,
  changeSuccessNotificationDuration,
  changeWarningNotificationSound,
  changeWarningNotificationDuration,
  changeErrorNotificationSound,
  changeErrorNotificationDuration,
}) => (
  <Row
    className="grey lighten-4"
    style={{
      minHeight: 'calc(100vh - 56px - 48px)',
      margin: '0 -0.75rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Col s={12} m={6}>
      <Card
        title={<span className="white-text">{t('settings:notificheInfo')}</span>}
        className="blueGradient rounded hoverable"
        actions={[
          <Button
            key="info-notification"
            floating
            flat
            tooltip={t('notifications:testNotifica')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => {
              InfoToast({
                content: t('notifications:testNotifica'),
              })
            }}>
            <Icon path={mdiBellRing} size={1.25} color="white" />
          </Button>,
        ]}>
        <NotificationForm
          updateNotificationSound={changeInfoNotificationSound}
          updateNotificationDuration={changeInfoNotificationDuration}
          currentNotificationSound={infoNotificationSound}
          currentNotificationDuration={infoNotificationDuration}
        />
      </Card>
    </Col>
    <Col s={12} m={6}>
      <Card
        title={<span className="white-text">{t('settings:notificheSuccesso')}</span>}
        className="greenGradient rounded hoverable"
        actions={[
          <Button
            key="success-notification"
            floating
            flat
            tooltip={t('notifications:testNotifica')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => {
              SuccessToast({
                content: t('notifications:testNotifica'),
              })
            }}>
            <Icon path={mdiBellRing} size={1.25} color="white" />
          </Button>,
        ]}>
        <NotificationForm
          updateNotificationSound={changeSuccessNotificationSound}
          updateNotificationDuration={changeSuccessNotificationDuration}
          currentNotificationSound={successNotificationSound}
          currentNotificationDuration={successNotificationDuration}
        />
      </Card>
    </Col>
    <Col s={12} m={6}>
      <Card
        title={<span className="white-text">{t('settings:notificheWarning')}</span>}
        className="orangeGradient rounded hoverable"
        actions={[
          <Button
            key="warning-notification"
            floating
            flat
            tooltip={t('notifications:testNotifica')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => {
              WarningToast({
                content: t('notifications:testNotifica'),
              })
            }}>
            <Icon path={mdiBellRing} size={1.25} color="white" />
          </Button>,
        ]}>
        <NotificationForm
          updateNotificationSound={changeWarningNotificationSound}
          updateNotificationDuration={changeWarningNotificationDuration}
          currentNotificationSound={warningNotificationSound}
          currentNotificationDuration={warningNotificationDuration}
        />
      </Card>
    </Col>
    <Col s={12} m={6}>
      <Card
        title={<span className="white-text">{t('settings:notificheErrore')}</span>}
        className="redGradient rounded hoverable"
        actions={[
          <Button
            key="error-notification"
            floating
            flat
            tooltip={t('notifications:testNotifica')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => {
              ErrorToast({
                content: t('notifications:testNotifica'),
              })
            }}>
            <Icon path={mdiBellRing} size={1.25} color="white" />
          </Button>,
        ]}>
        <NotificationForm
          updateNotificationSound={changeErrorNotificationSound}
          updateNotificationDuration={changeErrorNotificationDuration}
          currentNotificationSound={errorNotificationSound}
          currentNotificationDuration={errorNotificationDuration}
        />
      </Card>
    </Col>
  </Row>
)

Notifications.propTypes = {
  t: PropTypes.func.isRequired,
  notifications: PropTypes.object.isRequired,
  changeInfoNotificationSound: PropTypes.func.isRequired,
  changeInfoNotificationDuration: PropTypes.func.isRequired,
  changeSuccessNotificationSound: PropTypes.func.isRequired,
  changeSuccessNotificationDuration: PropTypes.func.isRequired,
  changeWarningNotificationSound: PropTypes.func.isRequired,
  changeWarningNotificationDuration: PropTypes.func.isRequired,
  changeErrorNotificationSound: PropTypes.func.isRequired,
  changeErrorNotificationDuration: PropTypes.func.isRequired,
}

const mapStateToProps = ({ notifications }) => ({
  notifications,
})

const mapDispatchToProps = dispatch => ({
  changeInfoNotificationSound: sound => dispatch(infoNotificationSoundChange(sound)),
  changeInfoNotificationDuration: duration => dispatch(infoNotificationDurationChange(duration)),
  changeSuccessNotificationSound: sound => dispatch(successNotificationSoundChange(sound)),
  changeSuccessNotificationDuration: duration =>
    dispatch(successNotificationDurationChange(duration)),
  changeWarningNotificationSound: sound => dispatch(warningNotificationSoundChange(sound)),
  changeWarningNotificationDuration: duration =>
    dispatch(warningNotificationDurationChange(duration)),
  changeErrorNotificationSound: sound => dispatch(errorNotificationSoundChange(sound)),
  changeErrorNotificationDuration: duration => dispatch(errorNotificationDurationChange(duration)),
})

export default compose(
  withNamespaces(['notifications', 'settings']),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Notifications)
