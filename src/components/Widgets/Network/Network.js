import React from 'react'
import PropTypes from 'prop-types'
import Chart from 'components/Chart/Chart'
import Resizable from 're-resizable'
import Icon from '@mdi/react'
import { mdiNetworkOutline } from '@mdi/js'
import { Collapsible, CollapsibleItem } from 'react-materialize'
import { Link } from 'react-router-dom'

const Network = ({
  options: { networkName, networkPosition, networkIP, networkDescription, wss, to },
  enableResize,
}) => {
  let widget = (
    <Resizable
      defaultSize={{
        height: 527,
      }}
      minWidth={515}
      maxWidth={780}
      snap={{ x: [515, 600, 780] }}
      enable={enableResize}>
      <Collapsible>
        <CollapsibleItem
          className="white grey-text text-darken-4 flow-text"
          expanded
          header={
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
              }}>
              <Icon path={mdiNetworkOutline} size={1.5} color="#1565c0" />
              <span style={{ marginLeft: '1em' }} className>
                {networkName}
              </span>
            </span>
          }>
          <Chart wss={wss} />

          {/* <Tabs className="tabs-fixed-width">
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
                    {t('monitora')}
                  </span>
                </span>
              }>
              <Map
                center={[51.505, -0.09]}
                zoom={19}
                fullscreenControl
                style={{ width: 200, height: 300 }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.505, -0.09]} />
              </Map>
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
              <Row className="grey lighten-5">
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
          </Tabs> */}
        </CollapsibleItem>
      </Collapsible>
    </Resizable>
  )

  if (to) {
    widget = (
      <Link
        to={{
          pathname: `/networks/${networkName.toLowerCase().replace(/\s/g, '-')}`,
          state: {
            networkName,
            networkPosition,
            networkIP,
            networkDescription,
            wss,
          },
        }}>
        {widget}
      </Link>
    )
  }

  return widget
}

Network.propTypes = {
  options: PropTypes.shape({
    networkName: PropTypes.string.isRequired,
    wss: PropTypes.string.isRequired,
    to: PropTypes.object,
  }),
  enableResize: PropTypes.shape({
    bottom: PropTypes.bool,
    top: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
  }).isRequired,
}

Network.defaultProps = {
  enableResize: {
    bottom: false,
    top: false,
    left: false,
    right: true,
  },
}

export default Network
