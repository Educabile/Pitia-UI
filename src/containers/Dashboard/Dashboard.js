import React from 'react'
import Chart from 'components/Chart/Chart'
import { Row, Col, Card, Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiDelete, mdiPencil } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import { Redirect } from 'react-router-dom'
import Resizable from 're-resizable'
const networksMock = [
  {
    networkName: 'First Network Placeholder',
    wss: 'wss://ws-feed.gdax.com',
  },
  {
    networkName: 'Second Network Placeholder',
  },
]

const Dashboard = ({ t, loggedIn }) =>
  !loggedIn ? (
    <Redirect to="/login" />
  ) : (
    <Row>
      {networksMock.map(({ networkName, wss }) => (
        <Col key={networkName}>
          <Resizable
            defaultSize={{
              width: 500,
            }}
            minWidth={500}
            snap={{ x: [500, 600, 780] }}>
            <Link
              to={{
                pathname: `network/${networkName.toLowerCase().replace(/\s/g, '-')}`,
                state: {
                  wss,
                },
              }}>
              <Card
                textClassName="white-text"
                title={networkName}
                actions={[
                  <Button
                    key="mod"
                    floating
                    flat
                    tooltip={t('modifica')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon path={mdiPencil} size={1.25} />
                  </Button>,
                  <Button
                    key="del"
                    waves
                    floating
                    flat
                    tooltip={t('elimina')}
                    onClick={e => {
                      e.preventDefault()
                      console.log(`Ciao da ${networkName}`)
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon path={mdiDelete} size={1.25} />
                  </Button>,
                ]}>
                <Chart wss="wss://ws-feed.gdax.com" />
              </Card>
            </Link>
          </Resizable>
        </Col>
      ))}
    </Row>
  )

export default withNamespaces()(Dashboard)
