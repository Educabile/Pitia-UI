import React from 'react'
import PropTypes from 'prop-types'
import Chart from 'components/Chart'
import Icon from '@mdi/react'
import { mdiDelete, mdiPencil, mdiPlus } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Button from 'components/Button'
import Resizable from 're-resizable'
import { Row, Col, Card } from 'react-materialize'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import Spinner from 'components/Spinner'

const Networks = ({ t, match, networks: { networks, loading, error } }) => (
  <Row
    className="grey lighten-5"
    style={{
      minHeight: 'calc(100vh - 56px)',
      maxHeight: 'calc(100vh - 56px)',
      marginBottom: 0,
      padding: '20px 0',
      overflowX: 'hidden',
      overflowY: 'auto',
    }}>
    {loading && <Spinner />}
    {error && <h1>{error}</h1>}
    {networks.map(({ networkName, networkPosition, networkIP, networkDescription, wss }, index) => (
      <Col key={`${networkName}-${index}`}>
        <Resizable
          defaultSize={{
            height: 527,
          }}
          minWidth={515}
          maxWidth={780}
          snap={{ x: [515, 600, 780] }}
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
                networkDescription,
                wss,
              },
            }}>
            <Card
              textClassName="grey-text text-darken-2 flow-text"
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
        bottom: 20,
      }}
      tooltip={t('creaNetwork')}
      tooltipOptions={{
        position: 'left',
      }}
    />
  </Row>
)

Networks.propTypes = {
  t: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  networks: PropTypes.object.isRequired,
}

const mapStateToProps = ({ networks }) => ({
  networks,
})

export default compose(
  withNamespaces(),
  connect(
    mapStateToProps,
    null
  ),
  withRouter
)(Networks)
