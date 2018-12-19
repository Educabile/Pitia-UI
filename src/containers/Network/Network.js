import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiCrosshairsGps, mdiChartAreaspline, mdiTune } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import { Tabs, Tab } from 'react-materialize'
import Chart from 'components/Chart/Chart'
import NetworkForm from 'components/NetworkForm/NetworkForm'
import Style from './Network.module.css'

const Network = ({
  t,
  location: {
    state: { networkName, networkPosition, networkIP, wss },
  },
}) => (
  <Tabs className={cx('tab-demo z-depth-1 tabs-fixed-width', Style.Tabs)}>
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
          <Icon path={mdiChartAreaspline} size={1.5} color="#1565c0" />
          <span
            style={{
              marginLeft: '1em',
            }}>
            {t('monitora')}
          </span>
        </span>
      }
      active>
      <Chart wss={wss} />
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
          <Icon path={mdiCrosshairsGps} size={1.5} color="#1565c0" />
          <span
            style={{
              marginLeft: '1em',
            }}>
            {t('geolocalizza')}
          </span>
        </span>
      }>
      Google Map Section
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
          <Icon path={mdiTune} size={1.5} color="#1565c0" />
          <span
            style={{
              marginLeft: '1em',
            }}>
            {t('impostazioni')}
          </span>
        </span>
      }>
      <NetworkForm
        networkName={networkName}
        networkPosition={networkPosition}
        networkIP={networkIP}
      />
    </Tab>
  </Tabs>
)

Network.propTypes = {
  t: PropTypes.func.isRequired,
  networkName: PropTypes.string,
  networkPosition: PropTypes.string,
  networkIp: PropTypes.string,
  wss: PropTypes.string,
  location: PropTypes.object.isRequired,
}

export default withNamespaces()(Network)
