import React from 'react'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Button from 'components/Button/Button'
import { Row, Col } from 'react-materialize'
import Widget from 'components/Widgets'

const networksMock = [
  {
    networkName: 'First Network Placeholder',
    networkPosition: 'Naples, Italy',
    networkIP: '143.225.48.253',
    networkDescription: 'Lorem ipsum dolorem sit amet',
    wss: 'wss://ws-feed.gdax.com',
  },
  {
    networkName: 'This is a Network Placeholder',
    networkPosition: 'Orlando, USA',
    networkIP: '125.32.44.167',
    networkDescription: 'This is a test description',
    wss: 'wss://ws-feed.gdax.com',
  },
  {
    networkName: 'Third Network Placeholder',
    networkPosition: 'Paris, France',
    networkIP: '230.12.222.176',
    networkDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue vestibulum libero sit amet posuere. Nunc at vulputate tortor. Morbi pellentesque lectus ut quam tempor eleifend. Ut blandit ornare lacus, eget dapibus quam consequat luctus. Maecenas eu eros tellus. Cras scelerisque nunc mauris, nec rhoncus orci tincidunt non. Sed suscipit tincidunt molestie. Fusce imperdiet felis vel odio dignissim, vitae vehicula urna ullamcorper. Sed ornare fermentum massa ut lobortis. Suspendisse interdum lacinia sem, et semper enim.',
    wss: 'wss://ws-feed.gdax.com',
  },
  {
    networkName: 'Another Network Placeholder',
    networkPosition: 'Bruxelles, Belgium',
    networkIP: '245.97.12.35',
    networkDescription: 'This network is situated in Bruxelles',
    wss: 'wss://ws-feed.gdax.com',
  },
]

const Networks = ({ t }) => (
  <>
    <Row className="grey lighten-5" style={{ marginBottom: 0, overflow: 'hidden' }}>
      {networksMock.map(({ networkName, networkPosition, networkIP, networkDescription, wss }) => (
        <Col key={networkName}>
          <Widget
            type="network"
            options={{
              networkName,
              networkPosition,
              networkIP,
              networkDescription,
              wss,
              to: {
                networkName,
                networkPosition,
                networkIP,
                networkDescription,
              },
            }}
          />
        </Col>
      ))}
      <Button
        onClick={() => {
          window.$('#networks-modal').modal('open')
        }}
        floating
        fab
        waves="light"
        icon={
          <Icon
            path={mdiPlus}
            size={1.25}
            color="white"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        }
        className="blueGradient hoverable"
        large
        style={{
          bottom: 20,
        }}
        tooltip={t('creaNetwork')}
        tooltipOptions={{
          position: 'left',
        }}
      />
    </Row>
  </>
)

export default withNamespaces()(Networks)
