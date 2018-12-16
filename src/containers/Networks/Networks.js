import React from 'react'
import Chart from 'components/Chart/Chart'
import Icon from '@mdi/react'
import {
  mdiDelete,
  mdiPencil,
  mdiPlus,
  mdiPlusNetwork,
  mdiLabelOutline,
  mdiCrosshairsGps,
  mdiDomain,
  mdiNumeric,
} from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Button from 'components/Button/Button'
import Resizable from 're-resizable'
import { Row, Col, Card, Modal, Input } from 'react-materialize'
import { Link } from 'react-router-dom'

const networksMock = [
  {
    networkName: 'First Network Placeholder',
    networkPosition: 'Naples, Italy',
    networkIP: '143.225.48.253',
    wss: 'wss://ws-feed.gdax.com',
  },
  {
    networkName: 'This is a Network Placeholder',
    networkPosition: 'Orlando, USA',
    networkIP: '125.32.44.167',
    wss: 'wss://ws-feed.gdax.com',
  },
  {
    networkName: 'Third Network Placeholder',
    networkPosition: 'Paris, France',
    networkIP: '230.12.222.176',
    wss: 'wss://ws-feed.gdax.com',
  },
  {
    networkName: 'Another Network Placeholder',
    networkPosition: 'Bruxelles, Belgium',
    networkIP: '245,97.12.35',
    wss: 'wss://ws-feed.gdax.com',
  },
]

const Networks = ({ t, match }) => (
  <>
    <Row>
      {networksMock.map(({ networkName, networkPosition, networkIP, wss }) => (
        <Col key={networkName}>
          <Resizable
            defaultSize={{
              height: 527,
            }}
            // minWidth={500}
            maxWidth={780}
            snap={{ x: [500, 600, 780] }}
            enable={{
              bottom: false,
              top: false,
              left: false,
              right: true,
            }}>
            <Link
              to={{
                pathname: `${match.url}/${networkName.toLowerCase().replace(/\s/g, '-')}`,
                state: {
                  networkName,
                  networkPosition,
                  networkIP,
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
          bottom: 72,
        }}
        tooltip="Crea un nuovo network"
        tooltipOptions={{
          position: 'left',
        }}
      />
    </Row>
    <Modal
      id="networks-modal"
      header={
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
          }}>
          <Icon path={mdiPlusNetwork} size={1.5} color="#1565c0" />
          <span style={{ marginLeft: '1em' }}>Crea un nuovo network</span>
        </span>
      }>
      <form
        onSubmit={e => {
          e.preventDefault()
        }}>
        <Row>
          <Input s={12} label="Nome della rete" validate required>
            <Icon path={mdiLabelOutline} size={1.175} color="#1565c0" />
          </Input>
          <Input s={12} label="Posizione della rete" validate>
            <Icon path={mdiCrosshairsGps} size={1.175} color="#1565c0" />
          </Input>
          <Input s={12} label="Struttura di riferimento" validate>
            <Icon path={mdiDomain} size={1.175} color="#1565c0" />
          </Input>
          <Input s={12} label="Indirizzo IP della rete" validate>
            <Icon path={mdiNumeric} size={1.175} color="#1565c0" />
          </Input>

          <div className="center">
            <Button
              onClick={() => {
                window.$('#networks-modal').modal('close')
                window.M.toast({ html: 'Nuova rete creata con successo', classes: 'rounded' })
              }}
              className="hoverable blue darken-3 white-text"
              waves
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <span
                style={{
                  marginRight: '1em',
                }}>
                Crea rete
              </span>
              <Icon path={mdiPlus} size={1} color="white" />
            </Button>
          </div>
        </Row>
      </form>
    </Modal>
  </>
)

export default withNamespaces()(Networks)
