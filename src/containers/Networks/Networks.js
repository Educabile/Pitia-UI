import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Button from 'components/Button'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Spinner from 'components/Spinner'
import Widget from 'components/Widgets'
import { withRouter, Link } from 'react-router-dom'

const Networks = ({ t, networks: { networks, loading, error }, match }) => (
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
    {networks.map((network, index) => (
      <Col key={`${network.networkName}-${index}`}>
        <Link
          to={{
            pathname: `${match.url}/${network.networkName.toLowerCase().replace(/\s/g, '-')}`,
            state: {
              networkName: network.networkName,
              networkPosition: network.networkPosition,
              networkIP: network.networkIP,
              networkDescription: network.networkDescription,
              wss: network.wss,
            },
          }}>
          <Widget type="network" options={network} />
        </Link>
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
