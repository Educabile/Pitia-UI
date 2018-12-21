import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiChartAreaspline, mdiTune } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Tabs from 'components/Tabs'
import { Tab, Row, Col, Card } from 'react-materialize'
import { Map, Marker, TileLayer } from 'react-leaflet'
import 'react-leaflet-fullscreen-control'
import Chart from 'components/Chart/Chart'
import NetworkForm from 'components/NetworkForm/NetworkForm'
import Style from './Network.module.css'

const Network = ({
  t,
  location: {
    state: { networkName, networkPosition, networkIP, wss },
  },
}) => (
  <Tabs className={cx('z-depth-1 tabs-fixed-width', Style.Tabs)}>
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
      <Row className={cx('grey lighten-5', Style.Row)}>
        <Col s={12} m={8} className={Style.Chart}>
          <Card className="hoverable" title={networkName}>
            <Chart wss={wss} />
          </Card>
        </Col>
        <Col s={12} m={4}>
          <Map
            center={[51.505, -0.09]}
            zoom={19}
            className={cx('z-depth-3', Style.Map)}
            fullscreenControl>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]} />
          </Map>
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
          <Icon path={mdiTune} size={1.5} color="#1565c0" />
          <span
            style={{
              marginLeft: '1em',
            }}>
            {t('impostazioni')}
          </span>
        </span>
      }>
      <Row className={cx('grey lighten-5', Style.Row)}>
        <Col
          s={6}
          className="push-s3"
          style={{
            marginTop: '15vh',
          }}>
          <Card className="rounded hoverable">
            <NetworkForm
              networkName={networkName}
              networkPosition={networkPosition}
              networkIP={networkIP}
            />
          </Card>
        </Col>
      </Row>
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
