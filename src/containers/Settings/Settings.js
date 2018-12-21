import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Col, Card, Row } from 'react-materialize'
import Tabs from 'components/Tabs/Tabs'
import Icon from '@mdi/react'
import { mdiAccount, mdiBellRing, mdiApplication, mdiInformationOutline } from '@mdi/js'
import User from 'containers/User/User'
import { withNamespaces } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { ErrorToast, SuccessToast, InfoToast, WarningToast } from 'components/Toast'
import Button from 'components/Button/Button'
import NotificationForm from 'components/NotificationForm/NotificationForm'

const Settings = ({
  t,
  username,
  email,
  updateEmail,
  updateUsername,
  match: {
    params: { section },
  },
}) => (
  <Tabs className="z-depth-1 tabs-fixed-width">
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
          <Icon path={mdiApplication} size={1.25} color="#1565c0" />
          <span
            style={{
              marginLeft: '1em',
            }}>
            {t('settings:interfaccia')}
          </span>
        </span>
      }
      active={section === 'interface' || section === undefined ? true : false}>
      <h1>Interface Settings</h1>
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
          <Icon path={mdiBellRing} size={1.25} color="#1565c0" />
          <span
            style={{
              marginLeft: '1em',
            }}>
            {t('settings:notifiche')}
          </span>
        </span>
      }
      active={section === 'notifications' ? true : false}>
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
          <Icon path={mdiAccount} size={1.25} color="#1565c0" />
          <span
            style={{
              marginLeft: '1em',
            }}>
            {t('settings:account')}
          </span>
        </span>
      }
      active={section === 'account' ? true : false}>
      <User
        username={username}
        email={email}
        updateEmail={updateEmail}
        updateUsername={updateUsername}
      />
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
          <Icon path={mdiInformationOutline} size={1.25} color="#1565c0" />
          <span
            style={{
              marginLeft: '1em',
            }}>
            {t('settings:informazioni')}
          </span>
        </span>
      }
      active={section === 'informations' ? true : false}>
      <h1>Pitia v{process.env.REACT_APP_VERSION}</h1>
    </Tab>
  </Tabs>
)

Settings.propTypes = {
  t: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  updateEmail: PropTypes.string.isRequired,
  updateUsername: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
}

export default withNamespaces(['notifications', 'settings'])(withRouter(Settings))
