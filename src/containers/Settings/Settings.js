import React from 'react'
import PropTypes from 'prop-types'
import { Tab } from 'react-materialize'
import Tabs from 'components/Tabs/Tabs'
import Icon from '@mdi/react'
import { mdiAccount, mdiBellRing, mdiApplication, mdiInformationOutline } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import Account from './Account'
import Informations from './Informations'
import Notifications from './Notifications'
import Style from './Settings.module.css'

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
        <span className={Style.TabTitle}>
          <Icon path={mdiApplication} size={1.25} color="#1565c0" />
          <span>{t('settings:interfaccia')}</span>
        </span>
      }
      active={section === 'interface' || section === undefined ? true : false}>
      <h1>Interface Settings</h1>
    </Tab>
    <Tab
      title={
        <span className={Style.TabTitle}>
          <Icon path={mdiBellRing} size={1.25} color="#1565c0" />
          <span>{t('settings:notifiche')}</span>
        </span>
      }
      active={section === 'notifications' ? true : false}>
      <Notifications />
    </Tab>
    <Tab
      title={
        <span className={Style.TabTitle}>
          <Icon path={mdiAccount} size={1.25} color="#1565c0" />
          <span>{t('settings:account')}</span>
        </span>
      }
      active={section === 'account' ? true : false}>
      <Account
        username={username}
        email={email}
        updateEmail={updateEmail}
        updateUsername={updateUsername}
      />
    </Tab>
    <Tab
      title={
        <span className={Style.TabTitle}>
          <Icon path={mdiInformationOutline} size={1.25} color="#1565c0" />
          <span>{t('settings:informazioni')}</span>
        </span>
      }
      active={section === 'informations' ? true : false}>
      <Informations />
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
