import React from 'react'
import Chart from 'components/Chart/Chart'
import Icon from '@mdi/react'
import { mdiCrosshairsGps, mdiChartAreaspline, mdiTune } from '@mdi/js'
import { Tabs, Tab } from 'react-materialize'

const Network = props => (
  <Tabs
    className="tab-demo z-depth-1 tabs-fixed-width"
    style={{
      padding: 0,
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
          <Icon path={mdiChartAreaspline} size={1.5} color="#1565c0" />
          <span
            style={{
              marginLeft: '1em',
            }}>
            Monitor
          </span>
        </span>
      }
      active>
      <Chart wss={props.location.state.wss} />
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
            Geolocation
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
            Settings
          </span>
        </span>
      }>
      Settings page
    </Tab>
  </Tabs>
)

export default Network
