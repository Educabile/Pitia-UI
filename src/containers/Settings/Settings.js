import React from 'react'
import PropTypes from 'prop-types'
import { Tab } from 'react-materialize'
import Tabs from 'components/Tabs/Tabs'
import Icon from '@mdi/react'
import { mdiAccount, mdiBellRing, mdiApplication, mdiInformationOutline } from '@mdi/js'
import User from 'containers/User/User'
import { withNamespaces } from 'react-i18next'

const Settings = ({ t, username, email, updateEmail, updateUsername }) => (
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
            {t('interfaccia')}
          </span>
        </span>
      }
      active>
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
            {t('notifiche')}
          </span>
        </span>
      }
      active>
      <h1>Notifications Settings</h1>
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
            {t('account')}
          </span>
        </span>
      }
      active>
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
            {t('informazioni')}
          </span>
        </span>
      }
      active>
      <h1>Pitia v0.1.0</h1>
    </Tab>
  </Tabs>
)

Settings.propTypes = {
  t: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  updateEmail: PropTypes.string.isRequired,
  updateUsername: PropTypes.string.isRequired,
}

export default withNamespaces()(Settings)
