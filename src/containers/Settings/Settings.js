import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { Tab } from 'react-materialize'
import Tabs from 'components/Tabs/Tabs'
import Icon from '@mdi/react'
import { mdiAccount, mdiBellRing, mdiApplication, mdiInformationOutline } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Spinner from 'components/Spinner'
import Style from './Settings.module.css'

const Account = lazy(() => import('./Account'))
const Informations = lazy(() => import('./Informations'))
const Notifications = lazy(() => import('./Notifications'))

const Settings = ({
  t,
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
      <Suspense fallback={<Spinner />}>
        <Notifications />
      </Suspense>
    </Tab>
    <Tab
      title={
        <span className={Style.TabTitle}>
          <Icon path={mdiAccount} size={1.25} color="#1565c0" />
          <span>{t('settings:account')}</span>
        </span>
      }
      active={section === 'account' ? true : false}>
      <Suspense fallback={<Spinner />}>
        <Account />
      </Suspense>
    </Tab>
    <Tab
      title={
        <span className={Style.TabTitle}>
          <Icon path={mdiInformationOutline} size={1.25} color="#1565c0" />
          <span>{t('settings:informazioni')}</span>
        </span>
      }
      active={section === 'informations' ? true : false}>
      <Suspense fallback={<Spinner />}>
        <Informations />
      </Suspense>
    </Tab>
  </Tabs>
)

Settings.propTypes = {
  t: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
}

const mapStateToProps = ({ auth }) => ({
  auth,
})

export default compose(
  withNamespaces(['notifications', 'settings']),
  connect(
    mapStateToProps,
    null
  ),
  withRouter
)(Settings)
