import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiBellRing } from '@mdi/js'
import { Col, Card, Row } from 'react-materialize'
import { ErrorToast, SuccessToast, InfoToast, WarningToast } from 'components/Toast'
import { withNamespaces } from 'react-i18next'
import Button from 'components/Button'
import NotificationForm from 'components/NotificationForm'

const Notifications = ({ t }) => (
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
        <NotificationForm />
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
        <NotificationForm />
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
        <NotificationForm />
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
        <NotificationForm />
      </Card>
    </Col>
    <div className="center">
      <Button
        large
        onClick={() => {
          SuccessToast({
            content: t('notifications:testNotifica'),
          })
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
  </Row>
)

Notifications.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces(['notifications', 'settings'])(Notifications)
