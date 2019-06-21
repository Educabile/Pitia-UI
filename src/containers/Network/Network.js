import React, { Component } from 'react'
import client from 'src/feathers'
import cx from 'class-names'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiChartAreaspline, mdiTune } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Tabs from 'components/Tabs'
import { Tab, Row, Col, Card } from 'react-materialize'
import { Map, Marker, TileLayer } from 'react-leaflet'
import 'react-leaflet-fullscreen-control'
import Widget from 'components/Widgets'
import NetworkForm from 'components/NetworkForm/NetworkForm'
import Style from './Network.module.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { withRouter } from 'react-router'
import { compose } from 'redux'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

class Network extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    client
      .service('gps')
      .find()
      .then(({ data }) => {
        this.setState({ data: data[0] })
      })
      .catch(error => {
        console.log(error)
      })

    client.service('gps').on('created', data => {
      console.log('Got a new position', data)

      this.setState({ data })
    })
  }

  render() {
    const {
      t,
      location: {
        state: { networkName, networkPosition, networkIP, wss },
      },
    } = this.props

    return (
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
              {/* <Widget
                enableResize={false}
                type="network"
                hideHeader={true}
                disableContent={true}
                options={{
                  networkName,
                  networkPosition,
                  networkIP,
                  wss,
                }}
              /> */}
              {this.state.data && (
                <>
                  <Col s={3}>
                    <Card title="Latitude">{this.state.data.lat}</Card>
                  </Col>
                  <Col s={3}>
                    <Card title="Longitude">{this.state.data.lon}</Card>
                  </Col>

                  <Col s={3}>
                    <Card title="Speed">{this.state.data.speed}</Card>
                  </Col>

                  <Col s={3}>
                    <Card title="Climb">{this.state.data.climb}</Card>
                  </Col>

                  <Col s={3}>
                    <Card title="Altitude">{this.state.data.alt}</Card>
                  </Col>

                  <Col s={3}>
                    <Card title="EPV">{this.state.data.epv}</Card>
                  </Col>

                  <Col s={3}>
                    <Card title="EPT">{this.state.data.ept}</Card>
                  </Col>
                </>
              )}
            </Col>
            <Col s={12} m={4}>
              <Map
                center={this.state.data ? [this.state.data.lat, this.state.data.lon] : [40, 18]}
                zoom={19}
                className={cx('z-depth-3', Style.Map)}
                fullscreenControl>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {this.state.data && (
                  <Marker position={[this.state.data.lat, this.state.data.lon]} />
                )}
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
  }
}

Network.propTypes = {
  t: PropTypes.func.isRequired,
  networkName: PropTypes.string,
  networkPosition: PropTypes.string,
  networkIp: PropTypes.string,
  wss: PropTypes.string,
  location: PropTypes.object.isRequired,
}

export default compose(
  withNamespaces(),
  withRouter
)(Network)
